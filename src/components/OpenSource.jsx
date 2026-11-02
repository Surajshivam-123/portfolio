import React, { useState } from "react";
import { Star, GitPullRequest, ArrowUpRight, Database, Sparkles, Zap } from "lucide-react";

export default function OpenSource() {
  const [selectedColumn, setSelectedColumn] = useState("user_id");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const columnSamples = [
    { col: "user_id", table: "orders", targetTable: "users", targetPk: "id", rule: "Pattern: <table_singular>_id", type: "1:N Relation" },
    { col: "author_id", table: "posts", targetTable: "authors", targetPk: "id", rule: "Pattern: <entity>_id", type: "1:N Relation" },
    { col: "id_course", table: "enrollments", targetTable: "courses", targetPk: "course_id", rule: "Pattern: id_<entity>", type: "1:N Relation" },
    { col: "order_item_id", table: "invoices", targetTable: "order_items", targetPk: "id", rule: "Pattern: snake_case composite", type: "1:1 Relation" }
  ];

  const currentSample = columnSamples.find(c => c.col === selectedColumn) || columnSamples[0];

  const handleRunInference = (colName) => {
    setSelectedColumn(colName);
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 250);
  };

  return (
    <section id="opensource" className="py-24 relative z-10">
      
      {/* Glow background accent */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
              <Star size={13} />
              <span>High-Impact Open Source</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              39k+ ★ Stars <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-400 bg-clip-text text-transparent">Contribution.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            Engineered the core relational schema auto-connect algorithm for drawDB, powering diagram generation for millions of developers worldwide.
          </p>
        </div>

        {/* Dedicated Spotlight Card */}
        <div className="rounded-3xl bg-[#0e1017]/90 border border-amber-500/30 hover:border-amber-400/60 backdrop-blur-xl p-6 sm:p-8 lg:p-10 transition-all shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-5">
              
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/drawdb-io/drawdb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold hover:bg-amber-500/25 transition shadow-sm"
                >
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <span>39,000+ Stars on GitHub</span>
                </a>

                <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono text-xs">
                  Feature: Auto-Connect Foreign Keys
                </span>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold text-white tracking-tight">
                  drawDB Schema Inference Engine
                </h3>
                <p className="text-base font-semibold text-gray-300 mt-1">
                  Dynamic Relational Schema Inference Algorithm from Column Naming Conventions.
                </p>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed">
                Authored the heuristic algorithm that tokenizes table headers and column naming conventions to infer foreign key links automatically without manual UI drag-and-drop.
              </p>

              {/* Algorithm features */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-amber-400 font-bold mb-1">⚡ O(N × M) Heuristics</div>
                  <div className="text-gray-400 text-[11px]">Dynamic token parser matching singular/plural entities.</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-cyan-400 font-bold mb-1">🔗 Schema Graph</div>
                  <div className="text-gray-400 text-[11px]">Instant 1:1 and 1:N relational edge resolution.</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <a
                  href="https://github.com/drawdb-io/drawdb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold font-mono text-black bg-gradient-to-r from-amber-400 to-orange-400 hover:opacity-95 shadow-md flex items-center gap-2 transition"
                >
                  <Star size={14} className="fill-black" />
                  <span>drawDB Repository</span>
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href="https://github.com/drawdb-io/drawdb/pulls?q=is%3Apr+author%3ASurajshivam-123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold font-mono text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-2 transition"
                >
                  <GitPullRequest size={14} className="text-amber-400" />
                  <span>PR Contributions</span>
                </a>
              </div>

            </div>

            {/* Right Interactive Algorithm Visualizer */}
            <div className="lg:col-span-6 rounded-2xl bg-[#090A0F] border border-white/10 p-5 shadow-2xl space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Database size={15} className="text-amber-400" />
                  <span className="font-mono text-xs font-bold text-white">INTERACTIVE HEURISTIC INFERENCE</span>
                </div>
                <span className="text-[10px] font-mono text-amber-300">Live Test Bench</span>
              </div>

              {/* Column Sample Buttons */}
              <div>
                <label className="text-[10px] font-mono text-gray-400 block mb-1.5 uppercase">
                  Select Column To Infer Foreign Key Link:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {columnSamples.map((sample) => (
                    <button
                      key={sample.col}
                      onClick={() => handleRunInference(sample.col)}
                      className={`p-2 rounded-xl text-left font-mono text-xs border transition cursor-pointer ${
                        selectedColumn === sample.col
                          ? "bg-amber-500/20 border-amber-500/40 text-amber-300 font-bold"
                          : "bg-white/[0.03] border-white/5 text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <div className="text-[10px] text-gray-500">{sample.table}.</div>
                      <div className="text-xs truncate">{sample.col}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Inferred Connection Card */}
              <div className="p-4 rounded-xl bg-[#12131A] border border-amber-500/20 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-400">Inferred Relational Mapping:</span>
                  <span className="text-emerald-400 font-bold">
                    {isAnalyzing ? "Analyzing token patterns..." : currentSample.type}
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-black/50 border border-white/5 flex items-center justify-between font-mono text-xs">
                  <span className="text-indigo-400 font-bold">{currentSample.table}.{currentSample.col}</span>
                  <span className={`text-amber-400 font-bold ${isAnalyzing ? "animate-pulse" : ""}`}>────────►</span>
                  <span className="text-cyan-400 font-bold">{currentSample.targetTable}.{currentSample.targetPk}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
                  <div className="p-1.5 rounded bg-white/5">
                    <span className="text-[9px] text-gray-500 block">PARSER RULE</span>
                    <span className="text-gray-300 font-semibold">{currentSample.rule}</span>
                  </div>
                  <div className="p-1.5 rounded bg-white/5">
                    <span className="text-[9px] text-gray-500 block">PRIMARY KEY</span>
                    <span className="text-emerald-400 font-semibold">{currentSample.targetTable}.{currentSample.targetPk}</span>
                  </div>
                </div>
              </div>

              {/* Pseudo-engine log */}
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/5 font-mono text-[10px] text-gray-400 space-y-0.5">
                <p className="text-amber-400">&gt; matchFKPattern('{currentSample.col}') -&gt; parsed entity '{currentSample.targetTable}'</p>
                <p className="text-emerald-400">&gt; Resolved PK target: {currentSample.targetTable}.{currentSample.targetPk} (Card: 1:N)</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
