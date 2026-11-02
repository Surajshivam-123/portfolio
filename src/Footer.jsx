import React from "react";
import Logo from "./Logo.jsx";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "/Home", href: "#hero" },
    { name: "/Projects", href: "#projects" },
    { name: "/Experience", href: "#experience" },
    { name: "/Skills", href: "#skills" },
    { name: "/Profile", href: "#profile" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Surajshivam-123",
      icon: <Github size={17} />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/suraj-kumar-79522b324",
      icon: <Linkedin size={17} />,
    },
    {
      name: "Email",
      href: "mailto:skumar919810@gmail.com",
      icon: <Mail size={17} />,
    },
    {
      name: "Phone",
      href: "tel:+918340316362",
      icon: <Phone size={17} />,
    },
  ];

  return (
    <footer className="relative bg-[#131722] border-t border-slate-800/80 text-slate-300 font-mono overflow-hidden">
      {/* Subtle radial ambient glows in background */}
      <div className="pointer-events-none absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />

      {/* Main 3-Column Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-10 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start">
          {/* ========================================================= */}
          {/* 1. LEFT COLUMN: Brand, Terminal Tagline & Email Card       */}
          {/* ========================================================= */}
          <div className="space-y-5">
            {/* Brand Header */}
            <Logo size="md" withName={true} subtitle="Software Engineer" />

            {/* Terminal-Style Taglines */}
            <div className="text-xs text-slate-400 space-y-1.5 pl-0.5">
              <div className="flex items-center gap-2">
                <span className="text-orange-400 font-bold select-none">&gt;</span>
                <span>Building digital experiences</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400 font-bold select-none">&gt;</span>
                <span>One line of code at a time</span>
              </div>
            </div>

            {/* Contact Card (Email & Phone) */}
            <div className="rounded-xl border border-slate-700/60 bg-[#1a1f2c]/50 p-4 backdrop-blur-sm hover:border-slate-600/80 transition-colors space-y-2.5">
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-sky-400 shrink-0" />
                <a
                  href="mailto:skumar919810@gmail.com"
                  className="text-sky-400 text-xs sm:text-sm hover:underline font-semibold truncate"
                >
                  skumar919810@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-2 border-t border-slate-800/80">
                <Phone size={14} className="text-emerald-400 shrink-0" />
                <a
                  href="tel:+918340316362"
                  className="text-emerald-400 text-xs sm:text-sm hover:underline font-semibold"
                >
                  +91 8340316362
                </a>
              </div>
              <p className="text-[11px] text-slate-400 pt-0.5 pl-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                <span>Available for exciting opportunities</span>
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. MIDDLE COLUMN: Quick Links & Mini Code Terminal         */}
          {/* ========================================================= */}
          <div className="space-y-5">
            <h4 className="text-orange-400 font-bold text-xs uppercase tracking-wider">
              Quick Links
            </h4>

            {/* Terminal Slash Navigation Links */}
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors group inline-flex items-center"
                  >
                    <span className="text-slate-600 group-hover:text-orange-400 transition-colors mr-1">
                      /
                    </span>
                    <span>{link.name.replace("/", "")}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mini Terminal / Code Snippet Window */}
            <div className="rounded-xl bg-[#0d1017] border border-slate-800 p-4 text-xs shadow-inner relative group">
              {/* macOS-style Window Control Dots */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-[10px] text-slate-500">status.js</span>
              </div>

              {/* Code Snippet */}
              <pre className="text-[11px] sm:text-xs leading-relaxed overflow-x-auto text-slate-300">
                <code>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-sky-300">status</span> = {"{\n"}
                  {"  "}
                  <span className="text-slate-300">coffee</span>:{" "}
                  <span className="text-amber-400">true</span>,{"\n"}
                  {"  "}
                  <span className="text-slate-300">coding</span>:{" "}
                  <span className="text-emerald-400">&quot;24/7&quot;</span>
                  {"\n}"};
                </code>
              </pre>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 3. RIGHT COLUMN: Connect With Me & Stat Badges             */}
          {/* ========================================================= */}
          <div className="space-y-5">
            <h4 className="text-orange-400 font-bold text-xs uppercase tracking-wider">
              Connect With Me
            </h4>

            {/* Social Icon Buttons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="h-10 w-10 rounded-full bg-slate-800/70 border border-slate-700/70 text-slate-300 hover:text-white hover:bg-slate-700 hover:border-slate-500 flex items-center justify-center transition-all duration-200 hover:scale-105"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Stat Metric Badges (2-column pill cards) */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {/* Card A: Commits */}
              <div className="border border-orange-500/30 bg-orange-950/20 rounded-xl p-3 text-center transition-all hover:border-orange-500/50 hover:bg-orange-950/30">
                <div className="text-lg sm:text-xl font-bold text-orange-400">
                  100+
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Commits
                </div>
              </div>

              {/* Card B: Learning */}
              <div className="border border-cyan-500/30 bg-cyan-950/20 rounded-xl p-3 text-center transition-all hover:border-cyan-500/50 hover:bg-cyan-950/30">
                <div className="text-lg sm:text-xl font-bold text-cyan-400">
                  24/7
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Learning
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. BOTTOM COPYRIGHT BAR                                    */}
        {/* ========================================================= */}
        <div className="border-t border-slate-800/80 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div className="text-center sm:text-left">
            <span>© {currentYear} Suraj Kumar. Crafted with ❤️ and lots of ☕</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300 font-medium">Currently available for work</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
