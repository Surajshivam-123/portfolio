import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { Download, ExternalLink, Copy, X, Check, FileText, Eye, Sparkles } from "lucide-react";

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState("pdf"); // "pdf" | "text"

  // Base-aware PDF URL
  const pdfUrl = `${import.meta.env.BASE_URL || "/"}Suraj_Kumar.pdf`;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      // Small celebratory confetti on opening
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.5 },
        colors: ["#6366F1", "#06B6D4", "#10B981"]
      });
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#6366F1", "#06B6D4", "#10B981", "#F59E0B"]
    });
  };

  const handleCopyText = () => {
    const plainText = `SURAJ KUMAR
B.Tech in Electronics & Communication Engineering (Honours in AI) | IIIT Pune (2024-2028)
CGPA: 9.07 | Email: skumar919810@gmail.com | Phone: +91 8340316362
GitHub: github.com/Surajshivam-123 | LinkedIn: linkedin.com/in/suraj-kumar-79522b324

SUMMARY:
Full-Stack Developer & AI Enthusiast with a 9.07 CGPA at IIIT Pune. Strong algorithmic foundation with 800+ problems solved across platforms. Experienced in architecting scalable distributed systems, graph-powered transit routing engines, and contributing to high-impact open-source tooling (39k+ stars).

EDUCATION:
- Indian Institute of Information Technology (IIIT) Pune (2024 - 2028)
  B.Tech in Electronics & Communication Engineering | CGPA: 9.07
- IIIT Pune (2026 - 2027)
  Honours in Artificial Intelligence

KEY SKILLS:
- Languages: C++, Python, C, JavaScript, TypeScript, SQL, Assembly
- Web & Frameworks: React.js, Next.js, Node.js, Express.js, RESTful APIs, WebSockets, Tailwind CSS
- Databases & Systems: MongoDB, Redis, MySQL, Neo4j AuraDB, Docker, Linux/Ubuntu
- AI/ML: TensorFlow, Keras, Pandas, NumPy, Deep Learning (CNN), Streamlit

FEATURED PROJECTS:
1. Campus-Sphere | Full-Stack Campus Event Ecosystem
   - Built real-time event & sports scoreboarding platform with sub-millisecond messaging.
   - Designed WebSockets architecture paired with Redis Pub/Sub for distributed state broadcast.
   - Integrated Google OAuth 2.0 and OTP security with role-based access.
   - Stack: React, Node.js, Express, MongoDB, Redis, WebSockets, Tailwind CSS.

2. OptimRoute | Graph-Based Transit Routing Engine
   - Modeled 8,150+ transit stations on Neo4j AuraDB.
   - Formulated multi-depth Cypher CALL subqueries evaluating multi-hop paths for optimal cost, speed, and distance.
   - Stack: Neo4j AuraDB, Cypher Graph Queries, Node.js, Express, TypeScript.

OPEN SOURCE EXPERIENCE:
- drawDB (39,000+ Stars on GitHub)
  - Designed the auto-connect foreign key algorithm to infer relational schema links dynamically from column naming conventions.

ACHIEVEMENTS & HONORS:
- Codeforces Specialist (Max Rating: 1492)
- CodeChef 3-Star Coder (Max Rating: 1600+)
- 800+ Algorithmic Problems Solved (LeetCode, Codeforces, CodeChef)
- JEE Main 2024: 97.79 percentile (Top 1.4M+ candidates)
- JEE Advanced 2024: AIR 21,624
- Jawahar Navodaya Vidyalaya Selection (Top 1% district rank)
- National Scholarship Portal (NSP) Merit Scholarship recipient`;

    navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl h-[92vh] flex flex-col bg-[#0e1017] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Modal Top Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-white/10 bg-[#12131a]">
          
          {/* File Info & Indicator */}
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs sm:text-sm font-bold text-white">Suraj_Kumar_Resume.pdf</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Actual PDF Document
                </span>
              </div>
            </div>
          </div>

          {/* View Mode Toggle (PDF vs Text) */}
          <div className="hidden sm:flex items-center bg-black/40 p-1 rounded-xl border border-white/5 text-xs font-mono">
            <button
              onClick={() => setViewMode("pdf")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition cursor-pointer ${
                viewMode === "pdf"
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Eye size={13} />
              <span>PDF View</span>
            </button>
            <button
              onClick={() => setViewMode("text")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition cursor-pointer ${
                viewMode === "text"
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <FileText size={13} />
              <span>Text View</span>
            </button>
          </div>

          {/* Actions: Download, Open New Tab, Copy, Close */}
          <div className="flex items-center gap-2">
            
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/5 transition cursor-pointer"
              title="Copy plain text"
            >
              {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              <span className="hidden md:inline">{copied ? "Copied!" : "Copy Text"}</span>
            </button>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/5 transition"
              title="Open in new browser tab"
            >
              <ExternalLink size={13} />
              <span className="hidden md:inline">Open Tab</span>
            </a>

            {/* Direct Download Button */}
            <a
              href={pdfUrl}
              download="Suraj_Kumar_Resume.pdf"
              onClick={triggerConfetti}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-semibold text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-300 hover:opacity-95 rounded-lg shadow-md transition"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

        </div>

        {/* Modal Main Content */}
        <div className="flex-1 w-full h-full bg-[#090A0F] overflow-hidden relative">
          
          {viewMode === "pdf" ? (
            <div className="w-full h-full flex flex-col">
              
              {/* Actual PDF Viewer */}
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
                className="w-full flex-1 border-0 bg-[#12131a]"
                title="Suraj Kumar Resume PDF Viewer"
              />

              {/* Fallback bar if browser does not render iframe PDF */}
              <div className="p-2.5 bg-[#0e1017] border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-gray-400">
                <span>PDF not rendering on your mobile browser?</span>
                <div className="flex gap-2">
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <ExternalLink size={12} /> Direct PDF Link
                  </a>
                  <button
                    onClick={() => setViewMode("text")}
                    className="text-indigo-400 hover:underline cursor-pointer"
                  >
                    Switch to Text View
                  </button>
                </div>
              </div>

            </div>
          ) : (
            /* Plain Structured Text View */
            <div className="w-full h-full overflow-y-auto p-6 md:p-10 font-sans space-y-6 text-gray-200" id="resume-document-content">
              <div className="border-b border-white/10 pb-4 flex justify-between items-start">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white">SURAJ KUMAR</h1>
                  <p className="text-sm font-mono text-cyan-400 mt-0.5">
                    Full-Stack Developer &amp; AI Enthusiast • IIIT Pune (CGPA: 9.07)
                  </p>
                </div>
                <div className="text-right text-xs font-mono text-gray-400">
                  <p>Email: skumar919810@gmail.com</p>
                  <p>Phone: +91 8340316362</p>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-xs font-mono uppercase text-indigo-400 font-bold">Education</h2>
                <div className="p-3 bg-white/5 rounded-lg border border-white/5 text-xs">
                  <div className="flex justify-between font-bold text-white">
                    <span>Indian Institute of Information Technology (IIIT) Pune</span>
                    <span className="text-emerald-400">9.07 CGPA</span>
                  </div>
                  <p className="text-gray-300">B.Tech in Electronics &amp; Communication Engineering • Honours in Artificial Intelligence (2024–2028)</p>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-xs font-mono uppercase text-cyan-400 font-bold">Featured Projects</h2>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                    <span className="font-bold text-white block">Campus-Sphere</span>
                    <p className="text-gray-300">Full-stack campus event ecosystem with WebSockets, Redis Pub/Sub, and Google OAuth 2.0.</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                    <span className="font-bold text-white block">OptimRoute</span>
                    <p className="text-gray-300">Graph-based transit engine modeling 8,150+ stations on Neo4j AuraDB with multi-depth Cypher CALL subqueries.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-xs font-mono uppercase text-amber-400 font-bold">Open-Source Experience</h2>
                <div className="p-3 bg-white/5 rounded-lg border border-white/5 text-xs">
                  <span className="font-bold text-white block">drawDB (39,000+ Stars)</span>
                  <p className="text-gray-300">Authored auto-connect foreign key heuristic algorithm for dynamic relational schema inference.</p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
