"use client";

import React from "react";
import { EXPERIENCES } from "@/data/content";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-28 relative border-t border-line-primary bg-bg-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-line-primary gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson inline-block" />
              <span className="text-xs font-mono text-txt-muted uppercase tracking-widest">
                05 &bull; Practical Experience
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-txt-primary tracking-tight">
              Job Simulations
            </h2>
          </div>
          <div className="text-xs font-mono text-txt-muted">
            Forage Enterprise Simulations
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="p-8 rounded-lg bg-bg-card border border-line-primary shadow-theme hover:shadow-theme-hover hover:border-crimson/30 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-4 border-b border-line-primary gap-2">
                <div>
                  <h3 className="text-xl font-sans font-bold text-txt-primary">
                    {exp.company}
                  </h3>
                  <div className="text-sm font-semibold text-crimson mt-0.5">
                    {exp.title}
                  </div>
                </div>
                <span className="text-xs font-mono text-txt-muted">
                  {exp.period} &bull; {exp.type}
                </span>
              </div>

              <p className="text-sm text-txt-secondary leading-relaxed">
                {exp.description}
              </p>

              {/* Deliverables */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono text-txt-muted uppercase tracking-wider">
                  Key Deliverables:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {exp.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded bg-bg-secondary border border-line-primary text-xs text-txt-secondary leading-relaxed"
                    >
                      <span className="text-crimson font-bold block mb-1">
                        0{idx + 1}
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-line-primary flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-txt-muted">
                  Competencies:
                </span>
                {exp.skillsGained.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded bg-bg-secondary border border-line-primary text-xs text-txt-primary"
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
