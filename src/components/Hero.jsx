import React, { useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Terminal, Code2, Cpu, Activity } from "lucide-react";
import { Tilt } from "../use3DTilt.jsx";

export default function Hero({ onOpenResume, onOpenTerminal }) {
  const [activeFocus, setActiveFocus] = useState("Distributed Systems");
  const [ping, setPing] = useState(14);
  const [pinging, setPinging] = useState(false);

  const focusList = ["Distributed Systems", "Graph DBs & Neo4j", "WebSockets", "Deep Learning"];

  const handleTestPing = () => {
    setPinging(true);
    setTimeout(() => {
      setPing(Math.floor(Math.random() * 8 + 8));
      setPinging(false);
    }, 200);
  };

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    {
      num: "800+",
      label: "Algorithmic Problems Solved",
      sub: "LeetCode, Codeforces & CodeChef",
      color: "from-cyan-400 to-blue-500",
      glow: "rgba(6, 182, 212, 0.2)"
    },
    {
      num: "39k+ ★",
      label: "Open-Source Impact",
      sub: "Auto-FK Algorithm in drawDB",
      color: "from-amber-400 to-orange-500",
      glow: "rgba(245, 158, 11, 0.2)"
    },
    {
      num: "9.07",
      label: "CGPA at IIIT Pune",
      sub: "B.Tech in ECE with AI Honours",
      color: "from-emerald-400 to-teal-500",
      glow: "rgba(16, 185, 129, 0.2)"
    }
  ];

  const marqueeItems = [
    "Distributed Systems",
    "Neo4j AuraDB",
    "Cypher Graph Queries",
    "WebSockets",
    "Redis Pub/Sub",
    "React.js & Next.js",
    "Node.js & Express",
    "Deep Learning & CNN",
    "Competitive Programming",
    "C++ & Python",
    "Docker & Linux"
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 overflow-hidden z-10">
      
      {/* Glow Orbs in Background */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, CTAs, Info */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Live Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 hover:border-cyan-400/40 transition">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-gray-300">
                IIIT Pune <span className="text-cyan-400">•</span> ECE &amp; AI Honours
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Suraj Kumar
              </span>{" "}
              — <span className="text-gray-200">Full-Stack Developer</span> &amp;{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                AI Enthusiast.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl mb-8">
              B.Tech in ECE with Honours in AI at <strong className="text-white font-medium">IIIT Pune</strong>. Building scalable distributed systems, graph-powered routing engines, and high-impact open-source tooling.
            </p>

            {/* CTAs Buttons & Quick Social Icons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              
              {/* Primary: View Projects */}
              <button
                onClick={() => scrollTo("#projects")}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 shadow-[0_0_25px_rgba(6,182,212,0.35)] flex items-center justify-center gap-2.5 transition transform active:scale-95 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </button>

              {/* Secondary: Download Resume */}
              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-gray-200 bg-[#12131A] hover:bg-[#181A24] border border-white/10 hover:border-indigo-500/40 shadow-md flex items-center justify-center gap-2.5 transition transform active:scale-95 cursor-pointer"
              >
                <Download size={16} className="text-indigo-400" />
                <span>Download Resume</span>
              </button>

              {/* Quick Icon Links */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0">
                <a
                  href="https://github.com/Surajshivam-123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 text-gray-300 hover:text-white transition shadow-sm"
                  title="GitHub: Surajshivam-123"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/suraj-kumar-79522b324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 text-gray-300 hover:text-[#0077b5] transition shadow-sm"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href="mailto:skumar919810@gmail.com"
                  className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 text-gray-300 hover:text-cyan-400 transition shadow-sm"
                  title="Email: skumar919810@gmail.com"
                  aria-label="Send Email"
                >
                  <Mail size={18} />
                </a>

                {onOpenTerminal && (
                  <button
                    onClick={onOpenTerminal}
                    className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 hover:border-emerald-400/50 text-gray-300 hover:text-emerald-400 transition shadow-sm cursor-pointer"
                    title="Open Interactive CLI Terminal"
                    aria-label="Open Terminal"
                  >
                    <Terminal size={18} />
                  </button>
                )}
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Profile Card with Live Focus Switcher */}
          <div className="lg:col-span-5 flex justify-center items-center">
            
            <Tilt className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-cyan-500/20 to-purple-500/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-500 -z-10 animate-pulse-glow" />
              
              <div className="w-full rounded-3xl bg-[#0e1017]/90 border border-white/10 backdrop-blur-xl p-5 sm:p-6 shadow-2xl relative overflow-hidden space-y-4">
                
                {/* Top bar with Ping Tester */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  
                  <button
                    onClick={handleTestPing}
                    className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/5 hover:bg-white/10 text-[10px] font-mono text-gray-300 border border-white/5 cursor-pointer transition"
                    title="Click to test live node latency"
                  >
                    <Activity size={11} className={pinging ? "animate-spin text-cyan-400" : "text-emerald-400"} />
                    <span>Ping: <strong className="text-cyan-300">{ping}ms</strong></span>
                  </button>
                </div>

                {/* Profile Image & Avatar */}
                <div className="py-2 flex flex-col items-center">
                  <div className="relative group">
                    <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 opacity-60 blur-md group-hover:opacity-90 transition duration-500" />
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-white/20 bg-slate-900 shadow-inner">
                      <img
                        src="/portfolio/profile.png"
                        alt="Suraj Kumar"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = "https://avatars.githubusercontent.com/u/152912445?v=4";
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-3 text-center">
                    <h3 className="text-lg font-bold text-white tracking-tight">Suraj Kumar</h3>
                    <p className="text-xs font-mono text-cyan-400 mt-0.5">IIIT Pune • B.Tech ECE &amp; AI</p>
                  </div>
                </div>

                {/* Interactive Focus Switcher */}
                <div className="space-y-1.5 pt-2 border-t border-white/10">
                  <div className="flex items-center justify-between text-[10px] font-mono text-gray-400">
                    <span>CURRENT ENGINEERING FOCUS:</span>
                    <span className="text-cyan-400 font-bold">{activeFocus}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 font-mono text-[10px]">
                    {focusList.map((focus) => (
                      <button
                        key={focus}
                        onClick={() => setActiveFocus(focus)}
                        className={`p-1.5 rounded-lg border transition text-center cursor-pointer truncate ${
                          activeFocus === focus
                            ? "bg-indigo-500/20 text-indigo-300 font-bold border-indigo-500/40"
                            : "bg-white/[0.03] text-gray-400 border-white/5 hover:text-white"
                        }`}
                      >
                        {focus}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bottom Badges */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2">
                    <div className="p-1 rounded-lg bg-indigo-500/20 text-indigo-400">
                      <Code2 size={13} />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-gray-500">Competitive</div>
                      <div className="text-xs font-bold text-gray-200">CF Specialist</div>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2">
                    <div className="p-1 rounded-lg bg-cyan-500/20 text-cyan-400">
                      <Cpu size={13} />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-gray-500">Academic</div>
                      <div className="text-xs font-bold text-gray-200">9.07 CGPA</div>
                    </div>
                  </div>
                </div>

              </div>
            </Tilt>

          </div>

        </div>

        {/* Quick Stats Ticker Row (Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 pt-6 border-t border-white/[0.08]">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0e1017]/70 border border-white/10 hover:border-white/20 backdrop-blur-md transition group hover:-translate-y-1"
              style={{ boxShadow: `0 8px 30px ${item.glow}` }}
            >
              <div className={`text-3xl sm:text-4xl font-extrabold font-mono bg-gradient-to-r ${item.color} bg-clip-text text-transparent tracking-tight mb-1.5`}>
                {item.num}
              </div>
              <div className="text-sm font-semibold text-gray-200">{item.label}</div>
              <div className="text-xs font-mono text-gray-400 mt-0.5">{item.sub}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Infinite Skills Marquee Ribbon */}
      <div className="w-full mt-12 py-3 bg-[#0e1017]/80 border-y border-white/[0.07] backdrop-blur-md overflow-hidden flex">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {marqueeItems.concat(marqueeItems).map((tech, i) => (
            <div key={i} className="flex items-center gap-3 text-xs font-mono font-medium text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
