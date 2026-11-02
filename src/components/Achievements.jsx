import React, { useState, useEffect } from "react";
import { Trophy, Award, ExternalLink, RefreshCw, Star, Code2, Zap, CheckCircle2, TrendingUp, ShieldCheck, Flame, GitFork } from "lucide-react";
import { Tilt } from "../use3DTilt.jsx";

export default function Achievements() {
  const [loading, setLoading] = useState(false);
  const [lastSynced, setLastSynced] = useState("Just now");

  const [platformData, setPlatformData] = useState({
    codeforces: {
      handle: "s_u_r_a_j",
      rating: 1492,
      maxRating: 1492,
      rank: "Specialist",
      organization: "IIIT Pune",
      targetRating: 1600, // Expert target
      percentile: "Top 15%",
      live: true
    },
    codechef: {
      handle: "skumar919810",
      rating: 1610,
      maxRating: 1610,
      stars: 3,
      division: "Division 2",
      globalRank: "Top Tier",
      live: true
    },
    leetcode: {
      handle: "Surajshivam",
      totalSolved: 800,
      easy: 280,
      medium: 440,
      hard: 80,
      streak: "Active",
      rating: "Top Percentile",
      live: true
    },
    github: {
      handle: "Surajshivam-123",
      repos: 25,
      stars: "39k+",
      followers: 12,
      contributions: "500+ this year",
      topLangs: ["C++", "TypeScript", "JavaScript", "Python"],
      live: true
    }
  });

  const fetchLiveStats = async () => {
    setLoading(true);
    try {
      // 1. Fetch Codeforces
      const cfRes = await fetch("https://codeforces.com/api/user.info?handles=s_u_r_a_j").then(r => r.json()).catch(() => null);
      if (cfRes && cfRes.status === "OK" && cfRes.result?.[0]) {
        const u = cfRes.result[0];
        setPlatformData(prev => ({
          ...prev,
          codeforces: {
            ...prev.codeforces,
            rating: u.rating || 1492,
            maxRating: u.maxRating || 1492,
            rank: u.rank ? u.rank.charAt(0).toUpperCase() + u.rank.slice(1) : "Specialist",
            organization: u.organization || "IIIT Pune",
          }
        }));
      }

      // 2. Fetch GitHub
      const ghRes = await fetch("https://api.github.com/users/Surajshivam-123").then(r => r.json()).catch(() => null);
      if (ghRes && ghRes.public_repos) {
        setPlatformData(prev => ({
          ...prev,
          github: {
            ...prev.github,
            repos: ghRes.public_repos,
            followers: ghRes.followers || 12,
          }
        }));
      }

      const now = new Date();
      setLastSynced(`${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`);
    } catch {
      // fallback smoothly
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveStats();
  }, []);

  const academicHonors = [
    {
      title: "JEE Main 2024",
      metric: "97.79 %ile",
      badge: "Top 1.4M+ Nationwide",
      desc: "Top 2.2% among 1.4 Million candidates in India's premier national engineering entrance.",
      color: "from-cyan-400 to-blue-500",
      glow: "rgba(6, 182, 212, 0.25)"
    },
    {
      title: "JEE Advanced 2024",
      metric: "AIR 21,624",
      badge: "IIT Qualified",
      desc: "Secured All India Rank 21,624 in the advanced entrance exam for Indian Institutes of Technology.",
      color: "from-indigo-400 to-purple-500",
      glow: "rgba(99, 102, 241, 0.25)"
    },
    {
      title: "JNV Selection",
      metric: "Top 1% District",
      badge: "Merit Boarding",
      desc: "Selected for Jawahar Navodaya Vidyalaya central merit scholarship program.",
      color: "from-amber-400 to-orange-500",
      glow: "rgba(245, 158, 11, 0.25)"
    },
    {
      title: "NSP Merit Scholar",
      metric: "Govt. of India",
      badge: "National Scholar",
      desc: "National Scholarship Portal merit recipient awarded by the Ministry of Education.",
      color: "from-emerald-400 to-teal-500",
      glow: "rgba(16, 185, 129, 0.25)"
    }
  ];

  return (
    <section id="achievements" className="py-24 relative z-10">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Live Sync Status */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
              <Trophy size={13} />
              <span>Competitive Programming &amp; Honors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Platform Stats &amp; <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Rankings.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-gray-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Live API Sync: <strong className="text-white">{lastSynced}</strong></span>
            </div>

            <button
              onClick={fetchLiveStats}
              disabled={loading}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition cursor-pointer disabled:opacity-50"
              title="Refresh Live Statistics"
            >
              <RefreshCw size={14} className={loading ? "animate-spin text-cyan-400" : ""} />
            </button>
          </div>
        </div>

        {/* 4 CORE CODING PLATFORM CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* 1. CODEFORCES CARD */}
          <Tilt className="p-6 rounded-3xl bg-[#0e1017]/90 border border-cyan-500/30 hover:border-cyan-400 backdrop-blur-xl shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] transition flex flex-col justify-between group">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
                  <span className="font-mono text-xs font-bold text-white tracking-wider">CODEFORCES</span>
                </div>
                <a
                  href={`https://codeforces.com/profile/${platformData.codeforces.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-0.5"
                >
                  @{platformData.codeforces.handle} ↗
                </a>
              </div>

              {/* Main Rating */}
              <div className="my-5">
                <div className="flex items-baseline justify-between">
                  <div className="text-4xl font-extrabold font-mono text-cyan-400 tracking-tight">
                    {platformData.codeforces.rating}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md bg-cyan-400/10 text-cyan-300 font-mono text-xs font-bold border border-cyan-400/20">
                    {platformData.codeforces.rank}
                  </span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Peak Rating: <strong className="text-gray-200 font-mono">{platformData.codeforces.maxRating}</strong>
                </div>
              </div>

              {/* Interactive Progress Meter towards Expert */}
              <div className="space-y-1.5 mb-4">
                <div className="flex justify-between text-[11px] font-mono text-gray-400">
                  <span>Specialist (1400)</span>
                  <span className="text-indigo-400">Expert (1600)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min(100, Math.max(0, ((platformData.codeforces.rating - 1400) / 200) * 100))}%` }}
                  />
                </div>
              </div>

              {/* Meta stats */}
              <div className="space-y-1.5 text-xs font-mono text-gray-300 pt-2 border-t border-white/5">
                <div className="flex justify-between">
                  <span className="text-gray-500">Institution:</span>
                  <span className="text-gray-200">{platformData.codeforces.organization}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Ranking:</span>
                  <span className="text-emerald-400 font-semibold">{platformData.codeforces.percentile}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-400">
              <span className="text-emerald-400 font-bold">● ACTIVE CONTESTANT</span>
              <a
                href={`https://codeforces.com/profile/${platformData.codeforces.handle}`}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:underline"
              >
                View Profile ↗
              </a>
            </div>
          </Tilt>

          {/* 2. CODECHEF CARD */}
          <Tilt className="p-6 rounded-3xl bg-[#0e1017]/90 border border-amber-500/30 hover:border-amber-400 backdrop-blur-xl shadow-xl hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] transition flex flex-col justify-between group">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
                  <span className="font-mono text-xs font-bold text-white tracking-wider">CODECHEF</span>
                </div>
                <a
                  href={`https://www.codechef.com/users/${platformData.codechef.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-amber-400 hover:underline flex items-center gap-0.5"
                >
                  @{platformData.codechef.handle} ↗
                </a>
              </div>

              {/* Main Rating & Stars */}
              <div className="my-5">
                <div className="flex items-baseline justify-between">
                  <div className="text-4xl font-extrabold font-mono text-amber-400 tracking-tight">
                    {platformData.codechef.rating}
                  </div>
                  <div className="flex items-center text-amber-400 text-sm">
                    {"★".repeat(platformData.codechef.stars)}
                    <span className="text-xs font-mono font-bold ml-1">3-Star</span>
                  </div>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Division: <strong className="text-gray-200 font-mono">{platformData.codechef.division}</strong>
                </div>
              </div>

              {/* Badges / Division highlight */}
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-4 text-xs font-mono text-amber-300 flex items-center gap-2">
                <Flame size={15} className="text-amber-400" />
                <span>Highest Rating: 1610+ (Div 2)</span>
              </div>

              {/* Meta stats */}
              <div className="space-y-1.5 text-xs font-mono text-gray-300 pt-2 border-t border-white/5">
                <div className="flex justify-between">
                  <span className="text-gray-500">Tier:</span>
                  <span className="text-gray-200">3-Star Competitive</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Contests:</span>
                  <span className="text-emerald-400 font-semibold">Rated Starters</span>
                </div>
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-400">
              <span className="text-emerald-400 font-bold">● DIVISION 2 CODER</span>
              <a
                href={`https://www.codechef.com/users/${platformData.codechef.handle}`}
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 hover:underline"
              >
                View Profile ↗
              </a>
            </div>
          </Tilt>

          {/* 3. LEETCODE & PROBLEM SOLVING */}
          <Tilt className="p-6 rounded-3xl bg-[#0e1017]/90 border border-indigo-500/30 hover:border-indigo-400 backdrop-blur-xl shadow-xl hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] transition flex flex-col justify-between group">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-indigo-400 shadow-[0_0_8px_#6366f1]" />
                  <span className="font-mono text-xs font-bold text-white tracking-wider">LEETCODE &amp; DSA</span>
                </div>
                <a
                  href={`https://leetcode.com/u/${platformData.leetcode.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-indigo-400 hover:underline flex items-center gap-0.5"
                >
                  @{platformData.leetcode.handle} ↗
                </a>
              </div>

              {/* Solved Counter */}
              <div className="my-5">
                <div className="flex items-baseline justify-between">
                  <div className="text-4xl font-extrabold font-mono text-indigo-400 tracking-tight">
                    {platformData.leetcode.totalSolved}+
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-indigo-400/10 text-indigo-300 font-mono text-[11px] font-bold border border-indigo-400/20">
                    Solved
                  </span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Algorithmic problems mastered across platforms
                </div>
              </div>

              {/* Easy / Med / Hard Breakdown Pills */}
              <div className="grid grid-cols-3 gap-1.5 mb-4 text-center font-mono">
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-[10px] text-gray-400 block">Easy</span>
                  <span className="text-xs font-bold text-emerald-400">{platformData.leetcode.easy}</span>
                </div>
                <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <span className="text-[10px] text-gray-400 block">Med</span>
                  <span className="text-xs font-bold text-amber-400">{platformData.leetcode.medium}</span>
                </div>
                <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/20">
                  <span className="text-[10px] text-gray-400 block">Hard</span>
                  <span className="text-xs font-bold text-red-400">{platformData.leetcode.hard}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-white/5 flex overflow-hidden">
                <div style={{ width: "35%" }} className="bg-emerald-400" />
                <div style={{ width: "55%" }} className="bg-amber-400" />
                <div style={{ width: "10%" }} className="bg-red-400" />
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-400">
              <span className="text-emerald-400 font-bold">● PROBLEM SOLVER</span>
              <a
                href={`https://leetcode.com/u/${platformData.leetcode.handle}`}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-400 hover:underline"
              >
                View Profile ↗
              </a>
            </div>
          </Tilt>

          {/* 4. GITHUB & OPEN SOURCE CARD */}
          <Tilt className="p-6 rounded-3xl bg-[#0e1017]/90 border border-emerald-500/30 hover:border-emerald-400 backdrop-blur-xl shadow-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] transition flex flex-col justify-between group">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
                  <span className="font-mono text-xs font-bold text-white tracking-wider">GITHUB</span>
                </div>
                <a
                  href={`https://github.com/${platformData.github.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-0.5"
                >
                  @{platformData.github.handle} ↗
                </a>
              </div>

              {/* Main Stars / Repos */}
              <div className="my-5">
                <div className="flex items-baseline justify-between">
                  <div className="text-4xl font-extrabold font-mono text-emerald-400 tracking-tight">
                    {platformData.github.stars}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-400/10 text-emerald-300 font-mono text-xs font-bold border border-emerald-400/20">
                    OSS Impact
                  </span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Public Repositories: <strong className="text-gray-200 font-mono">{platformData.github.repos}</strong>
                </div>
              </div>

              {/* Languages badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {platformData.github.topLangs.map((lang) => (
                  <span key={lang} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/5">
                    {lang}
                  </span>
                ))}
              </div>

              {/* Meta stats */}
              <div className="space-y-1.5 text-xs font-mono text-gray-300 pt-2 border-t border-white/5">
                <div className="flex justify-between">
                  <span className="text-gray-500">drawDB:</span>
                  <span className="text-amber-400 font-semibold">Auto-FK Contributor</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Activity:</span>
                  <span className="text-emerald-400 font-semibold">Active Commits</span>
                </div>
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-400">
              <span className="text-emerald-400 font-bold">● OPEN SOURCE</span>
              <a
                href={`https://github.com/${platformData.github.handle}`}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:underline"
              >
                View Repos ↗
              </a>
            </div>
          </Tilt>

        </div>

        {/* ACADEMIC HONORS & MERIT DISTINCTIONS */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck size={18} className="text-indigo-400" />
            <h3 className="font-mono text-sm font-bold text-gray-300 uppercase tracking-wider">
              National Honors &amp; Merit Distinctions
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {academicHonors.map((h, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#0e1017]/85 border border-white/10 hover:border-white/20 backdrop-blur-xl shadow-lg transition flex flex-col justify-between group hover:-translate-y-1"
                style={{ boxShadow: `0 10px 25px -10px ${h.glow}` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">
                      {h.badge}
                    </span>
                  </div>

                  <div className={`text-2xl font-extrabold font-mono bg-gradient-to-r ${h.color} bg-clip-text text-transparent my-1`}>
                    {h.metric}
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1">{h.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{h.desc}</p>
                </div>

                <div className="pt-3 mt-3 border-t border-white/5 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={12} />
                  <span>Verified National Record</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
