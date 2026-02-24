import { useState, useEffect, useRef } from "react";

const GITHUB_USER = "Surajshivam-123";
const LEETCODE_USER = "Surajshivam";
const CF_USER = "s_u_r_a_j";

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

export default function Profile() {
  const canvasRef = useRef(null);
  const [github, setGithub] = useState(null);
  const [leetcode, setLeetcode] = useState(null);
  const [codeforces, setCodeforces] = useState(null);
  const [loadingStates, setLoadingStates] = useState({ github: true, leetcode: true, codeforces: true });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTick((x) => x + 1), 500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&display=swap";
    document.head.appendChild(link);
  }, []);

  // Matrix rain
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const resize = () => { canvas.width = canvas.parentElement.offsetWidth; canvas.height = canvas.parentElement.offsetHeight; };
    resize();
    const chars = "01アイウ<>{}[]#@$%";
    const fs = 12;
    let drops = [];
    const resetDrops = () => { drops = Array(Math.floor(canvas.width / fs)).fill(1); };
    resetDrops();
    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fs}px monospace`;
      drops.forEach((y, i) => {
        const bright = Math.random() > 0.95;
        ctx.fillStyle = bright ? "#aaffaa" : i % 4 === 0 ? "#00ff41" : "#002200";
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fs, y * fs);
        if (y * fs > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };
    const id = setInterval(draw, 55);
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);
    return () => { clearInterval(id); ro.disconnect(); };
  }, []);

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

    fetchWithProxy(`https://alfa-leetcode-api.onrender.com/${LEETCODE_USER}/solved`)
      .then((r) => r.json())
      .then((d) => setLeetcode(d))
      .catch(() => setLeetcode({ error: true }))
      .finally(() => setLoadingStates((s) => ({ ...s, leetcode: false })));

    fetchWithProxy(`https://codeforces.com/api/user.info?handles=${CF_USER}`)
      .then((r) => r.json())
      .then((d) => { if (d.status === "OK") setCodeforces(d.result[0]); })
      .catch(() => setCodeforces({ error: true }))
      .finally(() => setLoadingStates((s) => ({ ...s, codeforces: false })));
  }, []);

  const cursor = tick % 2 === 0 ? "█" : " ";
  const mono = { fontFamily: "'Fira Code', monospace" };

  const StatRow = ({ label, value, color = "#00ff88", sub }) => (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "6px 0", borderBottom: "1px solid rgba(0,255,65,0.06)",
      ...mono, fontSize: 12.5,
    }}>
      <span style={{ color: "#3a7755" }}>
        <span style={{ color: "#1a4433", marginRight: 6 }}>›</span>{label}
      </span>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 1 }}>
        <span style={{ color, fontWeight: 700, textShadow: `0 0 8px ${color}66`, letterSpacing: 1 }}>
          {value ?? <span style={{ color: "#333" }}>—</span>}
        </span>
        {sub && <span style={{ color: "#2a4433", fontSize: 10 }}>{sub}</span>}
      </div>
    </div>
  );

  const platforms = {
    github:     { color: "#39ff14", shadow: "#39ff1422", glow: "#39ff1444" },
    leetcode:   { color: "#ffa500", shadow: "#ffa50018", glow: "#ffa50033" },
    codeforces: { color: "#00d4ff", shadow: "#00d4ff18", glow: "#00d4ff33" },
  };

  const Card = ({ platform, title, username, children }) => {
    const { color, shadow, glow } = platforms[platform];
    const isLoading = loadingStates[platform];
    const icons = { github: "⬡", leetcode: "◈", codeforces: "◉" };
    const [hovered, setHovered] = useState(false);

    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "rgba(0,4,0,0.85)",
          border: `1px solid ${hovered ? color + "88" : color + "44"}`,
          borderRadius: 10,
          padding: "20px 24px 16px",
          position: "relative",
          boxShadow: hovered
            ? `0 0 60px ${glow}, 0 8px 40px rgba(0,0,0,0.6), inset 0 0 40px rgba(0,0,0,0.4)`
            : `0 0 24px ${shadow}, 0 4px 24px rgba(0,0,0,0.5), inset 0 0 30px rgba(0,0,0,0.5)`,
          backdropFilter: "blur(16px)",
          overflow: "hidden",
          transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
          transform: hovered ? "translateY(-3px)" : "none",
        }}
      >
        {/* Corner brackets */}
        {[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([v,h]) => (
          <div key={`${v}${h}`} style={{
            position: "absolute", [v]: 8, [h]: 8, width: 12, height: 12,
            borderTop: v === "top" ? `2px solid ${color}` : "none",
            borderBottom: v === "bottom" ? `2px solid ${color}` : "none",
            borderLeft: h === "left" ? `2px solid ${color}` : "none",
            borderRight: h === "right" ? `2px solid ${color}` : "none",
            opacity: hovered ? 1 : 0.5,
            transition: "opacity 0.3s",
          }} />
        ))}

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, paddingBottom: 12, borderBottom: `1px solid ${color}22` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color, fontSize: 22, textShadow: `0 0 14px ${color}` }}>{icons[platform]}</span>
            <span style={{ color, ...mono, fontWeight: 700, fontSize: 14, letterSpacing: 4, textShadow: `0 0 14px ${color}88` }}>
              {title}
            </span>
          </div>
          <a
            href={`https://${platform === "codeforces" ? "codeforces.com/profile/" + username : platform === "github" ? "github.com/" + username : "leetcode.com/u/" + username}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1d5533", ...mono, fontSize: 11, letterSpacing: 1, textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => { e.target.style.color = color; }}
            onMouseLeave={(e) => { e.target.style.color = "#1d5533"; }}
          >
            @{username} ↗
          </a>
        </div>

        {/* Content */}
        {isLoading ? (
          <div style={{ padding: "28px 0", textAlign: "center", ...mono, color, fontSize: 12, textShadow: `0 0 10px ${color}`, letterSpacing: 2 }}>
            FETCHING DATA{cursor}
          </div>
        ) : (
          <div style={{ minHeight: 140 }}>{children}</div>
        )}

        {/* Status */}
        <div style={{ marginTop: 14, paddingTop: 8, borderTop: `1px solid ${color}11`, display: "flex", justifyContent: "space-between", ...mono, fontSize: 10, color: "#1a3322" }}>
          <span style={{ color: isLoading ? "#ff4444" : "#00cc33" }}>
            ● {isLoading ? "FETCHING…" : "LIVE"}
          </span>
          <span>SYNC {new Date().getHours()}:{String(new Date().getMinutes()).padStart(2,"0")} UTC</span>
        </div>
      </div>
    );
  };

  return (
    <div style={{ background: "#010301", position: "relative", overflow: "hidden", paddingBottom: "2rem" }}>
      {/* Matrix canvas */}
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.22, zIndex: 0, pointerEvents: "none" }} />

      {/* Scanlines */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, backgroundImage: "repeating-linear-gradient(0deg,rgba(0,0,0,0.1) 0px,rgba(0,0,0,0.1) 1px,transparent 1px,transparent 3px)" }} />

      {/* Vignette */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.8) 100%)" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto", padding: "60px 24px 72px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "#0a2a14", letterSpacing: 6, marginBottom: 8, textTransform: "uppercase" }}>
            ══════════════ SYSTEM BOOT SEQUENCE ══════════════
          </div>
          <h2 style={{ fontFamily: "'Fira Code', monospace", fontSize: "clamp(26px, 5vw, 50px)", fontWeight: 900, color: "#00ff41", letterSpacing: 8, margin: "0 0 12px", textShadow: "0 0 24px #00ff41, 0 0 50px #00ff4166" }}>
            CODING STATS
          </h2>
          <div style={{ fontFamily: "'Fira Code', monospace", color: "#1a5530", fontSize: 12, letterSpacing: 4 }}>
            SURAJ KUMAR · COMPETITIVE PROGRAMMER
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 14, background: "rgba(0,255,65,0.03)", border: "1px solid #0a2a16", borderRadius: 4, padding: "8px 20px", fontFamily: "monospace", color: "#0d3a1a", fontSize: 10, letterSpacing: 2 }}>
            <span style={{ color: "#00cc44" }}>●</span>
            3 MODULES ACTIVE · DATA SYNC ENABLED {cursor}
          </div>
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>

          {/* GITHUB */}
          <Card platform="github" title="GITHUB" username={GITHUB_USER}>
            {github && !github.error ? (<>
              <StatRow label="PUBLIC_REPOS"      value={github.public_repos}  color="#39ff14" />
              <StatRow label="FOLLOWERS"         value={github.followers}     color="#39ff14" />
              <StatRow label="FOLLOWING"         value={github.following} />
              <StatRow label="TOTAL_STARS"       value={github.totalStars}    color="#ffff44" />
              <StatRow label="PUBLIC_GISTS"      value={github.public_gists} />
              {github.location && <StatRow label="LOCATION" value={github.location} />}
            </>) : !loadingStates.github && (
              <div style={{ color: "#ff8844", fontFamily: "monospace", fontSize: 12, padding: "16px 0" }}>⚠ API UNAVAILABLE</div>
            )}
          </Card>

          {/* LEETCODE */}
          <Card platform="leetcode" title="LEETCODE" username={LEETCODE_USER}>
            {leetcode && !leetcode.error ? (<>
              <StatRow label="TOTAL_SOLVED" value={leetcode.solvedProblem ?? leetcode.totalSolved} color="#ffa500" />
              <StatRow label="EASY"         value={leetcode.easySolved}   color="#44ff88" />
              <StatRow label="MEDIUM"       value={leetcode.mediumSolved} color="#ffcc00" />
              <StatRow label="HARD"         value={leetcode.hardSolved}   color="#ff4444" />
              {leetcode.ranking && (
                <StatRow label="GLOBAL_RANK" value={`#${leetcode.ranking.toLocaleString()}`} color="#ff8800" />
              )}
              {leetcode.contributionPoint !== undefined && (
                <StatRow label="CONTRIBUTION" value={leetcode.contributionPoint} />
              )}
            </>) : !loadingStates.leetcode && (
              <div style={{ color: "#ff8844", fontFamily: "monospace", fontSize: 12, padding: "16px 0" }}>⚠ API UNAVAILABLE</div>
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
              <StatRow label="RANK"     value={codeforces.rank?.toUpperCase()}    color="#39ff1466" />
              <StatRow label="MAX_RANK" value={codeforces.maxRank?.toUpperCase()} />
              {codeforces.organization && <StatRow label="ORGANIZATION" value={codeforces.organization} />}
            </>) : !loadingStates.codeforces && (
              <div style={{ color: "#00ffc3aa", fontFamily: "monospace", fontSize: 12, padding: "16px 0" }}>⚠ API UNAVAILABLE</div>
            )}
          </Card>

        </div>

        {/* Footer */}
        <div style={{ marginTop: 56, textAlign: "center", fontFamily: "monospace", fontSize: 10, letterSpacing: 3 }}>
          <div style={{ color: "#071a0d" }}>═══════════════════════════════════════════════════════</div>
          <div style={{ color: "#112a18", marginTop: 8 }}>
            ALL SYSTEMS NOMINAL · {new Date().getFullYear()} {cursor}
          </div>
          <div style={{ color: "#0a1e10", marginTop: 3 }}>POWERED BY GITHUB · LEETCODE · CODEFORCES APIS</div>
        </div>
      </div>
    </div>
  );
}