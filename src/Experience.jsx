import React, { useState, useEffect, useCallback } from "react";
import {
  GitPullRequest,
  GitMerge,
  FileCode,
  ExternalLink,
  Calendar,
  GitBranch,
  Star,
  GitFork,
  RotateCw,
  CheckCircle2,
  Clock,
  CircleDot,
} from "lucide-react";
import { Tilt } from "./use3DTilt.jsx";
import useInView from "./useInView.js";

const CACHE_KEY = "suraj_github_experience_telemetry_v5";
const CACHE_TTL_MS = 15 * 60 * 1000; // 15-minute cache

// Pure telemetry & data for 3 distinct open-source projects
const EXPERIENCES_METADATA = [
  {
    id: "drawdb",
    projectName: "drawDB",
    repo: "drawdb-io / drawdb",
    repoOwner: "drawdb-io",
    repoName: "drawdb",
    repoUrl: "https://github.com/drawdb-io/drawdb",
    badge: "Core Ecosystem",
    badgeClass: "bg-emerald-950/40 border border-emerald-500/30 text-emerald-300",
    date: "2026 – Present",
    accentColor: "#10b981",
    glowClass: "from-emerald-500/15 via-transparent to-transparent",
    hoverBorder: "hover:border-emerald-500/40 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)]",
    defaultStats: {
      stars: 40223,
      forks: 3350,
      openIssues: 246,
    },
    defaultIssuesRaised: {
      total: 0,
      open: 0,
      closed: 0,
      items: [],
    },
    defaultPRs: [
      {
        number: 1130,
        title: "BUG: TYPO in mermaid.js",
        status: "Merged",
        statusType: "merged",
        mergedAt: "2026-08-29T18:44:50Z",
        url: "https://github.com/drawdb-io/drawdb/pull/1130",
      },
      {
        number: 1104,
        title: "feat: add auto-connect foreign key relationships feature",
        status: "Merged",
        statusType: "merged",
        mergedAt: "2026-08-15T17:33:33Z",
        url: "https://github.com/drawdb-io/drawdb/pull/1104",
      },
    ],
    impactedFiles: [
      "src/features/relationships/autoConnect.ts",
      "src/utils/mermaid.js",
      "src/components/Canvas/CanvasPanTool.tsx",
      "src/types/schema.ts",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Canvas API",
      "React Flow",
      "Tailwind CSS",
      "Zustand",
    ],
  },
  {
    id: "debateai",
    projectName: "DebateAI",
    repo: "AOSSIE-Org / DebateAI",
    repoOwner: "AOSSIE-Org",
    repoName: "DebateAI",
    repoUrl: "https://github.com/AOSSIE-Org/DebateAI",
    badge: "AOSSIE Org",
    badgeClass: "bg-cyan-950/40 border border-cyan-500/30 text-cyan-300",
    date: "2026 – Present",
    accentColor: "#06b6d4",
    glowClass: "from-cyan-500/15 via-transparent to-transparent",
    hoverBorder: "hover:border-cyan-500/40 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]",
    defaultStats: {
      stars: 106,
      forks: 262,
      openIssues: 350,
    },
    defaultIssuesRaised: {
      total: 5,
      open: 2,
      closed: 3,
      items: [
        {
          number: 486,
          title: "Feat: No Quit/Cancel Button in Debate Setup",
          state: "open",
          url: "https://github.com/AOSSIE-Org/DebateAI/issues/486",
        },
        {
          number: 453,
          title: "[BUG]: Mismatched Passwords Displays 'An unexpected error occurred' in Authentication page",
          state: "closed",
          url: "https://github.com/AOSSIE-Org/DebateAI/issues/453",
        },
        {
          number: 452,
          title: "[BUG]: Pros & Cons Challenge is Completely Non-Functional (Missing Routes)",
          state: "closed",
          url: "https://github.com/AOSSIE-Org/DebateAI/issues/452",
        },
        {
          number: 429,
          title: "[FEATURE]: Add password visibility toggle (eye icon) to Sign In and Authentication forms",
          state: "closed",
          url: "https://github.com/AOSSIE-Org/DebateAI/issues/429",
        },
        {
          number: 416,
          title: "[FEATURE]: Real-Time Streaming for AI Bot Debate Responses via SSE",
          state: "open",
          url: "https://github.com/AOSSIE-Org/DebateAI/issues/416",
        },
      ],
    },
    defaultPRs: [
      {
        number: 462,
        title: "[BUG]: Mismatched Passwords Displays 'An unexpected error occurred' in signup",
        status: "Merged",
        statusType: "merged",
        mergedAt: "2026-10-02T08:57:24Z",
        url: "https://github.com/AOSSIE-Org/DebateAI/pull/462",
      },
      {
        number: 454,
        title: "Bug:Pros & Cons Challenge is Completely Non-Functional (Missing Routes)",
        status: "Merged",
        statusType: "merged",
        mergedAt: "2026-09-12T12:23:14Z",
        url: "https://github.com/AOSSIE-Org/DebateAI/pull/454",
      },
      {
        number: 427,
        title: "feat: real-time Gemini LLM streaming & typing indicators for bot debates",
        status: "In Review",
        statusType: "review",
        mergedAt: null,
        url: "https://github.com/AOSSIE-Org/DebateAI/pull/427",
      },
    ],
    impactedFiles: [
      "frontend/src/components/DebateArena.tsx",
      "frontend/src/hooks/useStreamingDebate.ts",
      "backend/controllers/debate_controller.go",
      "frontend/src/pages/auth/signup.tsx",
    ],
    techStack: [
      "TypeScript",
      "Next.js",
      "Go (Golang)",
      "RESTful APIs",
      "LLM Streaming",
      "Docker",
    ],
  },
  {
    id: "pictopy",
    projectName: "PictoPy",
    repo: "AOSSIE-Org / PictoPy",
    repoOwner: "AOSSIE-Org",
    repoName: "PictoPy",
    repoUrl: "https://github.com/AOSSIE-Org/PictoPy",
    badge: "AOSSIE Org",
    badgeClass: "bg-amber-950/40 border border-amber-500/30 text-amber-300",
    date: "2026 – Present",
    accentColor: "#f59e0b",
    glowClass: "from-amber-500/15 via-transparent to-transparent",
    hoverBorder: "hover:border-amber-500/40 hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.15)]",
    defaultStats: {
      stars: 311,
      forks: 745,
      openIssues: 344,
    },
    defaultIssuesRaised: {
      total: 6,
      open: 4,
      closed: 2,
      items: [
        {
          number: 1540,
          title: "Feat:On-demand Image Compression and Optimization Tool",
          state: "closed",
          url: "https://github.com/AOSSIE-Org/PictoPy/issues/1540",
        },
        {
          number: 1525,
          title: "Feat:Support multi-select to remove multiple directories at once in Settings",
          state: "open",
          url: "https://github.com/AOSSIE-Org/PictoPy/issues/1525",
        },
        {
          number: 1522,
          title: "Feat: On-device OCR to extract and copy text from images",
          state: "open",
          url: "https://github.com/AOSSIE-Org/PictoPy/issues/1522",
        },
        {
          number: 1520,
          title: "BUG: Wrong GPS 0.0 coordinate checks",
          state: "closed",
          url: "https://github.com/AOSSIE-Org/PictoPy/issues/1520",
        },
        {
          number: 1497,
          title: "Feat:Optimize face embedding storage in SQLite using raw float32 BLOB with backward compatibility",
          state: "open",
          url: "https://github.com/AOSSIE-Org/PictoPy/issues/1497",
        },
        {
          number: 1492,
          title: "Feat: Add password visibility toggle and confirm password validation when creating locked albums",
          state: "open",
          url: "https://github.com/AOSSIE-Org/PictoPy/issues/1492",
        },
      ],
    },
    defaultPRs: [
      {
        number: 1536,
        title: "Feat:Support multi-select to remove multiple directories at once in Settings",
        status: "In Review",
        statusType: "review",
        mergedAt: null,
        url: "https://github.com/AOSSIE-Org/PictoPy/pull/1536",
      },
      {
        number: 1493,
        title: "feat: add password confirmation and visibility toggle in create album modal",
        status: "In Review",
        statusType: "review",
        mergedAt: null,
        url: "https://github.com/AOSSIE-Org/PictoPy/pull/1493",
      },
    ],
    impactedFiles: [
      "pictopy/ui/settings_dialog.py",
      "pictopy/ui/album_modal.py",
      "pictopy/core/metadata/exif_parser.py",
      "tests/test_settings.py",
    ],
    techStack: [
      "Python",
      "SQLite",
      "NumPy",
      "Computer Vision",
      "PyQt / GUI",
      "EXIF",
    ],
  },
];

function formatStat(num) {
  if (num === null || num === undefined) return "—";
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  return num.toString();
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function matchRepoId(repoUrl = "") {
  const lower = repoUrl.toLowerCase();
  if (lower.includes("drawdb")) return "drawdb";
  if (lower.includes("debateai")) return "debateai";
  if (lower.includes("pictopy")) return "pictopy";
  return null;
}

const getInitialTelemetry = () => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
        return parsed;
      }
    }
  } catch {
    /* ignore cache read error */
  }
  return null;
};

export default function Experience() {
  const [prsData, setPrsData] = useState(() => {
    const cached = getInitialTelemetry();
    if (cached?.prs) return cached.prs;
    const initPrs = {};
    EXPERIENCES_METADATA.forEach((exp) => {
      initPrs[exp.id] = exp.defaultPRs;
    });
    return initPrs;
  });

  const [repoStats, setRepoStats] = useState(() => {
    const cached = getInitialTelemetry();
    if (cached?.stats) return cached.stats;
    const initStats = {};
    EXPERIENCES_METADATA.forEach((exp) => {
      initStats[exp.id] = exp.defaultStats;
    });
    return initStats;
  });

  const [issuesData, setIssuesData] = useState(() => {
    const cached = getInitialTelemetry();
    if (cached?.issues) return cached.issues;
    const initIssues = {};
    EXPERIENCES_METADATA.forEach((exp) => {
      initIssues[exp.id] = exp.defaultIssuesRaised;
    });
    return initIssues;
  });

  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSynced, setLastSynced] = useState(() => {
    const cached = getInitialTelemetry();
    return cached
      ? new Date(cached.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      : null;
  });
  const [syncSource, setSyncSource] = useState(() => {
    const cached = getInitialTelemetry();
    return cached ? "Cached" : "Snapshot";
  });

  // Fetch real-time data from GitHub API
  const fetchGitHubTelemetry = useCallback(async (force = false) => {
    const cached = getInitialTelemetry();
    if (!force && cached) {
      return;
    }

    setIsSyncing(true);
    let newPrs = null;
    let newStats = null;
    let newIssues = null;

    try {
      // 1. Fetch all PRs by Surajshivam-123 in a single search request
      const searchRes = await fetch(
        "https://api.github.com/search/issues?q=author:Surajshivam-123+type:pr",
        { headers: { Accept: "application/vnd.github.v3+json" } }
      );

      if (searchRes.ok) {
        const searchJson = await searchRes.json();
        const items = searchJson.items || [];

        const grouped = {
          drawdb: [],
          debateai: [],
          pictopy: [],
        };

        items.forEach((item) => {
          const rId = matchRepoId(item.repository_url);
          if (rId && grouped[rId]) {
            const isMerged = !!item.pull_request?.merged_at;
            const isOpen = item.state === "open";

            if (!isMerged && !isOpen) {
              return;
            }

            const status = isMerged ? "Merged" : "In Review";
            const statusType = isMerged ? "merged" : "review";

            grouped[rId].push({
              number: item.number,
              title: item.title,
              status,
              statusType,
              mergedAt: item.pull_request?.merged_at || null,
              updatedAt: item.updated_at,
              url: item.html_url,
            });
          }
        });

        EXPERIENCES_METADATA.forEach((exp) => {
          if (!grouped[exp.id] || grouped[exp.id].length === 0) {
            grouped[exp.id] = exp.defaultPRs;
          }
        });

        newPrs = grouped;
        setPrsData(grouped);
      }
    } catch {
      /* ignore fetch error */
    }

    // 2. Fetch issues raised by Surajshivam-123 (both Open and Closed)
    try {
      const issuesRes = await fetch(
        "https://api.github.com/search/issues?q=author:Surajshivam-123+type:issue",
        { headers: { Accept: "application/vnd.github.v3+json" } }
      );

      if (issuesRes.ok) {
        const issuesJson = await issuesRes.json();
        const items = issuesJson.items || [];
        const counts = {
          drawdb: { total: 0, open: 0, closed: 0, items: [] },
          debateai: { total: 0, open: 0, closed: 0, items: [] },
          pictopy: { total: 0, open: 0, closed: 0, items: [] },
        };

        items.forEach((item) => {
          const rId = matchRepoId(item.repository_url);
          if (rId && counts[rId]) {
            counts[rId].total++;
            if (item.state === "closed") {
              counts[rId].closed++;
            } else {
              counts[rId].open++;
            }
            counts[rId].items.push({
              number: item.number,
              title: item.title,
              state: item.state,
              url: item.html_url,
              createdAt: item.created_at,
              closedAt: item.closed_at,
            });
          }
        });

        // Retain default items if none returned
        EXPERIENCES_METADATA.forEach((exp) => {
          if (!counts[exp.id] || counts[exp.id].total === 0) {
            counts[exp.id] = exp.defaultIssuesRaised;
          }
        });

        newIssues = counts;
        setIssuesData(counts);
      }
    } catch {
      /* ignore fetch error */
    }

    // 3. Fetch live repository statistics (stars, forks, open issues)
    try {
      const statsMap = {};
      await Promise.allSettled(
        EXPERIENCES_METADATA.map(async (exp) => {
          try {
            const repoRes = await fetch(
              `https://api.github.com/repos/${exp.repoOwner}/${exp.repoName}`,
              { headers: { Accept: "application/vnd.github.v3+json" } }
            );
            if (repoRes.ok) {
              const repoJson = await repoRes.json();
              statsMap[exp.id] = {
                stars: repoJson.stargazers_count,
                forks: repoJson.forks_count,
                openIssues: repoJson.open_issues_count,
              };
            }
          } catch {
            /* ignore fetch error */
          }
        })
      );

      if (Object.keys(statsMap).length > 0) {
        setRepoStats((prev) => {
          const merged = { ...prev, ...statsMap };
          newStats = merged;
          return merged;
        });
      }
    } catch {
      /* ignore fetch error */
    }

    const now = Date.now();
    setLastSynced(new Date(now).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    setSyncSource("Live API");

    try {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          timestamp: now,
          prs: newPrs || prsData,
          stats: newStats || repoStats,
          issues: newIssues || issuesData,
        })
      );
    } catch {
      /* ignore cache write error */
    }

    setIsSyncing(false);
  }, [prsData, repoStats, issuesData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchGitHubTelemetry(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [fetchGitHubTelemetry]);

  // Compute telemetry totals
  const totalMerged = Object.values(prsData).reduce(
    (acc, list) => acc + list.filter((pr) => pr.statusType === "merged").length,
    0
  );
  const totalReview = Object.values(prsData).reduce(
    (acc, list) => acc + list.filter((pr) => pr.statusType === "review").length,
    0
  );
  const totalIssuesStats = Object.values(issuesData).reduce(
    (acc, val) => {
      if (typeof val === "number") {
        acc.total += val;
      } else if (val && typeof val === "object") {
        acc.total += val.total || 0;
        acc.open += val.open || 0;
        acc.closed += val.closed || 0;
      }
      return acc;
    },
    { total: 0, open: 0, closed: 0 }
  );
  const totalStars = Object.values(repoStats).reduce(
    (acc, s) => acc + (s?.stars || 0),
    0
  );

  const [ref, inView] = useInView(0.08);

  return (
    <section id="experience" className="relative bg-transparent overflow-hidden">
      <div ref={ref} className={`max-w-5xl mx-auto px-4 sm:px-6 relative z-10 section-wrapper${inView ? " section-visible" : ""}`}>
        {/* Section Header Centered */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="section-label inline-block">Work & Contributions</div>
          <h2 className="section-title">
            Experience & Open Source<span className="text-cyan-400">.</span>
          </h2>
          <p className="font-mono text-sm sm:text-base text-slate-400 max-w-xl mx-auto mt-3">
            Production contributions and core engineering deliveries across high-impact open-source ecosystems.
          </p>
        </div>

        {/* Live GitHub API Telemetry Strip */}
        <div className="mb-10 p-3.5 sm:p-4 rounded-xl bg-[#0e131f]/90 border border-slate-800/80 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-slate-300">
                Live GitHub Activity:{" "}
                <a
                  href="https://github.com/Surajshivam-123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 hover:underline font-semibold"
                >
                  @Surajshivam-123
                </a>
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-500 text-[11px] flex items-center gap-1">
                <Clock size={11} className="text-slate-600" />
                {isSyncing ? "Syncing API..." : lastSynced ? `${syncSource} (${lastSynced})` : "Live API Connected"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
            <span className="text-slate-400 text-[11px] sm:text-xs">
              <strong className="text-purple-300 font-semibold">{totalMerged}</strong> Merged ·{" "}
              <strong className="text-cyan-300 font-semibold">{totalReview}</strong> In Review ·{" "}
              <strong className="text-amber-400 font-semibold">{totalIssuesStats.total}</strong> Issues Raised ({totalIssuesStats.open} Open · {totalIssuesStats.closed} Closed) ·{" "}
              <strong className="text-amber-300 font-semibold">{formatStat(totalStars)}+</strong> Stars
            </span>
            <button
              onClick={() => fetchGitHubTelemetry(true)}
              disabled={isSyncing}
              title="Refresh GitHub Activity Telemetry"
              className="p-1.5 rounded-md border border-slate-700/60 bg-slate-800/50 hover:bg-slate-700/60 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <RotateCw size={13} className={isSyncing ? "animate-spin text-cyan-400" : ""} />
            </button>
          </div>
        </div>

        {/* 3 Pure Data Project Cards */}
        <div className="space-y-6">
          {EXPERIENCES_METADATA.map((exp) => {
            const allPRs = prsData[exp.id] || exp.defaultPRs;
            const validPRs = allPRs.filter(
              (p) => p.statusType === "merged" || p.statusType === "review"
            );
            const stats = repoStats[exp.id] || exp.defaultStats;
            const rawIssues = issuesData[exp.id] ?? exp.defaultIssuesRaised;
            const issuesStats =
              typeof rawIssues === "number"
                ? { total: rawIssues, open: 0, closed: 0, items: [] }
                : rawIssues || { total: 0, open: 0, closed: 0, items: [] };
            const mergedCount = validPRs.filter((p) => p.statusType === "merged").length;
            const reviewCount = validPRs.filter((p) => p.statusType === "review").length;

            return (
              <Tilt
                key={exp.id}
                options={{ maxTilt: 2 }}
                className={`experience-card block bg-[#0e131f]/90 border border-slate-800/80 rounded-2xl p-6 sm:p-7 backdrop-blur-md space-y-5 relative overflow-hidden group transition-all duration-300 ${exp.hoverBorder}`}
              >
                {/* Soft Brand Radial Glow */}
                <div
                  className={`pointer-events-none absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl opacity-10 group-hover:opacity-25 transition-opacity duration-500 bg-gradient-to-br ${exp.glowClass}`}
                />

                {/* 1. Project Identity & Telemetry Metrics Header */}
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {exp.projectName}
                      </h3>

                      {exp.badge && (
                        <span
                          className={`text-xs font-mono font-medium px-2.5 py-0.5 rounded-full ${exp.badgeClass}`}
                        >
                          {exp.badge}
                        </span>
                      )}

                      {/* Real-time Star Count */}
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300">
                        <Star size={11} className="text-amber-400 fill-amber-400" />
                        <span>{formatStat(stats.stars)} Stars</span>
                      </span>

                      {/* Real-time Fork Count */}
                      <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-800/60 border border-slate-700/50 text-slate-300">
                        <GitFork size={11} className="text-slate-400" />
                        <span>{formatStat(stats.forks)} Forks</span>
                      </span>

                      {/* Real-time Issues Raised (Open & Closed) */}
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-orange-950/40 border border-orange-500/30 text-orange-300">
                        <CircleDot size={11} className="text-orange-400" />
                        <span>
                          {issuesStats.total} Issues Raised
                          {issuesStats.total > 0 && ` (${issuesStats.open} Open · ${issuesStats.closed} Closed)`}
                        </span>
                      </span>
                    </div>

                    {/* Repository Link */}
                    <div>
                      <a
                        href={exp.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-cyan-300 transition-colors group/org"
                      >
                        <span className="text-slate-500">Repository:</span>
                        <span className="text-slate-300 group-hover/org:text-cyan-300 font-semibold">{exp.repo}</span>
                        <ExternalLink
                          size={12}
                          className="text-slate-500 group-hover/org:text-cyan-300 transition-colors"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2. Pull Requests Sub-Section (Pure Verifiable Code Deliveries) */}
                <div className="relative z-10 bg-[#121826]/70 border border-slate-800/70 rounded-xl p-4 sm:p-5 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-1">
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                      <GitPullRequest size={14} className="text-cyan-400" />
                      Key Pull Requests & Code Deliveries
                    </span>

                    <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                      {mergedCount > 0 && (
                        <span className="text-purple-300 bg-purple-950/60 border border-purple-500/40 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                          <GitMerge size={11} className="text-purple-400" />
                          {mergedCount} Merged
                        </span>
                      )}
                      {reviewCount > 0 && (
                        <span className="text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                          <GitPullRequest size={11} className="text-cyan-400 animate-pulse" />
                          {reviewCount} In Review
                        </span>
                      )}
                      <span className="text-orange-300 bg-orange-950/60 border border-orange-500/40 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <CircleDot size={11} className="text-orange-400" />
                        {issuesStats.total} Issues Raised
                        {issuesStats.total > 0 && ` (${issuesStats.open} Open · ${issuesStats.closed} Closed)`}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {validPRs.map((pr) => (
                      <div
                        key={pr.number}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800/70 hover:border-slate-700/90 transition-all duration-200"
                      >
                        <div className="flex items-start sm:items-center gap-2.5 min-w-0 flex-1">
                          {/* Status Badge: Merged or In Review */}
                          {pr.statusType === "merged" ? (
                            <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold px-2 py-0.5 rounded-md shrink-0 bg-purple-950/70 border border-purple-500/40 text-purple-300">
                              <GitMerge size={12} className="text-purple-400" />
                              Merged
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold px-2 py-0.5 rounded-md shrink-0 bg-cyan-950/70 border border-cyan-500/40 text-cyan-300">
                              <GitPullRequest size={12} className="text-cyan-400 animate-pulse" />
                              In Review
                            </span>
                          )}

                          {/* PR Title & Number */}
                          <div className="min-w-0 flex-1">
                            <div className="flex items-baseline gap-2">
                              <span className="font-mono text-xs sm:text-sm font-bold text-white shrink-0">
                                #{pr.number}:
                              </span>
                              <span className="font-mono text-xs sm:text-sm text-slate-200 truncate">
                                {pr.title}
                              </span>
                            </div>
                            {pr.mergedAt && (
                              <div className="font-mono text-[10px] text-purple-400/80 mt-0.5 flex items-center gap-1">
                                <CheckCircle2 size={10} className="text-purple-400" />
                                <span>Merged on {formatDate(pr.mergedAt)}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Direct PR Link */}
                        <a
                          href={pr.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded-md bg-slate-800/40 border border-slate-700/40 hover:border-slate-600 transition-colors shrink-0 sm:self-center group/pr"
                        >
                          <span className="group-hover/pr:underline">Inspect PR</span>
                          <ExternalLink size={12} className="text-slate-500 group-hover/pr:text-cyan-400 transition-colors" />
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* Issues Authored & Reported by Author (both Open and Closed) */}
                  {issuesStats.items && issuesStats.items.length > 0 && (
                    <div className="pt-3 border-t border-slate-800/80 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 font-semibold pb-1">
                        <span className="flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                          <CircleDot size={12} className="text-orange-400" />
                          Key Issues Authored ({issuesStats.total} Total)
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">
                          {issuesStats.open} Open · {issuesStats.closed} Closed
                        </span>
                      </div>
                      <div className="space-y-2">
                        {issuesStats.items.map((issue) => (
                          <div
                            key={issue.number}
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 transition-all duration-200"
                          >
                            <div className="flex items-start sm:items-center gap-2 min-w-0 flex-1">
                              {issue.state === "closed" ? (
                                <span className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold px-2 py-0.5 rounded-md shrink-0 bg-purple-950/60 border border-purple-500/40 text-purple-300">
                                  <CheckCircle2 size={11} className="text-purple-400" />
                                  Closed
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold px-2 py-0.5 rounded-md shrink-0 bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                                  <CircleDot size={11} className="text-emerald-400" />
                                  Open
                                </span>
                              )}
                              <span className="font-mono text-xs font-bold text-white shrink-0">
                                #{issue.number}:
                              </span>
                              <span className="font-mono text-xs text-slate-300 truncate">
                                {issue.title}
                              </span>
                            </div>
                            <a
                              href={issue.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 hover:underline shrink-0"
                            >
                              <span>View Issue</span>
                              <ExternalLink size={11} />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. Impacted Architecture & Core Files Data */}
                <div className="relative z-10 space-y-2 pt-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    <FileCode size={13} className="text-cyan-400" />
                    <span>Impacted Architecture & Core Files</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.impactedFiles.map((file) => (
                      <span
                        key={file}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/70 border border-slate-800 text-slate-300 font-mono text-xs hover:border-slate-700 hover:text-white transition-colors"
                      >
                        <GitBranch size={11} className="text-slate-500 shrink-0" />
                        <span className="truncate">{file}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4. Tech Stack Data */}
                <div className="relative z-10 pt-3 border-t border-slate-800/80 flex flex-wrap gap-2 items-center">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mr-1">
                    Stack:
                  </span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-800/50 border border-slate-700/60 font-mono text-xs text-slate-300 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
}
