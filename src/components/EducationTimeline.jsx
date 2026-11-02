import React, { useState } from "react";
import { GraduationCap, Calendar, Award, BookOpen, ChevronRight, CheckCircle2, Sparkles, MapPin } from "lucide-react";
import { Tilt } from "../use3DTilt.jsx";

export default function EducationTimeline() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const timeline = [
    {
      period: "2024 — 2028",
      degree: "B.Tech in Electronics & Communication Engineering",
      institution: "Indian Institute of Information Technology (IIIT) Pune",
      location: "Pune, Maharashtra, India",
      grade: "9.07 CGPA",
      status: "Currently Enrolled • 2nd Year",
      details:
        "Rigorous core curriculum in hardware-software co-design, distributed systems, embedded architectures, high-performance computing, and discrete mathematics.",
      color: "from-cyan-400 to-blue-500",
      glow: "rgba(6, 182, 212, 0.2)"
    },
    {
      period: "2026 — 2027",
      degree: "Honours in Artificial Intelligence",
      institution: "IIIT Pune — Department of Computer Science & Engineering",
      location: "Pune, Maharashtra, India",
      grade: "Honours Track",
      status: "Advanced Specialization",
      details:
        "Specialized honours track focusing on Deep Learning Architectures, Computer Vision, Neural Network Optimization, Reinforcement Learning, and Applied Machine Learning at Scale.",
      color: "from-indigo-400 to-purple-500",
      glow: "rgba(99, 102, 241, 0.2)"
    }
  ];

  const coursework = [
    {
      name: "Data Structures & Algorithms",
      category: "Computer Science Core",
      desc: "Advanced trees, graphs, dynamic programming, divide-and-conquer, greedy heuristics, asymptotic analysis, and spatial data structures.",
      skills: ["Graph Theory", "DP", "Trees", "C++ STL"]
    },
    {
      name: "Database Management Systems (DBMS)",
      category: "Systems & Data",
      desc: "Relational schema design, normalization (1NF-BCNF), B+ Trees indexation, ACID transaction isolation, and graph query engines (Neo4j / SQL).",
      skills: ["SQL", "Neo4j", "MongoDB", "Transactions"]
    },
    {
      name: "Operating Systems",
      category: "Systems Core",
      desc: "Process synchronization, semaphores, virtual memory paging, CPU scheduling algorithms, file system semantics, and Linux kernel internals.",
      skills: ["Multithreading", "Memory Paging", "IPC", "POSIX"]
    },
    {
      name: "Object-Oriented Programming (OOP)",
      category: "Software Engineering",
      desc: "Polymorphism, inheritance hierarchies, design patterns, encapsulation, abstract data types, and modular code architecture in C++ & TypeScript.",
      skills: ["Design Patterns", "C++", "Architecture"]
    },
    {
      name: "Computer Vision",
      category: "Artificial Intelligence",
      desc: "Image convolutions, edge detection filters, feature representation, CNN backbones, image classification, and object localization models.",
      skills: ["CNNs", "TensorFlow", "Feature Maps"]
    },
    {
      name: "Microprocessors & Microcontrollers",
      category: "Hardware & Low-Level",
      desc: "Assembly language instructions, register architecture, interrupt service routines, bus protocols (I2C/SPI), and memory-mapped I/O.",
      skills: ["Assembly (x86)", "Registers", "Embedded C"]
    }
  ];

  return (
    <section id="education" className="py-24 relative z-10">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
              <GraduationCap size={13} />
              <span>Academic Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Education &amp; <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Coursework.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            Academic progression at the Indian Institute of Information Technology Pune, combining rigorous hardware-software fundamentals with cutting-edge AI honours.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#0e1017]/85 border border-white/10 hover:border-white/20 backdrop-blur-xl transition-all shadow-xl flex flex-col justify-between relative overflow-hidden group"
              style={{ boxShadow: `0 15px 40px -10px ${item.glow}` }}
            >
              <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${item.color} opacity-10 rounded-bl-full pointer-events-none`} />

              <div>
                {/* Period & Status */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-gray-300">
                    <Calendar size={13} className="text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                  <span className={`font-mono text-xs font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.grade}
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                  {item.degree}
                </h3>

                {/* Institution & Location */}
                <div className="space-y-1 mb-4">
                  <div className="text-sm font-semibold text-gray-200">{item.institution}</div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                    <MapPin size={12} className="text-gray-500" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Details */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {item.details}
                </p>
              </div>

              {/* Status footer badge */}
              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>Status: <strong className="text-emerald-400 font-normal">{item.status}</strong></span>
                <span className="text-gray-500">IIIT Pune</span>
              </div>
            </div>
          ))}
        </div>

        {/* Key Coursework Tags & Interactive Details */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-cyan-400" />
              <h3 className="font-mono text-sm font-bold text-gray-300 uppercase tracking-wider">
                Key Coursework &amp; Academic Modules
              </h3>
            </div>
            <span className="text-xs font-mono text-gray-500">Click card for syllabus breakdown</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coursework.map((course, i) => (
              <div
                key={i}
                onClick={() => setSelectedCourse(selectedCourse === i ? null : i)}
                className={`p-5 rounded-2xl bg-[#0e1017]/80 border transition-all cursor-pointer ${
                  selectedCourse === i
                    ? "border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.25)] bg-[#12131A]"
                    : "border-white/10 hover:border-white/20 hover:bg-[#12131A]/60"
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-cyan-400 border border-white/5">
                    {course.category}
                  </span>
                  <ChevronRight
                    size={14}
                    className={`text-gray-400 transition-transform ${selectedCourse === i ? "rotate-90 text-cyan-400" : ""}`}
                  />
                </div>

                <h4 className="text-sm font-bold text-white mb-2">{course.name}</h4>

                <p className="text-xs text-gray-400 leading-relaxed mb-3">
                  {course.desc}
                </p>

                <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                  {course.skills.map((s) => (
                    <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-gray-300 border border-white/5">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
