import { useState, useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import Profile from "./Profile.jsx";

// Technology Logo Components
const CppLogo = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#00599C">
    <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79z"/>
  </svg>
);

const JavaScriptLogo = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <path fill="#F7DF1E" d="M0 0h24v24H0V0z"/>
    <path fill="#000" d="M6.4 18.7c.3.5.7.9 1.4.9.6 0 1-.2 1-1.1v-6h2v6c0 1.8-1.1 2.6-2.6 2.6-1.4 0-2.3-.7-2.7-1.6l1.9-1.1zm6.1-.1c.4.6 1 1.1 2 1.1.8 0 1.3-.4 1.3-1 0-.7-.5-.9-1.3-1.3l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.9 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.5l-1.5 1c-.3-.6-.7-.8-1.2-.8-.6 0-.9.3-.9.8 0 .6.4.8 1.2 1.2l.5.2c1.6.7 2.5 1.4 2.5 3 0 1.7-1.3 2.6-3.1 2.6-1.7 0-2.8-.8-3.4-1.9l1.7-1z"/>
  </svg>
);

const PythonLogo = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <path fill="#3776AB" d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.913 0zM8.708 1.85c.578 0 1.05.48 1.05 1.07 0 .59-.472 1.07-1.05 1.07-.58 0-1.05-.48-1.05-1.07 0-.59.47-1.07 1.05-1.07z"/>
    <path fill="#FFD43B" d="M12.087 24c6.092 0 5.712-2.656 5.712-2.656l-.007-2.752h-5.814v-.826h8.123s3.9.445 3.9-5.735c0-6.18-3.404-5.96-3.404-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.452s-3.24-.052-3.24 3.148v5.292S5.72 24 12.087 24zm3.206-1.85c-.578 0-1.05-.48-1.05-1.07 0-.59.472-1.07 1.05-1.07.58 0 1.05.48 1.05 1.07 0 .59-.47 1.07-1.05 1.07z"/>
  </svg>
);

const CLogo = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <path fill="#A8B9CC" d="M16.5 9.4c-.4-.5-1.1-.7-1.7-.4-.6.3-.9 1-.7 1.7.2.6.8 1 1.5 1 .2 0 .4 0 .6-.1.6-.3.9-1 .7-1.7-.1-.3-.2-.4-.4-.5zM12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm3.5 14.8c-.7 1.3-2 2.1-3.5 2.1-2.2 0-4-1.8-4-4s1.8-4 4-4c1.3 0 2.5.7 3.2 1.7l1.5-1.3c-1-1.4-2.7-2.3-4.7-2.3-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6c2.2 0 4.1-1.3 5-3.2l-1.5-.9z"/>
  </svg>
);

const ReactLogo = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
    <path fill="none" stroke="#61DAFB" strokeWidth="1" d="M12 2c-2.2 0-4.3.5-6.1 1.5C3.7 4.8 2 7.2 2 10c0 2.8 1.7 5.2 3.9 6.5 1.8 1 3.9 1.5 6.1 1.5s4.3-.5 6.1-1.5C20.3 15.2 22 12.8 22 10c0-2.8-1.7-5.2-3.9-6.5C16.3 2.5 14.2 2 12 2z"/>
    <path fill="none" stroke="#61DAFB" strokeWidth="1" d="M12 2c0 2.2-.5 4.3-1.5 6.1C9.2 10.3 6.8 12 4 12c-2.8 0-5.2-1.7-6.5-3.9C-3.5 6.3-4 4.2-4 2c0-2.2.5-4.3 1.5-6.1C-1.2-6.3 1.2-8 4-8c2.8 0 5.2 1.7 6.5 3.9C11.5-2.3 12-.2 12 2z"/>
    <path fill="none" stroke="#61DAFB" strokeWidth="1" d="M12 2c0-2.2.5-4.3 1.5-6.1C14.8-6.3 17.2-8 20-8c2.8 0 5.2 1.7 6.5 3.9C27.5-2.3 28-.2 28 2c0 2.2-.5 4.3-1.5 6.1C25.2 10.3 22.8 12 20 12c-2.8 0-5.2-1.7-6.5-3.9C12.5 6.3 12 4.2 12 2z"/>
  </svg>
);

const HTMLCSSLogo = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <path fill="#E34F26" d="M1.5 0h10l-.9 10.1L6 12l-4.6-1.9L.5 0z"/>
    <path fill="#1572B6" d="M12.5 0h10l-.9 10.1L17 12l-4.6-1.9-.9-10.1z"/>
    <path fill="#EBEBEB" d="M6 4.5H3.8l.2 2H6v2H4.5l.2 2H6v2l-2.3-.9-.1-1.1H1.8l.2 2.5L6 14v-2l-1.8-.7-.2-1.8H6V7.5H4.2l-.2-2H6V4.5z"/>
    <path fill="#FFF" d="M17 4.5h-2.2l.2 2H17v2h-1.5l.2 2H17v2l-2.3-.9-.1-1.1h-1.8l.2 2.5L17 14v-2l-1.8-.7-.2-1.8H17V7.5h-1.8l-.2-2H17V4.5z"/>
  </svg>
);

const TailwindLogo = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <path fill="#06B6D4" d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"/>
  </svg>
);

const NodeLogo = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <path fill="#339933" d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22h-.96c-.12 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76l-2.05-1.18c-.07-.04-.11-.11-.11-.19V7.71c0-.08.04-.15.11-.19l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.11.11.19v8.59c0 .08-.04.15-.11.19l-7.44 4.29c-.06.04-.16.04-.22 0l-1.9-1.12c-.06-.03-.12-.04-.18-.01-.5.28-.6.32-1.07.48-.12.04-.29.1.07.29l2.48 1.47c.24.14.5.2.78.2.27 0 .54-.07.77-.2l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.77-.2z"/>
  </svg>
);

const GitLogo = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <path fill="#F05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.428 1.9l2.658 2.66c.645-.23 1.387-.087 1.9.428.717.718.717 1.88 0 2.597-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.605-.406-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
  </svg>
);

const PostmanLogo = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <path fill="#FF6C37" d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268z"/>
  </svg>
);

const MySQLLogo = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <path fill="#4479A1" d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"/>
  </svg>
);

const MongoDBLogo = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <path fill="#47A248" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
  </svg>
);

const projects = [
  {
    title: "Campus-Sphere",
    description:
      "A Web app to manage events where you can manage college events like sports, cultural events and more via separate invitation code for members and participants.",
    tech: ["React", "Node.js", "MongoDB","Redis","Web-Socket","Google Auth"],
    link: "https://surajshivam-123.github.io/Campus-Sphere/",
  },
];

const skills = [
  {
    cat: "Languages",
    color: "#00e5ff",
    shadow: "rgba(0,229,255,0.4)",
    items: [
      { name: "C++", emoji: <CppLogo size={18} /> },
      { name: "JavaScript", emoji: <JavaScriptLogo size={18} /> },
      { name: "Python", emoji: <PythonLogo size={18} /> },
      { name: "C", emoji: <CLogo size={18} /> },
    ],
  },
  {
    cat: "Frontend",
    color: "#ffb700",
    shadow: "rgba(255,183,0,0.4)",
    items: [
      { name: "React", emoji: <ReactLogo size={18} /> },
      { name: "HTML", emoji: <HTMLCSSLogo size={18} /> },
      { name: "TailwindCSS", emoji: <TailwindLogo size={18} /> },
    ],
  },
  {
    cat: "Backend & Tools",
    color: "#39ff14",
    shadow: "rgba(57,255,20,0.4)",
    items: [
      { name: "Node.js", emoji: <NodeLogo size={18} /> },
      { name: "Git", emoji: <GitLogo size={18} /> },
      { name: "Postman", emoji: <PostmanLogo size={18} /> },
    ],
  },
  {
    cat: "Databases",
    color: "#39ff14",
    shadow: "rgba(57,255,20,0.4)",
    items: [
      { name: "MySQL", emoji: <MySQLLogo size={18} /> },
      { name: "MongoDB", emoji: <MongoDBLogo size={18} /> },
    ],
  },
];

// Intersection Observer hook
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function AnimatedBar({ level, color }) {
  const [ref, inView] = useInView(0.2);
  return (
    <div ref={ref} className="skill-bar-track">
      <div
        className={`skill-bar-fill${inView ? " animate" : ""}`}
        style={{ "--fill-width": `${level}`, "--bar-color": color }}
      />
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navTo = (id) => {
    setMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#profile", label: "Profile" },
    { href: "#contact", label: "Contact" },
  ];

  const [heroRef, heroInView] = useInView(0.1);
  const [aboutRef, aboutInView] = useInView(0.1);
  const [projectsRef, projectsInView] = useInView(0.1);
  const [skillsRef, skillsInView] = useInView(0.1);

  return (
    <>
      <div className="mesh-bg" />

      {/* NAV */}
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="nav-logo">SK</div>
        <ul className="nav-links">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={(e) => { e.preventDefault(); navTo(href); }}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-nav">
          {navItems.map(({ href, label }) => (
            <a key={href} href={href} onClick={(e) => { e.preventDefault(); navTo(href); }}>
              {label}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="hero" ref={heroRef}>
        <div className={`hero${heroInView ? " section-visible" : ""}`}>
          <div className="hero-inner">
            <div className="hero-badge">
              <span className="badge-dot" />
              Available for opportunities
            </div>
            <h1 className="hero-title">
              Suraj<br />
              <span className="line-accent">Kumar.</span>
            </h1>
            <p className="hero-sub">
              Engineering student at the{" "}
              <strong>Indian Institute of Information Technology Pune</strong>, driven by
              curiosity and powered by code. I thrive on solving challenging problems,
              optimizing systems, and continuously pushing my limits.
              <br />
              <strong>Always learning. Always building.</strong>
            </p>
            <div className="hero-ctas">
              <a
                href="#projects"
                className="btn-primary"
                onClick={(e) => { e.preventDefault(); navTo("#projects"); }}
              >
                View Work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="btn-ghost"
                onClick={(e) => { e.preventDefault(); navTo("#contact"); }}
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      <div className="section-divider" />

      {/* ABOUT */}
      <section id="about" ref={aboutRef}>
        <div className={`section-wrapper${aboutInView ? " section-visible" : ""}`}>
          <div className="section-label">About</div>
          <h2 className="section-title">Who I am<br />& what I do.</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a <strong>Second-year Engineering student</strong> at IIIT Pune,
                passionate about the intersection of competitive programming and
                full-stack development. I believe that strong algorithmic foundations
                make better engineers.
              </p>
              <p>
                My journey started with competitive programming on Codeforces and LeetCode,
                where I developed sharp problem-solving instincts. That same rigour now
                drives how I architect software — <strong>efficient, scalable, and clean.</strong>
              </p>
              <p>
                Outside of code, I'm exploring Backend Development. I'm actively looking for internships and
                collaborative projects where I can grow and contribute meaningfully.
              </p>
            </div>
              <div className="stat-box">
                <div className="stat-num">500+</div>
                <div className="stat-label">Problems Solved on all Platforms</div>
              </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* PROJECTS */}
      <section id="projects" ref={projectsRef}>
        <div className={`section-wrapper${projectsInView ? " section-visible" : ""}`}>
          <div className="section-label">Work</div>
          <h2 className="section-title">Selected<br />Projects.</h2>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div className="project-card" key={p.title} style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="project-num">0{i + 1}</div>
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.description}</div>
                <div className="project-tags">
                  {p.tech.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                <a href={p.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* SKILLS */}
      <section id="skills" className="skills-section" ref={skillsRef}>
        {/* Top ticker */}
        <div className="skills-ticker-wrap">
          <div className="skills-ticker">
            {[...Array(3)].flatMap(() =>
              ["C++","C", "React", "Node.js", "MongoDB", "Python", "Git", "Data Structures & Algorithms", "JavaScript"].map((s) => (
                <span className="ticker-item" key={`${s}-${Math.random()}`}>
                  <span className="ticker-dot" />{s}
                </span>
              ))
            )}
          </div>
        </div>

        <div className={`skills-inner${skillsInView ? " section-visible" : ""}`}>
          <div className="skills-header">
            <div>
              <div className="section-label">Expertise</div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Skills &amp;<br />Stack.</h2>
            </div>
            <p className="skills-subtitle">
              Tools and technologies I use to bring ideas to life — from competitive algorithms to full-stack products.
            </p>
          </div>

          <div className="skills-categories">
            {skills.map((cat) => (
              <div
                className="skill-category"
                key={cat.cat}
                style={{ "--cat-color": cat.color, "--cat-shadow": cat.shadow }}
              >
                <div className="cat-header">
                  <span className="cat-indicator" />
                  <span className="cat-label">{cat.cat}</span>
                  <span className="cat-count">{cat.items.length} skills</span>
                </div>
                <div className="cat-skills">
                  {cat.items.map((sk) => (
                    <div className="skill-item" key={sk.name} style={{ "--cat-shadow": cat.shadow }}>
                      <div className="skill-item-top">
                        <span className="skill-emoji">{sk.emoji}</span>
                        <span className="skill-name">{sk.name}</span>
                      </div>
                      <div className="skill-bar-wrapper">
                        <AnimatedBar level={sk.level} color={cat.color} />
                        <div className="skill-level-label">{sk.level}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom ticker */}
        <div className="skills-ticker-wrap skills-ticker-wrap--bottom">
          <div className="skills-ticker skills-ticker--reverse">
            {[...Array(3)].flatMap(() =>
              ["Problem Solving",  "REST APIs", "Competitive Programming", "Data Structure & Algorithm", "Full Stack Web Development"].map((s) => (
                <span className="ticker-item" key={`${s}-${Math.random()}`}>
                  <span className="ticker-dot" />{s}
                </span>
              ))
            )}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* PROFILE */}
      <section id="profile">
        <Profile />
      </section>

      <div className="section-divider" />

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title">Let's Work<br />Together.</h2>
            <p className="contact-description">
              I'm currently looking for internship opportunities and exciting projects to work on.
              Whether you want to discuss a project, ask a question, or just say hi — feel free to reach out!
            </p>
          </div>

          <div className="contact-grid">
            <a href="mailto:skumar919810@gmail.com" className="contact-item contact-item-email">
              <div className="contact-item-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact-item-content">
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">skumar919810@gmail.com</div>
              </div>
            </a>

            <a href="tel:+918340316362" className="contact-item contact-item-phone">
              <div className="contact-item-icon">
                <Phone size={24} />
              </div>
              <div className="contact-item-content">
                <div className="contact-item-label">Phone</div>
                <div className="contact-item-value">+91 8340316362</div>
              </div>
            </a>

            <a 
              href="https://github.com/Surajshivam-123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-item contact-item-github"
            >
              <div className="contact-item-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div className="contact-item-content">
                <div className="contact-item-label">GitHub</div>
                <div className="contact-item-value">@Surajshivam-123</div>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/suraj-kumar-79522b324" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-item contact-item-linkedin"
            >
              <div className="contact-item-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="contact-item-content">
                <div className="contact-item-label">LinkedIn</div>
                <div className="contact-item-value">Suraj Kumar</div>
              </div>
            </a>
          </div>

          <div className="contact-cta">
            <p>Open to internships, freelance projects, and collaborations</p>
            <a href="mailto:skumar919810@gmail.com" className="btn-primary">
              Send me a message
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-brand">Suraj Kumar</span>
        <span className="footer-center">IIIT Pune — Class of 2026</span>
        <span>© {new Date().getFullYear()} — Built with React &amp; love</span>
      </footer>
    </>
  );
}