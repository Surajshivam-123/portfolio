import { useState, useEffect, useCallback } from "react";
import { FileText, ArrowUpRight, Quote, Github, Lock } from "lucide-react";
import Profile from "./Profile.jsx";
import TechnicalSkills from "./TechnicalSkills.jsx";
import Experience from "./Experience.jsx";
import Footer from "./Footer.jsx";
import Logo from "./Logo.jsx";
import { Tilt } from "./use3DTilt.jsx";
import useInView from "./useInView.js";

const projects = [
  {
    id: "01",
    title: "Campus-Sphere",
    tagline: "Full-Stack Event & Campus Management Ecosystem",
    description:
      "A centralized full-stack campus management platform built to streamline college sports, technical hackathons, and cultural fests with real-time coordination and granular role-segregated governance.",
    highlights: [
      {
        label: "Real-time Event Stream",
        outcome: "WebSocket pipeline delivering sub-50ms latency for live match scoring, attendee check-in telemetry, and concurrent announcement broadcasts.",
      },
      {
        label: "Role-Based Access Control",
        outcome: "Dual-tier cryptographic token architecture isolating organizer controls from 1,000+ student attendees with zero privilege leak.",
      },
      {
        label: "High-Throughput Caching",
        outcome: "Redis in-memory caching tier combined with indexed MongoDB queries, cutting registration query latency by 42%.",
      },
    ],
    tech: ["React", "Node.js", "MongoDB", "Redis", "WebSocket", "Google Auth"],
    link: "https://campus-sphere-liard.vercel.app/",
    github: "https://github.com/Surajshivam-123",
    image: "campus_sphere_front_page.png"
  },
];

const FALLBACK_THOUGHTS = [
  { quote: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" },
  { quote: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { quote: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { quote: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { quote: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { quote: "Sometimes it is the people no one imagines anything of who do the things that no one can imagine.", author: "Alan Turing" },
  { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { quote: "Waste no more time arguing what a good man should be. Be one.", author: "Marcus Aurelius" },
  { quote: "Stay hungry, stay foolish.", author: "Whole Earth Catalog" },
  { quote: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { quote: "The most disastrous thing that you can ever learn is your first programming language.", author: "Alan Kay" }
];

function ThoughtCallout() {
  const [thought, setThought] = useState(() => {
    const randomIndex = Math.floor(Math.random() * FALLBACK_THOUGHTS.length);
    return FALLBACK_THOUGHTS[randomIndex];
  });
  const [fade, setFade] = useState(true);

  const fetchThought = useCallback(async () => {
    try {
      const res = await fetch("https://dummyjson.com/quotes/random");
      if (!res.ok) throw new Error("Failed to fetch thought");
      const data = await res.json();
      if (data && data.quote && data.author) {
        setFade(false);
        setTimeout(() => {
          setThought({ quote: data.quote, author: data.author });
          setFade(true);
        }, 150);
        return;
      }
      throw new Error("Invalid quote payload");
    } catch {
      setFade(false);
      setTimeout(() => {
        setThought((prev) => {
          const remaining = FALLBACK_THOUGHTS.filter((t) => t.quote !== prev.quote);
          return remaining[Math.floor(Math.random() * remaining.length)] || FALLBACK_THOUGHTS[0];
        });
        setFade(true);
      }, 150);
    }
  }, []);

  useEffect(() => {
    fetchThought();
  }, [fetchThought]);

  return (
    <section id="thought" className="w-full py-8 sm:py-10 px-4 sm:px-6 relative z-10 flex flex-col items-center justify-center">
      <div className="relative w-full max-w-3xl mx-auto backdrop-blur-md py-9 px-8 sm:px-14 text-center shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(0,229,255,0.06)] transition-all duration-300">
        {/* Top Centered Quote Icon breaking the border symmetrically */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0d1117] px-3 flex items-center justify-center">
          <Quote size={18} className="text-cyan-400" />
        </div>

        {/* Thought & Author Typography */}
        <div
          className={`transition-all duration-200 ${
            fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
          }`}
        >
          <p className="font-mono text-base sm:text-lg md:text-xl font-medium tracking-wide text-slate-100 leading-relaxed">
            "{thought.quote}"
          </p>
          {thought.author && (
            <cite className="block mt-4 text-sm sm:text-base font-mono font-medium text-amber-400 tracking-wider not-italic">
              — {thought.author}
            </cite>
          )}
        </div>
      </div>
    </section>
  );
}

const getAssetUrl = (filename) => {
  if (!filename) return "";
  if (filename.startsWith("http://") || filename.startsWith("https://")) return filename;
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  const cleanFile = filename.startsWith("/") ? filename.slice(1) : filename;
  return `${cleanBase}${cleanFile}`;
};

function FeaturedProjectCard({ project }) {
  const [imgSrc, setImgSrc] = useState(() => getAssetUrl(project.image));

  return (
    <div className="relative group w-full">
      {/* Subtle ambient gradient glow backdrop */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-amber-500/15 opacity-30 blur-xl group-hover:opacity-60 transition duration-700 pointer-events-none" />

      {/* Main Card Container */}
      <div className="relative bg-[#0e131f] border border-slate-700/60 rounded-2xl p-8 sm:p-12 overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-cyan-500/40">
        {/* Subtle internal radial glows */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* 2-Column Responsive Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Project Details (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Header Block */}
            <div className="space-y-3">
              {/* Heading */}
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
                {project.title}
              </h3>

              {/* Tagline / Subtitle */}
              {project.tagline && (
                <p className="font-mono text-sm sm:text-base font-semibold text-cyan-400 tracking-wide">
                  {project.tagline}
                </p>
              )}

              {/* One-liner Overview */}
              {project.description && (
                <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                  {project.description}
                </p>
              )}
            </div>

            {/* Bullet Points (Refined Architectural Highlights) */}
            {project.highlights && project.highlights.length > 0 && (
              <ul className="space-y-3 leading-relaxed list-none p-0 m-0">
                {project.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-3">
                    {/* Glowing diamond accent indicator */}
                    <span className="h-1.5 w-1.5 rounded-[1px] rotate-45 bg-cyan-400 shadow-[0_0_8px_rgba(0,229,255,0.7)] mt-2 shrink-0 inline-block" />
                    <p className="text-xs sm:text-sm leading-relaxed m-0">
                      <strong className="text-slate-100 font-semibold">{h.label}:</strong>{" "}
                      <span className="text-slate-400">{h.outcome}</span>
                    </p>
                  </li>
                ))}
              </ul>
            )}

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-slate-800/50 border border-slate-700/60 text-slate-300 text-xs px-2.5 py-1 rounded-md font-mono"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3.5 pt-4 flex-wrap">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 px-4 py-2 rounded-lg text-sm transition-all shadow-md shadow-cyan-500/20 inline-flex items-center gap-2"
                >
                  Live Demo
                  <ArrowUpRight size={15} />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-700 bg-slate-800/40 text-slate-200 hover:bg-slate-800 px-4 py-2 rounded-lg text-sm transition-all inline-flex items-center gap-2"
                >
                  <Github size={15} />
                  Source Code
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Visual Preview & Browser Mockup (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="w-full group/mockup relative rounded-xl overflow-hidden border border-slate-700/60 bg-[#090d16] shadow-2xl shadow-black/80 hover:border-cyan-500/40 transition-all duration-500">
              {/* Compact Browser Window Header */}
              <div className="flex items-center justify-between px-3.5 py-2 bg-[#0d121f] border-b border-slate-800/90 select-none shrink-0">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block" />
                </div>
                {/* Clean centered URL bar */}
                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-[#070a12] border border-slate-800 text-[11px] font-mono text-slate-400">
                  <Lock size={10} className="text-cyan-400 shrink-0" />
                  <span className="tracking-tight">campus-sphere.vercel.app</span>
                </div>
                {/* Subtle right balance indicator */}
                <div className="w-8 flex justify-end">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>

              {/* Edge-to-edge Mockup Image with subtle inner shadow / top-edge glow */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block overflow-hidden bg-[#0a0f1d] group-hover/mockup:cursor-pointer shadow-[inset_0_1px_2px_rgba(255,255,255,0.06),inset_0_-2px_12px_rgba(0,0,0,0.5)]"
              >
                <img
                  src={imgSrc}
                  alt={`${project.title} Preview`}
                  onError={() => {
                    if (imgSrc.startsWith("/portfolio/")) {
                      setImgSrc("/" + project.image.replace(/^\//, ""));
                    }
                  }}
                  className="w-full h-auto object-cover object-center transition-transform duration-700 ease-out group-hover/mockup:scale-[1.03]"
                  loading="lazy"
                />

                {/* Subtle top-edge and inner glow */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_0_20px_rgba(0,0,0,0.3)]" />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/mockup:opacity-100 transition-all duration-300 bg-slate-950/40 backdrop-blur-[2px]">
                  <span className="px-4 py-2 rounded-lg bg-slate-900/95 text-cyan-300 border border-cyan-500/40 font-mono text-xs font-semibold flex items-center gap-2 shadow-lg shadow-cyan-950/40 transform translate-y-2 group-hover/mockup:translate-y-0 transition-transform">
                    Explore Platform
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash);
        if (el) el.scrollIntoView();
      }, 50);
    }
  }, []);

  const navTo = (id) => {
    setMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#profile", label: "Profile" },
  ];

  const [heroRef, heroInView] = useInView(0.08);
  const [projectsRef, projectsInView] = useInView(0.08);

  return (
    <>
      <div className="mesh-bg" />

      {/* NAV */}
      <nav className={scrolled ? "scrolled" : ""}>
        <Logo
          size="sm"
          withName={true}
          onClick={() => navTo("#hero")}
        />
        <ul className="nav-links">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={(e) => { e.preventDefault(); navTo(href); }}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-nav">
          {navItems.map(({ href, label }) => (
            <a key={href} href={href} onClick={(e) => { e.preventDefault(); navTo(href); }}>
              {label}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="hero" ref={heroRef} className="hero-section">
        {/* Top corner GitHub and LinkedIn icons */}
        <div className="hero-corner-socials">
          <a
            href="https://github.com/Surajshivam-123"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-btn"
            title="GitHub"
            aria-label="GitHub Profile"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/suraj-kumar-79522b324"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-btn"
            title="LinkedIn"
            aria-label="LinkedIn Profile"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>

        <div className={`hero${heroInView ? " section-visible" : ""}`}>
          <div className="hero-inner">
            <h1 className="hero-title">
              <span className="hero-prefix">Meet</span>
              <span className="hero-name-cursive line-accent font-cursive inline-block cursor-pointer">
                Suraj Kumar.
              </span>
            </h1>
            <p className="hero-sub">
              He is a Third-year student at <strong>Indian Institute of Information Technology Pune</strong>.
              With a sharp focus on backend systems and real-time applications,
              he excels at building scalable, high-performance products.
              He has a strong track record in <strong>competitive programming</strong> and highly active in <strong>open source contribution</strong>.
              Passionate about innovation, Suraj is continuously pushing boundaries in the tech world.
            </p>
            <div className="hero-claude-tag">
              - Claude                
            </div>
            <div className="hero-ctas">
              <a
                href="/portfolio/Suraj_Kumar_SDE_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FileText size={16} />
                View Resume
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
            <div className="hero-image-wrapper">
              {!imgError ? (
                <img
                  src="/portfolio/profile.png"
                  alt="Suraj Kumar"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="photo-placeholder">
                  <div className="photo-placeholder-avatar">SK</div>
                  <span className="photo-placeholder-label">Suraj Kumar</span>
                  <span className="photo-placeholder-sub">Photo Placeholder</span>
                </div>
              )}
            </div>
          </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>
      {/* Thought / Quote Callout */}
      <ThoughtCallout />
      <div className="section-divider" />

      {/* PROJECTS */}
      <section id="projects" ref={projectsRef} className="projects-section relative z-10">
        <div className={`section-wrapper${projectsInView ? " section-visible" : ""}`}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label inline-block">Featured Work</div>
            <h2 className="section-title">My Projects<span className="text-cyan-400">.</span></h2>
            <p className="font-mono text-sm sm:text-base text-slate-400 max-w-xl mx-auto mt-3">
              Architected full-stack platforms and software engineering systems built for scale and real-world impact.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-12">
            {projects.map((p) => (
              <FeaturedProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* WORK EXPERIENCE & OPEN SOURCE */}
      <Experience />

      <div className="section-divider" />

      {/* TECHNICAL SKILLS */}
      <TechnicalSkills />

      <div className="section-divider" />

      {/* PROFILE */}
      <section id="profile" className="relative bg-transparent overflow-hidden">
        <div className="relative z-10">
          <Profile />
        </div>
      </section>

      {/* MODERN FOOTER */}
      <Footer />
    </>
  );
}