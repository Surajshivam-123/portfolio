import React, { useState, useMemo } from "react";
import { Cpu, Search, Code2, Globe, Database } from "lucide-react";
import {
  CppIcon, PythonIcon, CIcon, JavaScriptIcon, TypeScriptIcon, SQLIcon, AssemblyIcon,
  ReactIcon, NextIcon, NodeIcon, ExpressIcon, WebSocketIcon, TailwindIcon,
  MongoDBIcon, RedisIcon, MySQLIcon, Neo4jIcon, DockerIcon, LinuxIcon,
  TensorFlowIcon, KerasIcon, PandasIcon, NumPyIcon, StreamlitIcon, CNNIcon
} from "./TechIcons.jsx";
import { Tilt } from "../use3DTilt.jsx";

const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    icon: <Code2 size={16} />,
    color: "from-blue-500 to-cyan-500",
    borderGlow: "rgba(6, 182, 212, 0.3)",
    skills: [
      { name: "C++", level: 95, exp: "Advanced / STL & DSA", icon: <CppIcon size={20} />, tags: ["Algorithms", "High Performance"] },
      { name: "Python", level: 90, exp: "Data Science & AI", icon: <PythonIcon size={20} />, tags: ["Scripting", "Machine Learning"] },
      { name: "C", level: 85, exp: "Low-Level & Memory", icon: <CIcon size={20} />, tags: ["Systems", "Pointers"] },
      { name: "JavaScript", level: 92, exp: "ES6+ & Async", icon: <JavaScriptIcon size={20} />, tags: ["Web", "Full Stack"] },
      { name: "TypeScript", level: 88, exp: "Strict Typing & Generics", icon: <TypeScriptIcon size={20} />, tags: ["Scalable Frontend"] },
      { name: "SQL", level: 88, exp: "Complex Joins & Indexes", icon: <SQLIcon size={20} />, tags: ["Relational DBMS"] },
      { name: "Assembly", level: 75, exp: "x86 / Microprocessors", icon: <AssemblyIcon size={20} />, tags: ["Hardware Interfacing"] },
    ]
  },
  {
    id: "web",
    title: "Web & Frameworks",
    icon: <Globe size={16} />,
    color: "from-indigo-500 to-purple-500",
    borderGlow: "rgba(99, 102, 241, 0.3)",
    skills: [
      { name: "React.js", level: 94, exp: "Hooks, Context, Performance", icon: <ReactIcon size={20} />, tags: ["Component Architecture"] },
      { name: "Next.js", level: 88, exp: "App Router & SSR", icon: <NextIcon size={20} />, tags: ["Production Web"] },
      { name: "Node.js", level: 90, exp: "Event Loop & Streams", icon: <NodeIcon size={20} />, tags: ["Backend Architecture"] },
      { name: "Express.js", level: 90, exp: "Middleware & Routing", icon: <ExpressIcon size={20} />, tags: ["Microservices"] },
      { name: "RESTful APIs", level: 95, exp: "API Design & Architecture", icon: <Code2 size={20} className="text-cyan-400" />, tags: ["Endpoint Security"] },
      { name: "WebSockets", level: 88, exp: "Bidirectional Real-Time", icon: <WebSocketIcon size={20} />, tags: ["Pub/Sub State"] },
      { name: "Tailwind CSS", level: 94, exp: "Modern Responsive UI", icon: <TailwindIcon size={20} />, tags: ["Design Systems"] },
    ]
  },
  {
    id: "databases",
    title: "Databases & Systems",
    icon: <Database size={16} />,
    color: "from-emerald-500 to-teal-500",
    borderGlow: "rgba(16, 185, 129, 0.3)",
    skills: [
      { name: "MongoDB", level: 90, exp: "Aggregation & Schema Design", icon: <MongoDBIcon size={20} />, tags: ["NoSQL Documents"] },
      { name: "Redis", level: 88, exp: "Pub/Sub, Caching & Queues", icon: <RedisIcon size={20} />, tags: ["In-Memory Data"] },
      { name: "MySQL", level: 86, exp: "ACID Transactions & Triggers", icon: <MySQLIcon size={20} />, tags: ["Relational Database"] },
      { name: "Neo4j AuraDB", level: 88, exp: "Graph Modeling & Cypher", icon: <Neo4jIcon size={20} />, tags: ["Graph Database Engine"] },
      { name: "Docker", level: 82, exp: "Containerization & Compose", icon: <DockerIcon size={20} />, tags: ["DevOps & Deployment"] },
      { name: "Linux / Ubuntu", level: 88, exp: "Bash Scripting & Systems", icon: <LinuxIcon size={20} />, tags: ["Server Administration"] },
    ]
  },
  {
    id: "ai",
    title: "AI / Machine Learning",
    icon: <Cpu size={16} />,
    color: "from-purple-500 to-pink-500",
    borderGlow: "rgba(168, 85, 247, 0.3)",
    skills: [
      { name: "TensorFlow", level: 85, exp: "Model Building & Tuning", icon: <TensorFlowIcon size={20} />, tags: ["Deep Learning"] },
      { name: "Keras", level: 86, exp: "Neural Network Layers", icon: <KerasIcon size={20} />, tags: ["High-Level ML"] },
      { name: "Pandas", level: 90, exp: "Data Wrangling & Analysis", icon: <PandasIcon size={20} />, tags: ["Tabular Pipeline"] },
      { name: "NumPy", level: 92, exp: "Vectorized Operations", icon: <NumPyIcon size={20} />, tags: ["Linear Algebra"] },
      { name: "Deep Learning (CNN)", level: 85, exp: "Computer Vision & Convolutions", icon: <CNNIcon size={20} />, tags: ["Feature Extraction"] },
      { name: "Streamlit", level: 88, exp: "Rapid ML Dashboards", icon: <StreamlitIcon size={20} />, tags: ["AI Deployment"] },
    ]
  }
];

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    return skillCategories
      .filter((cat) => activeCategory === "all" || cat.id === activeCategory)
      .map((cat) => ({
        ...cat,
        skills: cat.skills.filter(
          (s) =>
            s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.exp.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      }))
      .filter((cat) => cat.skills.length > 0);
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 relative z-10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
              <Cpu size={13} />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Skills &amp; <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Expertise.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            Interactive matrix of languages, distributed frameworks, graph and relational databases, and deep learning libraries.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-[#0e1017]/80 border border-white/10 backdrop-blur-md mb-10 shadow-lg">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition cursor-pointer ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              All Domains
            </button>

            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-md"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.icon}
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Filter technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs font-mono bg-black/40 border border-white/10 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="space-y-10">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="space-y-4">
              
              {/* Category Subhead */}
              <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                <div className={`p-1.5 rounded-lg bg-gradient-to-r ${cat.color} text-white`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-white text-base tracking-tight">{cat.title}</h3>
                <span className="text-xs font-mono text-gray-500 ml-auto">{cat.skills.length} competencies</span>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {cat.skills.map((skill) => (
                  <Tilt
                    key={skill.name}
                    className="p-4 rounded-2xl bg-[#0e1017]/85 border border-white/10 hover:border-white/20 backdrop-blur-md transition-all group flex flex-col justify-between shadow-md hover:shadow-xl"
                  >
                    <div>
                      {/* Top icon and name */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform">
                            {skill.icon}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white">{skill.name}</h4>
                            <span className="text-[11px] font-mono text-gray-400 block">{skill.exp}</span>
                          </div>
                        </div>
                        <span className="font-mono text-xs font-bold text-cyan-400">{skill.level}%</span>
                      </div>

                      {/* Level Bar */}
                      <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden mb-3">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1 mt-1">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-gray-400 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Tilt>
                ))}
              </div>

            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-16 text-gray-500 font-mono text-sm">
              No matching technologies found for "{searchQuery}".
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
