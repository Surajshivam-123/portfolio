import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * ThreeCanvas renders a self-contained WebGL 3D scene:
 * - A central rotating torus knot wireframe (cyan)
 * - An inner orbiting point cloud sphere (amber)
 * - A field of floating, interactive particles that respond to mouse coordinates
 */
export default function ThreeCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Initial Scene Setup
    const scene = new THREE.Scene();
    
    // Add exponential fog to naturally fade objects as they drift further away
    scene.fog = new THREE.FogExp2(0x050709, 0.08);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 7.5;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // 4. Geometries & Materials
    
    // Torus Knot (Cyan Wireframe)
    const torusKnotGeo = new THREE.TorusKnotGeometry(1.4, 0.4, 120, 16);
    const torusKnotMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const torusKnot = new THREE.Mesh(torusKnotGeo, torusKnotMat);
    scene.add(torusKnot);

    // Inner Orb (Amber Points)
    const sphereGeo = new THREE.SphereGeometry(0.85, 20, 20);
    const sphereMat = new THREE.PointsMaterial({
      color: 0xffb700,
      size: 0.025,
      transparent: true,
      opacity: 0.65,
    });
    const innerSphere = new THREE.Points(sphereGeo, sphereMat);
    scene.add(innerSphere);

    // Floating Particles (Mixed Cyan, Amber, and Green stars)
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color(0x00e5ff), // cyan
      new THREE.Color(0xffb700), // amber
      new THREE.Color(0x39ff14), // green
    ];

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Distribute randomly in a 3D bounding box
      positions[i] = (Math.random() - 0.5) * 14;
      positions[i + 1] = (Math.random() - 0.5) * 14;
      positions[i + 2] = (Math.random() - 0.5) * 14;

      // Select random color from custom color palette
      const particleColor = palette[Math.floor(Math.random() * palette.length)];
      colors[i] = particleColor.r;
      colors[i + 1] = particleColor.g;
      colors[i + 2] = particleColor.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Dynamic circular glowing particle texture using canvas
    const createCircleTexture = () => {
      const size = 16;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      
      const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, size, size);
      
      return new THREE.CanvasTexture(canvas);
    };

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      map: createCircleTexture(),
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 5. Interaction variables & Mouse Handlers
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      // Map to normalized coordinates [-1, 1]
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler via ResizeObserver
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 6. Rendering Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      // Smoothly interpolate (lerp) towards target mouse coordinates
      targetX = targetX * 0.95 + mouseX * 0.05;
      targetY = targetY * 0.95 + mouseY * 0.05;

      // Base rotations
      torusKnot.rotation.y = elapsed * 0.12;
      torusKnot.rotation.x = elapsed * 0.06;

      // Add mouse coordinate parallax shift
      torusKnot.rotation.y += targetX * 0.35;
      torusKnot.rotation.x += targetY * 0.35;

      // Orbit inner sphere opposite
      innerSphere.rotation.y = -elapsed * 0.18;
      innerSphere.rotation.x = -elapsed * 0.09;

      // Slow drift of background particle cloud
      particles.rotation.y = elapsed * 0.015;
      particles.rotation.x = elapsed * 0.008;
      
      // Dynamic shift of particle field based on cursor (parallax)
      particles.position.x = targetX * 1.2;
      particles.position.y = targetY * 1.2;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose webGL objects from graphics memory to prevent leaks
      torusKnotGeo.dispose();
      torusKnotMat.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
}
