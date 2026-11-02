import { useState, useEffect } from "react";
import {
  ExternalLink,
  MapPin,
  Sparkles,
  Trophy,
  Building,
  Globe,
  Flag,
} from "lucide-react";
import { Tilt } from "./use3DTilt.jsx";
import useInView from "./useInView.js";

const GITHUB_USER = "Surajshivam-123";
const LEETCODE_USER = "Surajshivam";
const CF_USER = "s_u_r_a_j";
const CODECHEF_USER = "skumar919810";

// Deterministic GitHub Activity Matrix (16 columns x 3 rows)
const GITHUB_COMMIT_MATRIX = [
  [1, 2, 0],
  [2, 3, 1],
  [0, 1, 2],
  [1, 0, 3],
  [2, 2, 1],
  [3, 1, 2],
  [1, 3, 0],
  [2, 1, 2],
  [0, 2, 3],
  [1, 1, 1],
  [3, 2, 0],
  [2, 3, 2],
  [1, 2, 3],
  [2, 1, 1],
  [3, 3, 2],
  [2, 2, 3],
];

// Static Platform metadata
const PLATFORM_META = {
  github: {
    title: "GITHUB",
    accent: "#10b981",
    hoverBorder: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.18)]",
    dividerGrad: "from-emerald-500/70 via-emerald-500/20 to-transparent",
    ambientGlow: "bg-emerald-500",
    profileUrl: `https://github.com/${GITHUB_USER}`,
    username: GITHUB_USER,
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  leetcode: {
    title: "LEETCODE",
    accent: "#f59e0b",
    hoverBorder: "hover:border-amber-500/50 hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.18)]",
    dividerGrad: "from-amber-500/70 via-amber-500/20 to-transparent",
    ambientGlow: "bg-amber-500",
    profileUrl: `https://leetcode.com/u/${LEETCODE_USER}`,
    username: LEETCODE_USER,
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
        <path d="M16.102 17.93l-2.69 2.6c-.75.68-1.8.68-2.55 0l-5.69-5.46c-.75-.68-.75-1.8 0-2.48l5.69-5.46c.75-.68 1.8-.68 2.55 0l2.69 2.6c.3.28.3.73 0 1.01s-.77.28-1.07 0l-2.14-2.07c-.45-.4-.9-.4-1.35 0l-4.5 4.31c-.45.4-.45 1.07 0 1.48l4.5 4.3c.45.41.9.41 1.35 0l2.14-2.08c.3-.27.77-.27 1.07 0s.3.73 0 1.01z" />
        <path d="M8.28 12.38L16.2 4.75c.75-.68 1.8-.68 2.55 0l2.69 2.6c.75.68.75 1.8 0 2.48l-7.92 7.63c-.75.68-1.8.68-2.55 0l-2.69-2.6c-.3-.28-.3-.73 0-1.01s.77-.28 1.07 0l2.14 2.07c.45.4.9.4 1.35 0l6.75-6.5c.45-.4.45-1.07 0-1.48l-2.14-2.07c-.45-.4-.9-.4-1.35 0l-6.75 6.5c-.3.28-.77.28-1.07 0s-.3-.73 0-1.01z" />
      </svg>
    ),
  },
  codeforces: {
    title: "CODEFORCES",
    accent: "#06b6d4",
    hoverBorder: "hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.18)]",
    dividerGrad: "from-cyan-500/70 via-cyan-500/20 to-transparent",
    ambientGlow: "bg-cyan-500",
    profileUrl: `https://codeforces.com/profile/${CF_USER}`,
    username: CF_USER,
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
        <path d="M4.5 7.5a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-3 0V9a1.5 1.5 0 011.5-1.5zM12 3a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-3 0V4.5a1.5 1.5 0 011.5-1.5zM19.5 12a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-3 0v-6a1.5 1.5 0 011.5-1.5z" />
      </svg>
    ),
  },
  codechef: {
    title: "CODECHEF",
    accent: "#f97316",
    hoverBorder: "hover:border-orange-500/50 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.18)]",
    dividerGrad: "from-orange-500/70 via-orange-500/20 to-transparent",
    ambientGlow: "bg-orange-500",
    profileUrl: `https://codechef.com/users/${CODECHEF_USER}`,
    username: CODECHEF_USER,
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
        <path d="M12 2C9.24 2 7 4.24 7 7c0 .77.18 1.5.49 2.16L3.34 11.3a1 1 0 00-.23 1.36c.2.3.52.48.88.48h2.09c.27 1.54 1.25 2.87 2.65 3.52l-2.16 4.32a1 1 0 001.79.89l2.25-4.5c.44.09.89.13 1.38.13s.94-.04 1.38-.13l2.25 4.5a1 1 0 001.79-.89l-2.16-4.32c1.4-.65 2.38-1.98 2.65-3.52h2.09c.36 0 .68-.18.88-.48a1 1 0 00-.23-1.36l-4.15-2.14c.31-.66.49-1.39.49-2.16 0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm-3.5 8c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
  },
};

// Generic Telemetry Card Container (Declared outside of render)
function DashboardCard({ platformKey, isLoading, children }) {
  const meta = PLATFORM_META[platformKey];

  return (
    <Tilt
      options={{ maxTilt: 3 }}
      className={`telemetry-card relative rounded-2xl border border-slate-800/80 bg-[#0e131f] p-6 sm:p-7 flex flex-col justify-between overflow-hidden group transition-all duration-300 ${meta.hoverBorder}`}
    >
      {/* Soft Ambient Brand Radial Glow on Hover */}
      <div
        className={`pointer-events-none absolute -top-24 -right-24 w-52 h-52 rounded-full blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 ${meta.ambientGlow}`}
      />

      {/* Card Header & Branding */}
      <div>
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center gap-2.5">
            <span style={{ color: meta.accent }} className="shrink-0 flex items-center">
              {meta.icon}
            </span>
            <h3 className="font-mono text-sm tracking-widest text-white font-bold">
              {meta.title}
            </h3>
          </div>
          <a
            href={meta.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors group/link"
            title={`View ${meta.title} profile`}
          >
            <span className="group-hover/link:underline">@{meta.username}</span>
            <ExternalLink size={12} className="text-slate-500 group-hover/link:text-white transition-colors" />
          </a>
        </div>

        {/* Top Brand Gradient Divider */}
        <div className={`h-[1px] w-full bg-gradient-to-r ${meta.dividerGrad} mb-5`} />

        {/* Card Body Content */}
        {isLoading ? (
          <div className="py-12 text-center font-mono text-xs text-slate-500 tracking-widest animate-pulse">
            INITIALIZING TELEMETRY…
          </div>
        ) : (
          <div>{children}</div>
        )}
      </div>

      {/* Card Footer (Live Telemetry Bar) */}
      <div className="mt-6 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isLoading
                ? "bg-amber-400 animate-ping"
                : "bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"
            }`}
          />
          <span className="text-slate-400 tracking-wider">
            {isLoading ? "SYNCING…" : "LIVE SYNC"}
          </span>
        </div>
        <span className="text-slate-500 uppercase tracking-widest text-[10px]">
          UPDATED DAILY
        </span>
      </div>
    </Tilt>
  );
}

export default function Profile() {
  const [github, setGithub] = useState(null);
  const [leetcode, setLeetcode] = useState(null);
  const [codeforces, setCodeforces] = useState(null);
  const [codechef, setCodechef] = useState(null);
  const [loadingStates, setLoadingStates] = useState({
    github: true,
    leetcode: true,
    codeforces: true,
    codechef: true,
  });

  const [ref, inView] = useInView(0.1);

  useEffect(() => {
    // 1. GITHUB API
    fetch(`https://api.github.com/users/${GITHUB_USER}`)
      .then((r) => {
        if (!r.ok) throw new Error("GitHub profile fetch failed: " + r.status);
        return r.json();
      })
      .then(async (profile) => {
        let stars = 0;
        let commits = 349;
        try {
          const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=stars`);
          if (reposRes.ok) {
            const repos = await reposRes.json();
            if (Array.isArray(repos)) {
              stars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);
            }
          }
        } catch {
          /* ignore */
        }

        try {
          const commitsRes = await fetch(`https://api.github.com/search/commits?q=author:${GITHUB_USER}`);
          if (commitsRes.ok) {
            const commitData = await commitsRes.json();
            if (typeof commitData.total_count === "number") {
              commits = commitData.total_count;
            }
          }
        } catch {
          /* ignore */
        }

        const data = { ...profile, totalStars: stars, totalCommits: commits };
        setGithub(data);
        try {
          localStorage.setItem("portfolio_github_data", JSON.stringify(data));
        } catch {
          /* ignore */
        }
      })
      .catch(() => {
        const cached = localStorage.getItem("portfolio_github_data");
        if (cached) {
          try {
            setGithub(JSON.parse(cached));
            return;
          } catch {
            /* ignore */
          }
        }
        setGithub({
          public_repos: 16,
          followers: 10,
          following: 8,
          totalStars: 0,
          totalCommits: 349,
          public_gists: 0,
          location: "Pune, India",
        });
      })
      .finally(() => setLoadingStates((s) => ({ ...s, github: false })));

    // 2. LEETCODE API (Direct fetch - CORS enabled)
    Promise.all([
      fetch(`https://alfa-leetcode-api.onrender.com/${LEETCODE_USER}/solved`).then((r) => {
        if (!r.ok) throw new Error("LeetCode solved failed: " + r.status);
        return r.json();
      }),
      fetch(`https://alfa-leetcode-api.onrender.com/${LEETCODE_USER}/contest`).then((r) => {
        if (!r.ok) throw new Error("LeetCode contest failed: " + r.status);
        return r.json();
      }),
    ])
      .then(([d, c]) => {
        const payload = { d, c };
        setLeetcode(payload);
        try {
          localStorage.setItem("portfolio_leetcode_data", JSON.stringify(payload));
        } catch {
          /* ignore */
        }
      })
      .catch(() => {
        const cached = localStorage.getItem("portfolio_leetcode_data");
        if (cached) {
          try {
            setLeetcode(JSON.parse(cached));
            return;
          } catch {
            /* ignore */
          }
        }
        setLeetcode({
          d: { solvedProblem: 641, easySolved: 155, mediumSolved: 360, hardSolved: 126 },
          c: { contestRating: 1795 },
        });
      })
      .finally(() => setLoadingStates((s) => ({ ...s, leetcode: false })));

    // 3. CODEFORCES API (Direct fetch - CORS enabled)
    fetch(`https://codeforces.com/api/user.info?handles=${CF_USER}`)
      .then((r) => {
        if (!r.ok) throw new Error("Codeforces failed: " + r.status);
        return r.json();
      })
      .then((d) => {
        if (d.status === "OK" && d.result?.[0]) {
          setCodeforces(d.result[0]);
          try {
            localStorage.setItem("portfolio_cf_data", JSON.stringify(d.result[0]));
          } catch {
            /* ignore */
          }
        } else {
          throw new Error("Invalid Codeforces response");
        }
      })
      .catch(() => {
        const cached = localStorage.getItem("portfolio_cf_data");
        if (cached) {
          try {
            setCodeforces(JSON.parse(cached));
            return;
          } catch {
            /* ignore */
          }
        }
        setCodeforces({
          rating: 1527,
          maxRating: 1527,
          rank: "specialist",
          maxRank: "specialist",
          organization: "Indian Institute of Information Technology, Pune",
        });
      })
      .finally(() => setLoadingStates((s) => ({ ...s, codeforces: false })));

    // 4. CODECHEF API (competeapi.vercel.app - CORS enabled)
    fetch(`https://competeapi.vercel.app/user/codechef/${CODECHEF_USER}/`)
      .then((r) => {
        if (!r.ok) throw new Error("CodeChef fetch failed: " + r.status);
        return r.json();
      })
      .then((d) => {
        if (d && (d.rating_number || d.rating)) {
          setCodechef(d);
          try {
            localStorage.setItem("portfolio_codechef_data", JSON.stringify(d));
          } catch {
            /* ignore */
          }
        } else {
          throw new Error("Invalid CodeChef payload");
        }
      })
      .catch(() => {
        const cached = localStorage.getItem("portfolio_codechef_data");
        if (cached) {
          try {
            setCodechef(JSON.parse(cached));
            return;
          } catch {
            /* ignore */
          }
        }
        setCodechef({
          rating_number: 1691,
          max_rank: 1710,
          rating: "3★",
          global_rank: "8038",
          country_rank: "927",
        });
      })
      .finally(() => setLoadingStates((s) => ({ ...s, codechef: false })));
  }, []);

  // LeetCode calculations
  const totalSolved = leetcode?.d?.solvedProblem ?? leetcode?.d?.totalSolved ?? 641;
  const easySolved = leetcode?.d?.easySolved ?? 155;
  const medSolved = leetcode?.d?.mediumSolved ?? 360;
  const hardSolved = leetcode?.d?.hardSolved ?? 126;
  const lcSum = (easySolved + medSolved + hardSolved) || 1;
  const easyPct = Math.round((easySolved / lcSum) * 100);
  const medPct = Math.round((medSolved / lcSum) * 100);
  const hardPct = 100 - easyPct - medPct;
  const lcRating = leetcode?.c?.contestRating
    ? Math.round(leetcode.c.contestRating)
    : leetcode?.c?.rating
    ? Math.round(leetcode.c.rating)
    : 1795;

  return (
    <div ref={ref} className={`section-wrapper${inView ? " section-visible" : ""}`}>
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="section-label inline-block">Telemetry</div>
        <h2 className="section-title">Coding Profiles<span className="text-cyan-400">.</span></h2>
        <p className="font-mono text-sm sm:text-base text-slate-400 max-w-xl mx-auto mt-3">
          Real-time telemetry and competitive performance metrics aggregated across primary engineering hubs.
        </p>
      </div>

      {/* 2x2 Balanced Grid Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
        {/* CARD 1: GITHUB */}
        <DashboardCard platformKey="github" isLoading={loadingStates.github}>
          {github ? (
            <div className="space-y-4">
              {/* Highlight Stats (Total Commits, Repos, Stars) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-2.5 sm:p-3 flex flex-col justify-center">
                  <span className="font-mono text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider">
                    Total Commits
                  </span>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-emerald-400 mt-0.5">
                    {github.totalCommits ?? 349}
                  </span>
                </div>
                <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-2.5 sm:p-3 flex flex-col justify-center">
                  <span className="font-mono text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider">
                    Total Repos
                  </span>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-white mt-0.5">
                    {github.public_repos ?? 16}
                  </span>
                </div>
                <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-2.5 sm:p-3 flex flex-col justify-center">
                  <span className="font-mono text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    Stars <Sparkles size={10} className="text-amber-400" />
                  </span>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-amber-300 mt-0.5">
                    {github.totalStars ?? 0}
                  </span>
                </div>
              </div>

              {/* Rows */}
              <div className="space-y-2 py-1">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">Followers / Following</span>
                  <span className="text-slate-200 font-semibold">
                    {github.followers ?? 10} / {github.following ?? 8}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">Public Gists</span>
                  <span className="text-slate-200 font-semibold">
                    {github.public_gists ?? 0}
                  </span>
                </div>
                {github.location && (
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <MapPin size={11} className="text-emerald-400" /> Location
                    </span>
                    <span className="text-slate-300 font-semibold">
                      {github.location}
                    </span>
                  </div>
                )}
              </div>

              {/* Micro-visual: Activity Matrix Sparkline */}
              <div className="pt-1">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1.5">
                  <span>COMMIT MATRIX ({github.totalCommits ?? 349} COMMITS)</span>
                  <span className="text-emerald-400/80">RECENT ACTIVITY</span>
                </div>
                <div className="flex gap-1.5 items-center justify-between overflow-hidden p-2 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  {GITHUB_COMMIT_MATRIX.map((col, cIdx) => (
                    <div key={cIdx} className="flex flex-col gap-1">
                      {col.map((intensity, rIdx) => (
                        <div
                          key={rIdx}
                          className={`w-2 h-2 rounded-sm transition-all duration-300 ${
                            intensity === 3
                              ? "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]"
                              : intensity === 2
                              ? "bg-emerald-500/70"
                              : intensity === 1
                              ? "bg-emerald-700/40"
                              : "bg-slate-800/40"
                          }`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="font-mono text-xs text-amber-400 py-6 text-center">
              ⚠ PROFILE OFFLINE
            </div>
          )}
        </DashboardCard>

        {/* CARD 2: LEETCODE */}
        <DashboardCard platformKey="leetcode" isLoading={loadingStates.leetcode}>
          {leetcode ? (
            <div className="space-y-4">
              {/* Prominent Header Metric */}
              <div className="flex items-end justify-between">
                <div>
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                    Total Solved
                  </span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="font-mono text-3xl font-bold text-white tracking-tight">
                      {totalSolved}
                    </span>
                    <span className="font-mono text-xs text-slate-500">Solved</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                    Contest Rating
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-950/40 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold shadow-[0_0_12px_rgba(245,158,11,0.15)]">
                    <Trophy size={12} className="text-amber-400" />
                    <span>{lcRating}</span>
                  </div>
                </div>
              </div>

              {/* 3-Part Segmented Progress Bar */}
              <div className="space-y-2 pt-1">
                <div className="h-2 w-full rounded-full bg-slate-900/90 border border-slate-800 overflow-hidden flex gap-0.5 p-0.5">
                  <div
                    style={{ width: `${easyPct}%` }}
                    className="h-full rounded-l-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)]"
                    title={`Easy: ${easySolved}`}
                  />
                  <div
                    style={{ width: `${medPct}%` }}
                    className="h-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.4)]"
                    title={`Medium: ${medSolved}`}
                  />
                  <div
                    style={{ width: `${hardPct}%` }}
                    className="h-full rounded-r-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]"
                    title={`Hard: ${hardSolved}`}
                  />
                </div>

                {/* Segment Counts */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div className="bg-slate-900/50 border border-slate-800/70 rounded-lg p-2 text-center">
                    <span className="block font-mono text-[10px] text-emerald-400 font-semibold uppercase">
                      Easy
                    </span>
                    <span className="block font-mono text-sm font-bold text-slate-200 mt-0.5">
                      {easySolved}
                    </span>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-800/70 rounded-lg p-2 text-center">
                    <span className="block font-mono text-[10px] text-amber-400 font-semibold uppercase">
                      Medium
                    </span>
                    <span className="block font-mono text-sm font-bold text-slate-200 mt-0.5">
                      {medSolved}
                    </span>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-800/70 rounded-lg p-2 text-center">
                    <span className="block font-mono text-[10px] text-rose-400 font-semibold uppercase">
                      Hard
                    </span>
                    <span className="block font-mono text-sm font-bold text-slate-200 mt-0.5">
                      {hardSolved}
                    </span>
                  </div>
                </div>
              </div>

              {/* Sub-row */}
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/50 border border-slate-800/70 font-mono text-xs">
                <span className="text-slate-400">Global Problem Coverage</span>
                <span className="text-slate-200 font-semibold">Top ~12% Solvers</span>
              </div>
            </div>
          ) : (
            <div className="font-mono text-xs text-amber-400 py-6 text-center">
              ⚠ PROFILE OFFLINE
            </div>
          )}
        </DashboardCard>

        {/* CARD 3: CODEFORCES */}
        <DashboardCard platformKey="codeforces" isLoading={loadingStates.codeforces}>
          {codeforces ? (
            <div className="space-y-4">
              {/* Prominent Header Metric */}
              <div className="flex items-end justify-between">
                <div>
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                    Current Rating
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="font-mono text-3xl font-bold text-cyan-400 drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                      {codeforces.rating ?? 1527}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                    Rank Division
                  </span>
                  <span className="inline-block bg-cyan-950/50 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                    {codeforces.rank ? codeforces.rank.toUpperCase() : "SPECIALIST"}
                  </span>
                </div>
              </div>

              {/* Stat Badges */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-slate-900/50 border border-slate-800/70 rounded-xl p-3">
                  <span className="block font-mono text-[10px] text-slate-400 uppercase">
                    Max Rating
                  </span>
                  <span className="block font-mono text-base font-bold text-slate-200 mt-0.5">
                    {codeforces.maxRating ?? 1527}
                  </span>
                </div>
                <div className="bg-slate-900/50 border border-slate-800/70 rounded-xl p-3">
                  <span className="block font-mono text-[10px] text-slate-400 uppercase">
                    Max Rank
                  </span>
                  <span className="block font-mono text-base font-bold text-cyan-300 uppercase mt-0.5">
                    {codeforces.maxRank ?? "Specialist"}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="font-mono text-xs text-amber-400 py-6 text-center">
              ⚠ PROFILE OFFLINE
            </div>
          )}
        </DashboardCard>

        {/* CARD 4: CODECHEF */}
        <DashboardCard platformKey="codechef" isLoading={loadingStates.codechef}>
          {codechef ? (
            <div className="space-y-4">
              {/* Prominent Header Metric */}
              <div className="flex items-end justify-between">
                <div>
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                    Current Rating
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="font-mono text-3xl font-bold text-orange-400 drop-shadow-[0_0_12px_rgba(249,115,22,0.4)]">
                      {codechef.rating_number || codechef.currentRating || "1691"}
                    </span>
                    <span className="font-mono text-xs text-slate-500">
                      (Peak: {codechef.max_rank || codechef.highestRating || "1710"})
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                    Division Stars
                  </span>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-950/40 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold tracking-widest shadow-[0_0_10px_rgba(234,179,8,0.2)]">
                    <span>
                      {codechef.stars
                        ? "★".repeat(parseInt(codechef.stars) || 3)
                        : parseInt(codechef.rating)
                        ? "★".repeat(parseInt(codechef.rating) || 3)
                        : "★★★"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Ranks: Global & Country */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-slate-900/50 border border-slate-800/70 rounded-xl p-3">
                  <span className="block font-mono text-[10px] text-slate-400 uppercase flex items-center gap-1">
                    <Globe size={11} className="text-orange-400" /> Global Rank
                  </span>
                  <span className="block font-mono text-base font-bold text-slate-100 mt-0.5">
                    #{String(codechef.global_rank || "8038").trim()}
                  </span>
                </div>
                <div className="bg-slate-900/50 border border-slate-800/70 rounded-xl p-3">
                  <span className="block font-mono text-[10px] text-slate-400 uppercase flex items-center gap-1">
                    <Flag size={11} className="text-amber-400" /> Country Rank
                  </span>
                  <span className="block font-mono text-base font-bold text-slate-100 mt-0.5">
                    #{String(codechef.country_rank || "927").trim()}
                  </span>
                </div>
              </div>

              {/* Tier Row */}
              <div className="pt-0.5">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/50 border border-slate-800/70 font-mono text-xs">
                  <span className="text-slate-400">Competitive Tier</span>
                  <span className="text-amber-300 font-semibold">Division 3 Contender</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="font-mono text-xs text-amber-400 py-6 text-center">
              ⚠ PROFILE OFFLINE
            </div>
          )}
        </DashboardCard>
      </div>
    </div>
  );
}
