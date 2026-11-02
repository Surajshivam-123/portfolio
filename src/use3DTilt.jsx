import React, { useRef, useEffect } from "react";

/**
 * React hook to apply a hardware-accelerated 3D tilt effect on elements when hovered.
 * Automatically adds a dynamic glare overlay that follows the mouse.
 */
function use3DTilt(options = {}) {
  const elementRef = useRef(null);
  const glareRef = useRef(null);

  const {
    maxTilt = 8,
    perspective = 1000,
    scale = 1.02,
    speed = 400,
    glareOpacity = 0.1,
  } = options;

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Create glare child element
    let glare = glareRef.current;
    if (!glare) {
      glare = document.createElement("div");
      glare.className = "card-glare";
      Object.assign(glare.style, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)",
        opacity: 0,
        transition: `opacity ${speed}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        zIndex: 99,
        borderRadius: "inherit",
      });
      
      const currentPos = window.getComputedStyle(el).position;
      if (currentPos === "static") {
        el.style.position = "relative";
      }
      
      el.appendChild(glare);
      glareRef.current = glare;
    }

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const width = rect.width;
      const height = rect.height;

      const normX = (x / width) - 0.5;
      const normY = (y / height) - 0.5;

      const tiltX = -normY * maxTilt;
      const tiltY = normX * maxTilt;

      el.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`;

      const glarePercentX = (x / width) * 100;
      const glarePercentY = (y / height) * 100;
      glare.style.backgroundImage = `radial-gradient(circle at ${glarePercentX}% ${glarePercentY}%, rgba(255, 255, 255, ${glareOpacity}) 0%, transparent 60%)`;
      glare.style.opacity = 1;
    };

    const handleMouseEnter = () => {
      el.style.transition = `transform ${speed}ms cubic-bezier(0.22, 1, 0.36, 1)`;
      glare.style.transition = `opacity ${speed}ms cubic-bezier(0.22, 1, 0.36, 1)`;
      
      setTimeout(() => {
        if (el.style.transform !== "") {
          el.style.transition = "none";
          glare.style.transition = "none";
        }
      }, speed);
    };

    const handleMouseLeave = () => {
      el.style.transition = `transform ${speed}ms cubic-bezier(0.22, 1, 0.36, 1)`;
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      
      glare.style.transition = `opacity ${speed}ms cubic-bezier(0.22, 1, 0.36, 1)`;
      glare.style.opacity = 0;
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
      if (glare && el.contains(glare)) {
        el.removeChild(glare);
      }
    };
  }, [maxTilt, perspective, scale, speed, glareOpacity]);

  return elementRef;
}

/**
 * A handy React wrapper component that applies the 3D tilt ref internally.
 */
export function Tilt({ children, className, style, options, as = "div", ...props }) {
  const ref = use3DTilt(options);
  return React.createElement(as, { ref, className, style, ...props }, children);
}

export default Tilt;
