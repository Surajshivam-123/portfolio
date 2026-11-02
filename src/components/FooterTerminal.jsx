import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Send, Mail, Phone, Github, Linkedin, Check, AlertCircle, Copy, Sparkles, CornerDownLeft, Maximize2, Trash2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function FooterTerminal({ onOpenResume }) {
  // Terminal State
  const [terminalHistory, setTerminalHistory] = useState([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-gray-300">
          <p className="text-cyan-400 font-bold">Suraj Kumar OS [Version 2.4.0-iiit-pune]</p>
          <p className="text-gray-400">Type <span className="text-amber-300 font-bold">help</span> or click quick pills below to explore commands.</p>
        </div>
      )
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const terminalEndRef = useRef(null);

  // Contact Form State
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formStatus, setFormStatus] = useState({ sending: false, sent: false, error: null });

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory]);

  const handleCommand = (cmdStr) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    let response = null;

    switch (cleanCmd) {
      case "help":
        response = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-cyan-400 font-bold">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-gray-300">
              <p><span className="text-amber-300 font-semibold">about</span> - Brief summary of Suraj</p>
              <p><span className="text-amber-300 font-semibold">skills</span> - Full-stack & AI arsenal</p>
              <p><span className="text-amber-300 font-semibold">projects</span> - Campus-Sphere & OptimRoute</p>
              <p><span className="text-amber-300 font-semibold">opensource</span> - drawDB algorithm contribution</p>
              <p><span className="text-amber-300 font-semibold">achievements</span> - CP ratings & JEE honors</p>
              <p><span className="text-amber-300 font-semibold">education</span> - IIIT Pune degrees & GPA</p>
              <p><span className="text-amber-300 font-semibold">contact</span> - Email, Phone, LinkedIn</p>
              <p><span className="text-amber-300 font-semibold">download-resume</span> - Open & save resume PDF</p>
              <p><span className="text-amber-300 font-semibold">neofetch</span> - System specs & ASCII badge</p>
              <p><span className="text-amber-300 font-semibold">clear</span> - Clear terminal window</p>
            </div>
          </div>
        );
        break;

      case "about":
      case "whoami":
        response = (
          <div className="text-xs font-mono space-y-1 text-gray-300">
            <p className="text-cyan-300 font-bold">Suraj Kumar | Full-Stack Developer & AI Enthusiast</p>
            <p>Second-year Engineering student at IIIT Pune (B.Tech in ECE with Honours in AI, 9.07 CGPA).</p>
            <p>Specializes in scalable distributed systems, graph-powered transit engines (Neo4j AuraDB), real-time WebSockets, and open-source tooling.</p>
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="text-xs font-mono space-y-1 text-gray-300">
            <p><span className="text-cyan-400 font-bold">Languages:</span> C++, Python, C, JavaScript, TypeScript, SQL, Assembly</p>
            <p><span className="text-indigo-400 font-bold">Web & Frameworks:</span> React.js, Next.js, Node.js, Express.js, WebSockets, REST APIs, Tailwind CSS</p>
            <p><span className="text-emerald-400 font-bold">Databases & Systems:</span> MongoDB, Redis, MySQL, Neo4j AuraDB, Docker, Linux/Ubuntu</p>
            <p><span className="text-purple-400 font-bold">AI/ML:</span> TensorFlow, Keras, Pandas, NumPy, Deep Learning (CNN), Streamlit</p>
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="text-xs font-mono space-y-2 text-gray-300">
            <div>
              <p className="text-cyan-400 font-bold">1. Campus-Sphere</p>
              <p>Full-stack campus event ecosystem with real-time scoreboarding & sub-millisecond messaging.</p>
              <p className="text-gray-500">Stack: WebSockets, Redis Pub/Sub, React, Node.js, MongoDB, OAuth 2.0</p>
            </div>
            <div>
              <p className="text-indigo-400 font-bold">2. OptimRoute</p>
              <p>Graph-based transit routing engine modeling 8,150+ stations with multi-depth Cypher CALL subqueries.</p>
              <p className="text-gray-500">Stack: Neo4j AuraDB, Cypher Graph Queries, Node.js, Express, TypeScript</p>
            </div>
          </div>
        );
        break;

      case "opensource":
        response = (
          <div className="text-xs font-mono space-y-1 text-gray-300">
            <p className="text-amber-400 font-bold">drawDB (39,000+ Stars on GitHub)</p>
            <p>Designed and built the auto-connect foreign key algorithm to infer relational schema links dynamically from column naming conventions.</p>
            <a href="https://github.com/drawdb-io/drawdb" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
              https://github.com/drawdb-io/drawdb ↗
            </a>
          </div>
        );
        break;

      case "achievements":
        response = (
          <div className="text-xs font-mono space-y-1 text-gray-300">
            <p className="text-cyan-400 font-bold">Competitive Programming:</p>
            <p>• Codeforces Specialist (Max: 1492) [handle: s_u_r_a_j]</p>
            <p>• CodeChef 3-Star Coder (Rating: 1600+) [handle: skumar919810]</p>
            <p>• 800+ Algorithmic Problems Solved (LeetCode: Surajshivam)</p>
            <p className="text-purple-400 font-bold mt-2">Academic Distinctions:</p>
            <p>• JEE Main 2024: 97.79 %ile (Top 1.4M+ candidates)</p>
            <p>• JEE Advanced 2024: AIR 21624</p>
            <p>• Jawahar Navodaya Vidyalaya Selection (Top 1% district rank)</p>
            <p>• NSP Merit Scholarship recipient</p>
          </div>
        );
        break;

      case "education":
        response = (
          <div className="text-xs font-mono space-y-1 text-gray-300">
            <p className="text-emerald-400 font-bold">IIIT Pune (2024 - 2028)</p>
            <p>• B.Tech in Electronics & Communication Engineering (CGPA: 9.07)</p>
            <p>• Honours in Artificial Intelligence (2026 - 2027)</p>
            <p>• Coursework: DSA, DBMS, OS, OOP, Computer Vision, Microprocessors</p>
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="text-xs font-mono space-y-1 text-gray-300">
            <p className="text-cyan-400 font-bold">DIRECT CONTACT CHANNELS:</p>
            <p>• Email: <a href="mailto:skumar919810@gmail.com" className="text-indigo-300 hover:underline">skumar919810@gmail.com</a></p>
            <p>• Phone: <a href="tel:+918340316362" className="text-indigo-300 hover:underline">+91 8340316362</a></p>
            <p>• LinkedIn: <a href="https://www.linkedin.com/in/suraj-kumar-79522b324" target="_blank" rel="noreferrer" className="text-indigo-300 hover:underline">linkedin.com/in/suraj-kumar-79522b324</a></p>
            <p>• GitHub: <a href="https://github.com/Surajshivam-123" target="_blank" rel="noreferrer" className="text-indigo-300 hover:underline">github.com/Surajshivam-123</a></p>
          </div>
        );
        break;

      case "download-resume":
      case "resume":
        if (onOpenResume) onOpenResume();
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
        response = (
          <div className="text-xs font-mono text-emerald-400">
            ✓ Resume viewer launched. You can preview, copy text, or save as PDF!
          </div>
        );
        break;

      case "neofetch":
        response = (
          <div className="flex gap-4 text-[11px] font-mono text-gray-300">
            <div className="text-cyan-400 select-none">
              <pre>{`
  /\\_/\\
 ( o.o )
  > ^ <
   SK
              `}</pre>
            </div>
            <div className="space-y-0.5">
              <p className="text-indigo-400 font-bold">suraj@iiit-pune</p>
              <p>-----------------</p>
              <p><span className="text-cyan-300">OS:</span> SurajOS v2.4 (Ubuntu Kernel)</p>
              <p><span className="text-cyan-300">Host:</span> IIIT Pune Campus Node</p>
              <p><span className="text-cyan-300">Degree:</span> B.Tech ECE (Honours in AI)</p>
              <p><span className="text-cyan-300">GPA:</span> 9.07 / 10.0</p>
              <p><span className="text-cyan-300">CP Rating:</span> 1492 (CF Specialist)</p>
              <p><span className="text-cyan-300">Shell:</span> React 19 + Tailwind v4 CLI</p>
            </div>
          </div>
        );
        break;

      case "clear":
        setTerminalHistory([]);
        return;

      default:
        response = (
          <div className="text-xs font-mono text-red-400">
            Command not found: "{cleanCmd}". Type <span className="text-amber-300 font-bold">help</span> for a list of available commands.
          </div>
        );
    }

    setTerminalHistory((prev) => [...prev, { command: cmdStr, output: response }]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ sending: true, sent: false, error: null });

    // Open user mail client with prefilled inputs
    const subject = encodeURIComponent(formData.subject || `Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:skumar919810@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setFormStatus({ sending: false, sent: true, error: null });
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.8 } });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };

  return (
    <footer id="terminal" className="pt-24 pb-12 bg-[#07080c] border-t border-white/[0.08] relative z-10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
              <TerminalIcon size={13} />
              <span>Interactive CLI &amp; Connect</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Get in <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">Touch.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            Open to summer internships, distributed systems collaborations, and full-stack engineering roles. Run commands in the terminal or send a direct message.
          </p>
        </div>

        {/* Split Grid: Left Terminal, Right Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* LEFT: CLI Terminal */}
          <div className="lg:col-span-7 rounded-3xl bg-[#090A0F] border border-white/10 shadow-2xl overflow-hidden flex flex-col h-[460px]">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#12131a] border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 hover:opacity-100 transition" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-100 transition" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100 transition" />
                <span className="font-mono text-xs font-bold text-gray-300 ml-2">suraj@iiit-pune: ~</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTerminalHistory([])}
                  className="p-1 rounded text-gray-500 hover:text-gray-300 hover:bg-white/5 transition"
                  title="Clear Terminal"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>

            {/* Quick Command Chips */}
            <div className="flex items-center gap-1.5 px-4 py-2 bg-black/40 border-b border-white/5 overflow-x-auto whitespace-nowrap">
              <span className="text-[10px] font-mono text-gray-500 mr-1">QUICK:</span>
              {["help", "skills", "projects", "opensource", "achievements", "education", "download-resume", "contact", "clear"].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/5 transition cursor-pointer"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Scrollable Terminal Output */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono terminal-scroll">
              {terminalHistory.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="text-emerald-400 font-bold">suraj@iiit-pune:~$</span>
                    <span className="text-white font-semibold">{item.command}</span>
                  </div>
                  <div className="pl-4">{item.output}</div>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Command Input Field */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(inputVal);
                setInputVal("");
              }}
              className="flex items-center gap-2 px-4 py-3 bg-[#0e1017] border-t border-white/10"
            >
              <span className="text-emerald-400 font-mono text-xs font-bold">suraj@iiit-pune:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type a command (e.g. 'skills', 'projects', 'help')..."
                className="flex-1 bg-transparent text-xs font-mono text-white placeholder-gray-600 focus:outline-none"
              />
              <button
                type="submit"
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400 border border-white/5 transition cursor-pointer"
                title="Execute Command"
              >
                <CornerDownLeft size={13} />
              </button>
            </form>

          </div>

          {/* RIGHT: Minimal Contact Form & Direct Links */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0e1017]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
            
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Direct Message</h3>
              <p className="text-xs text-gray-400 mt-1">
                Reach out directly for internships, collaborative engineering, or tech inquiries.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-3.5">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject (e.g. Summer Internship Opportunity)"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <textarea
                  required
                  rows={3}
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus.sending}
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold font-mono text-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 hover:opacity-95 shadow-md flex items-center justify-center gap-2 transition transform active:scale-95 cursor-pointer disabled:opacity-50"
              >
                {formStatus.sent ? (
                  <>
                    <Check size={15} />
                    <span>Message Ready in Mail Client!</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send Direct Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Direct Quick Badges */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2 text-xs font-mono">
              <a
                href="mailto:skumar919810@gmail.com"
                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/10 border border-white/5 flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition truncate"
              >
                <Mail size={14} className="text-cyan-400 shrink-0" />
                <span className="truncate">Email Me</span>
              </a>

              <a
                href="tel:+918340316362"
                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/10 border border-white/5 flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition truncate"
              >
                <Phone size={14} className="text-emerald-400 shrink-0" />
                <span className="truncate">+91 8340316362</span>
              </a>
            </div>

          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">Suraj Kumar</span>
            <span className="text-gray-600">•</span>
            <span>IIIT Pune Class of 2028</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/Surajshivam-123" target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a>
            <a href="https://www.linkedin.com/in/suraj-kumar-79522b324" target="_blank" rel="noreferrer" className="hover:text-white transition">LinkedIn</a>
            <a href="mailto:skumar919810@gmail.com" className="hover:text-white transition">Email</a>
          </div>

          <div>
            © {new Date().getFullYear()} Suraj Kumar. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
