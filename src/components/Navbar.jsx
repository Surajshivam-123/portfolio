import React, { useState, useEffect } from "react";
import { Menu, X, FileText, Github, Linkedin, Mail, Terminal as TerminalIcon, Search } from "lucide-react";

export default function Navbar({ onOpenResume, onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "projects", "opensource", "skills", "achievements", "education", "terminal"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#hero", id: "hero", label: "Overview" },
    { href: "#projects", id: "projects", label: "Projects" },
    { href: "#opensource", id: "opensource", label: "Open Source" },
    { href: "#skills", id: "skills", label: "Skills" },
    { href: "#achievements", id: "achievements", label: "Honors" },
    { href: "#education", id: "education", label: "Education" },
    { href: "#terminal", id: "terminal", label: "Terminal" },
  ];

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#090A0F]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#hero");
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 via-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center font-mono font-black text-lg text-white group-hover:border-cyan-400/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all">
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">SK</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-semibold text-sm tracking-tight text-gray-200 group-hover:text-white transition">Suraj Kumar</span>
              <span className="block text-[10px] font-mono text-gray-400">IIIT Pune • AI & Systems</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#12131a]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navItems.map(({ href, id, label }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(href);
                  }}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-[0_0_12px_rgba(99,102,241,0.4)]"
                      : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2.5">
            {/* Quick Command Launcher Button */}
            {onOpenPalette && (
              <button
                onClick={onOpenPalette}
                className="hidden lg:flex items-center gap-2 px-2.5 py-1.5 text-xs text-gray-400 hover:text-gray-200 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition"
                title="Command Palette"
              >
                <Search size={13} className="text-cyan-400" />
                <span className="font-mono text-[11px]">⌘K</span>
              </button>
            )}

            {/* Social icon link badges */}
            <a
              href="https://github.com/Surajshivam-123"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/5 transition"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/suraj-kumar-79522b324"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-[#0077b5] bg-white/5 hover:bg-white/10 rounded-lg border border-white/5 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>

            {/* Resume Trigger CTA */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 rounded-lg shadow-md shadow-indigo-500/20 border border-white/10 transition transform active:scale-95"
            >
              <FileText size={14} />
              <span className="hidden sm:inline">Resume</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[65px] z-30 md:hidden bg-[#0e1017]/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(href);
                }}
                className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition"
              >
                {label}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl"
              >
                <FileText size={16} />
                <span>View & Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
