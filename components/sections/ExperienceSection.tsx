"use client";

import React from "react";
import { EXPERIENCES } from "@/data/content";
import { Briefcase, Calendar, CheckCircle2, ShieldCheck, Terminal } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative border-b border-border bg-[#090a0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-border gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-brand-lime inline-block" />
              <span className="text-xs font-mono-hud text-brand-lime uppercase font-bold tracking-widest">
                SECTION [04] // INDUSTRY JOB SIMULATIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold uppercase text-foreground tracking-tight">
              Enterprise Simulation Flight Log
            </h2>
          </div>
          <div className="text-xs font-mono-hud text-text-muted">
            DELOITTE &bull; WALMART &bull; TATA // 2026
          </div>
        </div>

        {/* Industrial Chronometer Timeline */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-sm bg-[#11141a] border border-border hover:border-brand-lime/40 transition-colors shadow-cad"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-4 border-b border-border/80 gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono-hud font-bold text-brand-lime px-2 py-0.5 bg-brand-lime/10 border border-brand-lime/30">
                    LOG.0{index + 1}
                  </span>
                  <h3 className="text-xl font-display font-extrabold uppercase text-foreground">
                    {exp.company}
                  </h3>
                  <span className="text-xs font-mono-hud text-text-muted hidden sm:inline-block">
                    // {exp.type}
                  </span>
                </div>

                <div className="text-xs font-mono-hud text-brand-lime font-bold">
                  DATE: {exp.period}
                </div>
              </div>

              <div className="text-sm font-mono-hud text-foreground font-semibold mb-3">
                ASSIGNMENT: {exp.title}
              </div>

              <p className="text-xs text-text-muted leading-relaxed font-sans mb-6">
                {exp.description}
              </p>

              {/* Deliverables checklist */}
              <div className="space-y-2 mb-6">
                <div className="text-[10px] font-mono-hud text-brand-lime font-bold uppercase tracking-wider">
                  VERIFIED CLIENT DELIVERABLES:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {exp.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#161a22] border border-border/80 text-xs text-text-muted leading-relaxed"
                    >
                      <span className="text-brand-lime font-bold block mb-1">
                        [0{idx + 1}]
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Gained Tags */}
              <div className="pt-4 border-t border-border/50 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono-hud text-text-muted uppercase mr-1">
                  SKILLS TELEMETRY:
                </span>
                {exp.skillsGained.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded-sm text-[10px] font-mono-hud bg-[#161a22] border border-border text-foreground"
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
