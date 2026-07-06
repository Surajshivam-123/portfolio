import { useState, useEffect, useRef } from "react";
import { Tilt } from "./use3DTilt.jsx";

const GITHUB_USER = "Surajshivam-123";
const LEETCODE_USER = "Surajshivam";
const CF_USER = "s_u_r_a_j";
const CODECHEF_USER = "skumar919810";

const USE_CORS_PROXY = true;
const CORS_PROXY = "https://corsproxy.io/?";

const fetchWithProxy = (url) => {
  const finalUrl = USE_CORS_PROXY ? `${CORS_PROXY}${encodeURIComponent(url)}` : url;
  return fetch(finalUrl);
};

const getRatingColor = (rating) => {
  if (!rating) return "#aaa";
  if (rating >= 2400) return "#ff3300";
  if (rating >= 2100) return "#ff8800";
  if (rating >= 1900) return "#cc44cc";
  if (rating >= 1600) return "#4488ff";
  if (rating >= 1400) return "#03d8c8";
  if (rating >= 1200) return "#44cc44";
  return "#aaaaaa";
};

const getRankBadge = (rating) => {
  if (!rating) return { label: "Unrated", color: "#aaa" };
  if (rating >= 2400) return { label: "Grandmaster", color: "#ff3300" };
  if (rating >= 2100) return { label: "Master", color: "#ff8800" };
  if (rating >= 1900) return { label: "Candidate Master", color: "#cc44cc" };
  if (rating >= 1600) return { label: "Expert", color: "#4488ff" };
  if (rating >= 1400) return { label: "Specialist", color: "#03d8c8" };
  if (rating >= 1200) return { label: "Pupil", color: "#44cc44" };
  return { label: "Newbie", color: "#aaa" };
};

// Intersection Observer hook
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Profile() {
  const [github, setGithub] = useState(null);
  const [leetcode, setLeetcode] = useState(null);
  const [codeforces, setCodeforces] = useState(null);
  const [codechef, setCodechef] = useState(null);
  const [loadingStates, setLoadingStates] = useState({ github: true, leetcode: true, codeforces: true, codechef: true });

  const [ref, inView] = useInView(0.1);

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}`).then((r) => r.json()),
      fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=stars`).then((r) => r.json()),
    ])
      .then(([profile, repos]) => {
        const stars = Array.isArray(repos) ? repos.reduce((s, r) => s + (r.stargazers_count || 0), 0) : 0;
        setGithub({ ...profile, totalStars: stars });
      })
      .catch(() => setGithub({ error: true }))
      .finally(() => setLoadingStates((s) => ({ ...s, github: false })));

    Promise.all([
      fetchWithProxy(`https://alfa-leetcode-api.onrender.com/${LEETCODE_USER}/solved`)
        .then((r) => r.json()),
      fetchWithProxy(`https://alfa-leetcode-api.onrender.com/${LEETCODE_USER}/contest`)
        .then((r) => r.json())
    ])

      .then(([d, c]) => setLeetcode({ d, c }))
      .catch(() => setLeetcode({ error: true }))
      .finally(() => setLoadingStates((s) => ({ ...s, leetcode: false })));

    fetchWithProxy(`https://codeforces.com/api/user.info?handles=${CF_USER}`)
      .then((r) => r.json())
      .then((d) => { if (d.status === "OK") setCodeforces(d.result[0]); })
      .catch(() => setCodeforces({ error: true }))
      .finally(() => setLoadingStates((s) => ({ ...s, codeforces: false })));

    fetchWithProxy(`https://codechef-api-henna.vercel.app/${CODECHEF_USER}`)
      .then((r) => r.json())
      .then((d) => setCodechef(d))
      .catch(() => setCodechef({ error: true }))
      .finally(() => setLoadingStates((s) => ({ ...s, codechef: false })));
  }, []);

  const StatRow = ({ label, value, color = "var(--text)", sub }) => (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 0",
      borderBottom: "1px solid var(--border)",
      fontSize: 13,
    }}>
      <span style={{ color: "var(--muted)" }}>
        {label}
      </span>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 2 }}>
        <span style={{ color, fontWeight: 600 }}>
          {value ?? <span style={{ color: "var(--muted)" }}>—</span>}
        </span>
        {sub && <span style={{ color: "var(--muted)", fontSize: 10 }}>{sub}</span>}
      </div>
    </div>
  );

  const platforms = {
    github: { color: "#39ff14", shadow: "#39ff1422", glow: "#39ff1444" },
    leetcode: { color: "#ffa500", shadow: "#ffa50018", glow: "#ffa50033" },
    codeforces: { color: "#00d4ff", shadow: "#00d4ff18", glow: "#00d4ff33" },
    codechef: { color: "#ff6b35", shadow: "#ff6b3518", glow: "#ff6b3533" },
  };

  const Card = ({ platform, title, username, children }) => {
    const { color, glow } = platforms[platform];
    const isLoading = loadingStates[platform];
    const [hovered, setHovered] = useState(false);

    const renderIcon = (size = 20) => {
      switch (platform) {
        case "github":
          return (
            <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          );
        case "leetcode":
          return (
            <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
              <path d="M16.102 17.93l-2.69 2.6c-.75.68-1.8.68-2.55 0l-5.69-5.46c-.75-.68-.75-1.8 0-2.48l5.69-5.46c.75-.68 1.8-.68 2.55 0l2.69 2.6c.3.28.3.73 0 1.01s-.77.28-1.07 0l-2.14-2.07c-.45-.4-.9-.4-1.35 0l-4.5 4.31c-.45.4-.45 1.07 0 1.48l4.5 4.3c.45.41.9.41 1.35 0l2.14-2.08c.3-.27.77-.27 1.07 0s.3.73 0 1.01z" />
              <path d="M8.28 12.38L16.2 4.75c.75-.68 1.8-.68 2.55 0l2.69 2.6c.75.68.75 1.8 0 2.48l-7.92 7.63c-.75.68-1.8.68-2.55 0l-2.69-2.6c-.3-.28-.3-.73 0-1.01s.77-.28 1.07 0l2.14 2.07c.45.4.9.4 1.35 0l6.75-6.5c.45-.4.45-1.07 0-1.48l-2.14-2.07c-.45-.4-.9-.4-1.35 0l-6.75 6.5c-.3.28-.77.28-1.07 0s-.3-.73 0-1.01z" />
            </svg>
          );
        case "codeforces":
          return (
            <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
              <path d="M4.5 7.5a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-3 0V9a1.5 1.5 0 011.5-1.5zM12 3a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-3 0V4.5a1.5 1.5 0 011.5-1.5zM19.5 12a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-3 0v-6a1.5 1.5 0 011.5-1.5z" />
            </svg>
          );
        case "codechef":
          return (
            <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
              <path d="M12 2C9.24 2 7 4.24 7 7c0 .77.18 1.5.49 2.16L3.34 11.3a1 1 0 00-.23 1.36c.2.3.52.48.88.48h2.09c.27 1.54 1.25 2.87 2.65 3.52l-2.16 4.32a1 1 0 001.79.89l2.25-4.5c.44.09.89.13 1.38.13s.94-.04 1.38-.13l2.25 4.5a1 1 0 001.79-.89l-2.16-4.32c1.4-.65 2.38-1.98 2.65-3.52h2.09c.36 0 .68-.18.88-.48a1 1 0 00-.23-1.36l-4.15-2.14c.31-.66.49-1.39.49-2.16 0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm-3.5 8c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>
          );
        default:
          return null;
      }
    };

    return (
      <Tilt
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "var(--surface)",
          border: `1px solid ${hovered ? "rgba(255,255,255,0.15)" : "var(--border)"}`,
          borderRadius: 12,
          padding: "2rem",
          position: "relative",
          boxShadow: hovered
            ? `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px ${glow}`
            : `0 4px 24px rgba(0, 0, 0, 0.2)`,
          overflow: "hidden",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Header */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
          paddingBottom: 12,
          borderBottom: "1px solid var(--border)",
          transform: "translateZ(30px)",
          transformStyle: "preserve-3d"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color, display: "flex", alignItems: "center" }}>{renderIcon(20)}</span>
            <span style={{ color: "var(--text)", fontWeight: 700, fontSize: 14, letterSpacing: 2 }}>
              {title}
            </span>
          </div>
          <a
            href={`https://${platform === "codeforces" ? "codeforces.com/profile/" + username : platform === "github" ? "github.com/" + username : platform === "codechef" ? "codechef.com/users/" + username : "leetcode.com/u/" + username}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--muted)", fontSize: 11, letterSpacing: 1, textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => { e.target.style.color = color; }}
            onMouseLeave={(e) => { e.target.style.color = "var(--muted)"; }}
          >
            @{username} ↗
          </a>
        </div>

        {/* Content */}
        {isLoading ? (
          <div style={{ padding: "40px 0", textAlign: "center", color: "var(--muted)", fontSize: 12, letterSpacing: 2, transform: "translateZ(20px)" }}>
            FETCHING DATA...
          </div>
        ) : (
          <div style={{ minHeight: 140, transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>{children}</div>
        )}

        {/* Status */}
        <div style={{
          marginTop: 20,
          paddingTop: 12,
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 10,
          color: "var(--muted)",
          transform: "translateZ(25px)"
        }}>
          <span style={{ color: isLoading ? "#ff4444" : "#00cc33", fontWeight: 600 }}>
            ● {isLoading ? "FETCHING…" : "LIVE"}
          </span>
          <span>SYNC {new Date().getHours()}:{String(new Date().getMinutes()).padStart(2, "0")} UTC</span>
        </div>
      </Tilt>
    );
  };

  return (
    <div ref={ref} className={`section-wrapper${inView ? " section-visible" : ""}`} style={{ paddingBottom: "4rem" }}>
      <div className="section-label">Stats</div>
      <h2 className="section-title">Coding<br />Profiles.</h2>

      {/* Cards grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20, marginTop: "3.5rem" }}>

        {/* GITHUB */}
        <Card platform="github" title="GITHUB" username={GITHUB_USER}>
          {github && !github.error ? (<>
            <StatRow label="PUBLIC_REPOS" value={github.public_repos} color="#39ff14" />
            <StatRow label="FOLLOWERS" value={github.followers} color="#39ff14" />
            <StatRow label="FOLLOWING" value={github.following} />
            <StatRow label="TOTAL_STARS" value={github.totalStars} color="#ffff44" />
            <StatRow label="PUBLIC_GISTS" value={github.public_gists} />
            {github.location && <StatRow label="LOCATION" value={github.location} />}
          </>) : !loadingStates.github && (
            <div style={{ color: "#ff8844", fontSize: 12, padding: "16px 0" }}>⚠ API UNAVAILABLE</div>
          )}
        </Card>

        {/* LEETCODE */}
        <Card platform="leetcode" title="LEETCODE" username={LEETCODE_USER}>
          {leetcode && !leetcode.error ? (<>
            <StatRow label="TOTAL_SOLVED" value={leetcode.d.solvedProblem ?? leetcode.d.totalSolved} color="#ffa500" />
            <StatRow label="EASY" value={leetcode.d.easySolved} color="#44ff88" />
            <StatRow label="MEDIUM" value={leetcode.d.mediumSolved} color="#ffcc00" />
            <StatRow label="HARD" value={leetcode.d.hardSolved} color="#ff4444" />
            <StatRow label="Rating" value={leetcode.c.contestRating} color="#4aff44" />
          </>) : !loadingStates.leetcode && (
            <div style={{ color: "#ff8844", fontSize: 12, padding: "16px 0" }}>⚠ API UNAVAILABLE</div>
          )}
        </Card>

        {/* CODEFORCES */}
        <Card platform="codeforces" title="CODEFORCES" username={CF_USER}>
          {codeforces && !codeforces.error ? (<>
            <StatRow
              label="CURRENT_RATING"
              value={codeforces.rating}
              color={getRatingColor(codeforces.rating)}
              sub={getRankBadge(codeforces.rating).label}
            />
            <StatRow
              label="MAX_RATING"
              value={codeforces.maxRating}
              color={getRatingColor(codeforces.maxRating)}
              sub={getRankBadge(codeforces.maxRating).label}
            />
            <StatRow label="RANK" value={codeforces.rank?.toUpperCase()} color="#39ff1466" />
            <StatRow label="MAX_RANK" value={codeforces.maxRank?.toUpperCase()} />
            {codeforces.organization && <StatRow label="ORGANIZATION" value={codeforces.organization} />}
          </>) : !loadingStates.codeforces && (
            <div style={{ color: "#00ffc3aa", fontSize: 12, padding: "16px 0" }}>⚠ API UNAVAILABLE</div>
          )}
        </Card>

        {/* CODECHEF */}
        <Card platform="codechef" title="CODECHEF" username={CODECHEF_USER}>
          {codechef && !codechef.error ? (<>
            <StatRow label="RATING" value={codechef.rating} color="#ff6b35" />
            <StatRow label="HIGHEST RATING" value={codechef.highest_rating.slice(16, -1)} color="#ff6b35" />
            <StatRow label="STARS" value={"★".repeat(3)} color="#ffcc00" />
            <StatRow label="GLOBAL_RANK" value={codechef.global_rank} color="#ff6b35" />
            <StatRow label="COUNTRY_RANK" value={codechef.country_rank} />
          </>) : !loadingStates.codechef && (
            <div style={{ color: "#ff6b35aa", fontSize: 12, padding: "16px 0" }}>⚠ API UNAVAILABLE</div>
          )}
        </Card>

      </div>
    </div>
  );
}