import React, { useState } from "react";
import { ExternalLink, Github, Layers, Zap, Shield, Cpu, Activity, ArrowUpRight, Play, Users, MessageSquare, Route, Check, Navigation, Send } from "lucide-react";

export default function FeaturedProjects() {
  // Campus-Sphere WebSocket Interactive State
  const [csScore, setCsScore] = useState({ home: 38, away: 32 });
  const [csClients, setCsClients] = useState(1420);
  const [csLogs, setCsLogs] = useState([
    { time: "17:34:02", msg: "EVENT_MATCH_SCORE_UPDATE -> broadcast to 1,420 sockets", lat: "0.4ms" },
    { time: "17:34:10", msg: "REDIS_PUBSUB_SYNC: state propagated across 4 clusters", lat: "0.6ms" }
  ]);
  const [csAnnounce, setCsAnnounce] = useState("");

  // OptimRoute Interactive Transit Graph State
  const stationOptions = [
    { id: 104, name: "Pune Junction (Station 104)" },
    { id: 312, name: "Shivajinagar Metro (Station 312)" },
    { id: 780, name: "Hinjawadi Phase 1 (Station 780)" },
    { id: 1208, name: "Khadki Railway Hub (Station 1208)" },
    { id: 8150, name: "Airport Express Terminal (Station 8150)" }
  ];
  const [originStation, setOriginStation] = useState(104);
  const [destStation, setDestStation] = useState(8150);
  const [optCriteria, setOptCriteria] = useState("fastest");
  const [graphComputing, setGraphComputing] = useState(false);
  const [routeResult, setRouteResult] = useState({
    hops: ["Pune Junction (104)", "Shivajinagar Metro (312)", "Khadki Hub (1208)", "Airport Express (8150)"],
    duration: "24 mins",
    distance: "19.2 km",
    cost: "₹45",
    cypherTime: "12ms"
  });

  const handleScoreChange = (team, delta) => {
    const newScore = { ...csScore, [team]: Math.max(0, csScore[team] + delta) };
    setCsScore(newScore);
    setCsClients(prev => prev + Math.floor(Math.random() * 5 + 1));
    const newLat = (Math.random() * 0.4 + 0.3).toFixed(1) + "ms";
    const now = new Date();
    const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
    setCsLogs(prev => [
      { time: timeStr, msg: `WS_BROADCAST: Score updated [${newScore.home} - ${newScore.away}]`, lat: newLat },
      ...prev.slice(0, 3)
    ]);
  };

  const handleSendAnnounce = (e) => {
    e.preventDefault();
    if (!csAnnounce.trim()) return;
    setCsClients(prev => prev + 12);
    const now = new Date();
    const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
    setCsLogs(prev => [
      { time: timeStr, msg: `ORGANIZER_ANNOUNCE: "${csAnnounce}"`, lat: "0.3ms" },
      ...prev.slice(0, 3)
    ]);
    setCsAnnounce("");
  };

  const handleCalculateRoute = () => {
    setGraphComputing(true);
    setTimeout(() => {
      setGraphComputing(false);
      const startName = stationOptions.find(s => s.id === Number(originStation))?.name || "Station A";
      const endName = stationOptions.find(s => s.id === Number(destStation))?.name || "Station B";
      setRouteResult({
        hops: [startName, "Shivajinagar Intermodal (312)", "Dapodi Junction (520)", endName],
        duration: optCriteria === "fastest" ? "18 mins" : "26 mins",
        distance: "16.8 km",
        cost: optCriteria === "cheapest" ? "₹25" : "₹40",
        cypherTime: `${Math.floor(Math.random() * 8 + 8)}ms`
      });
    }, 500);
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers size={13} />
              <span>Interactive Architecture Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Engineering.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            Interactive live demonstrations of distributed WebSockets messaging and Neo4j graph pathfinding algorithms.
          </p>
        </div>

        {/* PROJECTS CONTAINER */}
        <div className="space-y-16">
          
          {/* PROJECT 1: CAMPUS-SPHERE */}
          <div className="rounded-3xl bg-[#0e1017]/90 border border-cyan-500/30 hover:border-cyan-400/60 backdrop-blur-xl p-6 sm:p-8 lg:p-10 transition-all shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Info */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-gray-500">01 //</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    Real-Time WebSockets • Redis Pub/Sub
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight">
                    Campus-Sphere
                  </h3>
                  <p className="text-base font-semibold text-gray-300 mt-1">
                    Full-stack campus event ecosystem with live scoreboarding &amp; sub-millisecond messaging.
                  </p>
                </div>

                {/* Key feature pills */}
                <div className="grid grid-cols-3 gap-2 py-1 text-center font-mono">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <Activity size={16} className="text-cyan-400 mx-auto mb-1" />
                    <span className="text-[10px] text-gray-400 block">Latency</span>
                    <span className="text-xs font-bold text-cyan-300">&lt; 1 ms</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <Zap size={16} className="text-amber-400 mx-auto mb-1" />
                    <span className="text-[10px] text-gray-400 block">Message Bus</span>
                    <span className="text-xs font-bold text-amber-300">Redis Pub/Sub</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <Shield size={16} className="text-emerald-400 mx-auto mb-1" />
                    <span className="text-[10px] text-gray-400 block">Security</span>
                    <span className="text-xs font-bold text-emerald-300">OAuth 2.0 / OTP</span>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["React", "Node.js", "Express", "MongoDB", "Redis Pub/Sub", "WebSockets", "Tailwind CSS"].map(t => (
                    <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/5 text-gray-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <a
                    href="https://github.com/Surajshivam-123/Campus-Sphere"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold font-mono text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-2 transition"
                  >
                    <Github size={15} />
                    <span>Repository</span>
                    <ArrowUpRight size={13} className="text-gray-400" />
                  </a>

                  <a
                    href="https://campus-sphere-liard.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold font-mono text-black bg-gradient-to-r from-cyan-400 to-indigo-400 hover:opacity-95 shadow-md flex items-center gap-2 transition"
                  >
                    <ExternalLink size={15} />
                    <span>Live Vercel App</span>
                  </a>
                </div>
              </div>

              {/* Right Interactive WebSocket Scoreboard Console */}
              <div className="lg:col-span-6 rounded-2xl bg-[#090A0F] border border-white/10 p-5 shadow-2xl space-y-4">
                
                {/* Console Top Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-white">LIVE WEBSOCKET SIMULATOR</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <Users size={12} />
                    <span>{csClients.toLocaleString()} Listeners</span>
                  </div>
                </div>

                {/* Live Match Scoreboard */}
                <div className="p-4 rounded-xl bg-[#12131A] border border-cyan-500/20 text-center space-y-3">
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Basketball Championship Finals • Q4 Live
                  </div>

                  <div className="grid grid-cols-3 items-center gap-2">
                    {/* Home Team */}
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-cyan-300">IIIT PUNE</div>
                      <div className="text-3xl font-extrabold font-mono text-white bg-black/40 py-1 rounded-lg border border-white/5">
                        {csScore.home}
                      </div>
                      <div className="flex justify-center gap-1">
                        <button
                          onClick={() => handleScoreChange("home", 1)}
                          className="px-2 py-0.5 text-[10px] font-mono bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 rounded border border-cyan-500/30 cursor-pointer"
                        >
                          +1 pt
                        </button>
                        <button
                          onClick={() => handleScoreChange("home", 3)}
                          className="px-2 py-0.5 text-[10px] font-mono bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 rounded border border-cyan-500/30 cursor-pointer"
                        >
                          +3 pt
                        </button>
                      </div>
                    </div>

                    <div className="font-mono text-xs text-gray-500 font-bold">VS</div>

                    {/* Away Team */}
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-amber-300">COEP PUNE</div>
                      <div className="text-3xl font-extrabold font-mono text-white bg-black/40 py-1 rounded-lg border border-white/5">
                        {csScore.away}
                      </div>
                      <div className="flex justify-center gap-1">
                        <button
                          onClick={() => handleScoreChange("away", 1)}
                          className="px-2 py-0.5 text-[10px] font-mono bg-amber-500/20 hover:bg-amber-500/40 text-amber-300 rounded border border-amber-500/30 cursor-pointer"
                        >
                          +1 pt
                        </button>
                        <button
                          onClick={() => handleScoreChange("away", 3)}
                          className="px-2 py-0.5 text-[10px] font-mono bg-amber-500/20 hover:bg-amber-500/40 text-amber-300 rounded border border-amber-500/30 cursor-pointer"
                        >
                          +3 pt
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instant Broadcast Form */}
                <form onSubmit={handleSendAnnounce} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Broadcast test alert to all connected sockets..."
                    value={csAnnounce}
                    onChange={(e) => setCsAnnounce(e.target.value)}
                    className="flex-1 px-3 py-1.5 text-xs font-mono bg-black/40 border border-white/10 rounded-xl text-gray-200 placeholder-gray-600 focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold border border-cyan-500/40 flex items-center gap-1 cursor-pointer"
                  >
                    <Send size={12} />
                    <span>Push</span>
                  </button>
                </form>

                {/* Live Socket Logs */}
                <div className="p-3 rounded-xl bg-black/50 border border-white/5 font-mono text-[11px] space-y-1.5">
                  <div className="text-gray-500 text-[10px] uppercase">Live Channel Broadcast Feed:</div>
                  {csLogs.map((log, i) => (
                    <div key={i} className="flex justify-between items-start text-gray-300 gap-2">
                      <span className="text-cyan-400 truncate">&gt; [{log.time}] {log.msg}</span>
                      <span className="text-emerald-400 shrink-0 font-bold">{log.lat}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>


          {/* PROJECT 2: OPTIMROUTE */}
          <div className="rounded-3xl bg-[#0e1017]/90 border border-indigo-500/30 hover:border-indigo-400/60 backdrop-blur-xl p-6 sm:p-8 lg:p-10 transition-all shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Info */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-gray-500">02 //</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    Neo4j AuraDB • Graph Algorithms
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight">
                    OptimRoute
                  </h3>
                  <p className="text-base font-semibold text-gray-300 mt-1">
                    Graph-based transit routing engine modeling 8,150+ stations on Neo4j AuraDB.
                  </p>
                </div>

                {/* Key feature pills */}
                <div className="grid grid-cols-3 gap-2 py-1 text-center font-mono">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <Layers size={16} className="text-indigo-400 mx-auto mb-1" />
                    <span className="text-[10px] text-gray-400 block">Graph Nodes</span>
                    <span className="text-xs font-bold text-indigo-300">8,150+ Stations</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <Cpu size={16} className="text-purple-400 mx-auto mb-1" />
                    <span className="text-[10px] text-gray-400 block">Query Engine</span>
                    <span className="text-xs font-bold text-purple-300">Cypher Subqueries</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <Route size={16} className="text-emerald-400 mx-auto mb-1" />
                    <span className="text-[10px] text-gray-400 block">Optimization</span>
                    <span className="text-xs font-bold text-emerald-300">Multi-Hop Path</span>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Neo4j AuraDB", "Cypher", "Node.js", "Express.js", "TypeScript", "Graph Algorithms"].map(t => (
                    <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/5 text-gray-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <a
                    href="https://github.com/Surajshivam-123/OptimRoute"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold font-mono text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-2 transition"
                  >
                    <Github size={15} />
                    <span>Repository</span>
                    <ArrowUpRight size={13} className="text-gray-400" />
                  </a>

                  <a
                    href="https://github.com/Surajshivam-123/OptimRoute"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold font-mono text-black bg-gradient-to-r from-indigo-400 to-cyan-400 hover:opacity-95 shadow-md flex items-center gap-2 transition"
                  >
                    <ExternalLink size={15} />
                    <span>Explore Engine</span>
                  </a>
                </div>
              </div>

              {/* Right Interactive Neo4j Path Optimizer */}
              <div className="lg:col-span-6 rounded-2xl bg-[#090A0F] border border-white/10 p-5 shadow-2xl space-y-4">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-white">CYPHER GRAPH ROUTING RUNNER</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400">Neo4j AuraDB</span>
                </div>

                {/* Selector Inputs */}
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div>
                    <label className="text-[10px] text-gray-400 block mb-1">ORIGIN STATION:</label>
                    <select
                      value={originStation}
                      onChange={(e) => setOriginStation(Number(e.target.value))}
                      className="w-full p-2 rounded-lg bg-[#12131A] border border-white/10 text-gray-200 focus:outline-none focus:border-indigo-400"
                    >
                      {stationOptions.map(s => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-400 block mb-1">DESTINATION:</label>
                    <select
                      value={destStation}
                      onChange={(e) => setDestStation(Number(e.target.value))}
                      className="w-full p-2 rounded-lg bg-[#12131A] border border-white/10 text-gray-200 focus:outline-none focus:border-indigo-400"
                    >
                      {stationOptions.map(s => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Optimization mode */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex gap-1.5 font-mono text-[11px]">
                    {["fastest", "cheapest"].map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setOptCriteria(mode)}
                        className={`px-2.5 py-1 rounded-md capitalize cursor-pointer ${
                          optCriteria === mode
                            ? "bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/40"
                            : "bg-white/5 text-gray-400 hover:text-white"
                        }`}
                      >
                        {mode} Path
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleCalculateRoute}
                    disabled={graphComputing}
                    className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-mono text-xs font-bold shadow flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <Play size={12} className={graphComputing ? "animate-spin" : ""} />
                    <span>{graphComputing ? "Evaluating Graph..." : "Run Pathfinding"}</span>
                  </button>
                </div>

                {/* Computed Path Display */}
                <div className="p-3.5 rounded-xl bg-[#12131A] border border-indigo-500/20 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-gray-400">Multi-Hop Evaluated Transit Nodes:</span>
                    <span className="text-emerald-400 font-bold">{routeResult.cypherTime} Query Latency</span>
                  </div>

                  <div className="space-y-1.5 font-mono text-xs text-gray-200">
                    {routeResult.hops.map((hop, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[9px] font-bold">
                          {i + 1}
                        </span>
                        <span className="truncate">{hop}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5 text-center font-mono">
                    <div className="p-1.5 rounded bg-white/5">
                      <span className="text-[9px] text-gray-400 block">Distance</span>
                      <span className="text-xs font-bold text-cyan-300">{routeResult.distance}</span>
                    </div>
                    <div className="p-1.5 rounded bg-white/5">
                      <span className="text-[9px] text-gray-400 block">Estimated Time</span>
                      <span className="text-xs font-bold text-amber-300">{routeResult.duration}</span>
                    </div>
                    <div className="p-1.5 rounded bg-white/5">
                      <span className="text-[9px] text-gray-400 block">Transit Cost</span>
                      <span className="text-xs font-bold text-emerald-300">{routeResult.cost}</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
