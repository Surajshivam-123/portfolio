import React, { useState, useEffect } from "react";
import { Search, FileText, ArrowRight, Layers, Star, Trophy, GraduationCap, Terminal, Mail, X } from "lucide-react";

export default function CommandPalette({ isOpen, onClose, onOpenResume }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleAction = (actionId) => {
    onClose();
    if (actionId === "projects") {
      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
    } else if (actionId === "opensource") {
      document.querySelector("#opensource")?.scrollIntoView({ behavior: "smooth" });
    } else if (actionId === "resume") {
      if (onOpenResume) onOpenResume();
    } else if (actionId === "skills") {
      document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" });
    } else if (actionId === "achievements") {
      document.querySelector("#achievements")?.scrollIntoView({ behavior: "smooth" });
    } else if (actionId === "education") {
      document.querySelector("#education")?.scrollIntoView({ behavior: "smooth" });
    } else if (actionId === "terminal") {
      document.querySelector("#terminal")?.scrollIntoView({ behavior: "smooth" });
    } else if (actionId === "email") {
      window.open("mailto:skumar919810@gmail.com", "_self");
    }
  };

  const actions = [
    {
      id: "projects",
      title: "View Featured Projects",
      subtitle: "Campus-Sphere & OptimRoute (Neo4j)",
      icon: <Layers size={16} className="text-cyan-400" />
    },
    {
      id: "opensource",
      title: "Explore drawDB Open Source Contribution",
      subtitle: "39k+ Stars Auto-FK Algorithm",
      icon: <Star size={16} className="text-amber-400" />
    },
    {
      id: "resume",
      title: "Download / Preview Resume PDF",
      subtitle: "View complete credentials and coursework",
      icon: <FileText size={16} className="text-emerald-400" />
    },
    {
      id: "skills",
      title: "Technical Skills Matrix",
      subtitle: "C++, Python, React, Neo4j, Docker, AI/ML",
      icon: <Layers size={16} className="text-indigo-400" />
    },
    {
      id: "achievements",
      title: "Honors & Competitive Programming",
      subtitle: "CF Specialist, CodeChef 3-Star, JEE Main 97.79%ile",
      icon: <Trophy size={16} className="text-purple-400" />
    },
    {
      id: "education",
      title: "Education & Coursework",
      subtitle: "IIIT Pune B.Tech ECE (Honours in AI, 9.07 CGPA)",
      icon: <GraduationCap size={16} className="text-cyan-400" />
    },
    {
      id: "terminal",
      title: "Open Interactive Terminal",
      subtitle: "Run CLI commands and send message",
      icon: <Terminal size={16} className="text-emerald-400" />
    },
    {
      id: "email",
      title: "Send Direct Email",
      subtitle: "skumar919810@gmail.com",
      icon: <Mail size={16} className="text-cyan-400" />
    }
  ];

  const filteredActions = actions.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-32 px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-xl bg-[#0e1017] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-[#12131a]">
          <Search size={18} className="text-cyan-400" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm font-mono text-white placeholder-gray-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-gray-400 hover:text-white transition"
          >
            <X size={16} />
          </button>
        </div>

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1 font-mono">
          {filteredActions.map((action) => (
            <button
              key={action.id}
              onClick={() => handleAction(action.id)}
              className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition text-left group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                  {action.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-200 group-hover:text-white">
                    {action.title}
                  </div>
                  <div className="text-[11px] text-gray-400">{action.subtitle}</div>
                </div>
              </div>
              <ArrowRight size={14} className="text-gray-500 group-hover:text-cyan-400 transition transform group-hover:translate-x-1" />
            </button>
          ))}

          {filteredActions.length === 0 && (
            <div className="p-6 text-center text-xs text-gray-500">
              No matching commands found for "{query}".
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#090A0F] border-t border-white/5 text-[10px] font-mono text-gray-500">
          <span>Navigate with mouse or click</span>
          <span>[ESC] to close</span>
        </div>

      </div>
    </div>
  );
}
