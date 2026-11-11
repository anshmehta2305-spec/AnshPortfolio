"use client";

import React from "react";
import { EXPERIENCES } from "@/data/content";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-28 relative border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-white/[0.06] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 inline-block" />
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                05 &bull; Practical Experience
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white tracking-tight">
              Job Simulations
            </h2>
          </div>
          <div className="text-xs font-mono text-[#a0a0a0]">
            Forage Enterprise Simulations
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="p-8 rounded-lg bg-[#121212] border border-white/[0.06] hover:border-red-600/30 transition-colors space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-4 border-b border-white/[0.06] gap-2">
                <div>
                  <h3 className="text-xl font-sans font-bold text-white">
                    {exp.company}
                  </h3>
                  <div className="text-sm font-medium text-red-500 mt-0.5">
                    {exp.title}
                  </div>
                </div>
                <span className="text-xs font-mono text-neutral-400">
                  {exp.period} &bull; {exp.type}
                </span>
              </div>

              <p className="text-sm text-[#a0a0a0] leading-relaxed">
                {exp.description}
              </p>

              {/* Deliverables */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  Key Deliverables:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {exp.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded bg-[#161616] border border-white/[0.04] text-xs text-[#a0a0a0] leading-relaxed"
                    >
                      <span className="text-red-500 font-bold block mb-1">
                        0{idx + 1}
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-neutral-500">
                  Competencies:
                </span>
                {exp.skillsGained.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-xs text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
