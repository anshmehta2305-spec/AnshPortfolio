"use client";

import React from "react";
import { EXPERIENCES } from "@/data/content";
import { Briefcase, Calendar, CheckCircle2, Award } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="p-1.5 rounded-md bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan">
            <Briefcase className="w-4 h-4" />
          </span>
          <span className="text-xs font-mono-hud text-accent-cyan uppercase tracking-wider">
            04 // Practical Experience
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
          Enterprise Job Simulations
        </h2>
        <p className="text-sm text-text-muted mt-2 max-w-xl mb-12">
          Rigorous simulated engineering scenarios modeling real-world technical problems across multinational technology organizations.
        </p>

        {/* Vertical Timeline */}
        <div className="relative border-l border-border/80 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-accent-cyan group-hover:scale-125 group-hover:bg-accent-cyan transition-all shadow-[0_0_10px_rgba(0,240,255,0.5)]" />

              <div className="glass-panel rounded-2xl border border-border p-6 sm:p-8 hover:border-accent-cyan/40 transition-all duration-300">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-display font-bold text-foreground">
                        {exp.company}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono-hud bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-accent-cyan mt-1">
                      {exp.title}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono-hud text-text-muted">
                    <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-mono-hud text-foreground font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald" />
                    <span>Engineering Deliverables</span>
                  </div>
                  <ul className="space-y-2 pl-1">
                    {exp.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-text-muted leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-accent-cyan mt-0.5">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Gained Tags */}
                <div className="pt-4 border-t border-border/50 flex flex-wrap items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-accent-cyan mr-1" />
                  {exp.skillsGained.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono-hud bg-surface border border-border text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
