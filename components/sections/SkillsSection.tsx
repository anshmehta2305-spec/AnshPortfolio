"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/content";
import { Cpu, Terminal, CheckSquare, Layers } from "lucide-react";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 relative border-b border-border bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-border gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-brand-lime inline-block" />
              <span className="text-xs font-mono-hud text-brand-lime uppercase font-bold tracking-widest">
                SECTION [03] // SYSTEM CAPABILITY MATRIX
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold uppercase text-foreground tracking-tight">
              Classified Engineering Competencies
            </h2>
          </div>
          <div className="text-xs font-mono-hud text-text-muted">
            TOTAL CAPABILITIES: 40+ // INDUSTRIAL VERIFIED
          </div>
        </div>

        {/* Industrial Category Switcher Bar */}
        <div className="flex items-center gap-1 overflow-x-auto pb-4 mb-6 border-b border-border/80 scrollbar-none">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isActive = idx === activeTab;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 text-xs font-mono-hud uppercase whitespace-nowrap transition-all border ${
                  isActive
                    ? "bg-brand-lime text-black font-extrabold border-brand-lime"
                    : "bg-[#11141a] text-text-muted border-border hover:text-foreground hover:bg-[#161a22]"
                }`}
              >
                [0{idx + 1}] {cat.category}
              </button>
            );
          })}
        </div>

        {/* Active Category Display Panel */}
        <div className="p-6 sm:p-8 rounded-sm bg-[#11141a] border border-border shadow-cad">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border/60 gap-3 mb-6">
            <div>
              <div className="text-xs font-mono-hud text-brand-lime font-bold uppercase">
                MODULE 0{activeTab + 1} SPECIFICATION
              </div>
              <h3 className="text-xl font-display font-extrabold uppercase text-foreground mt-0.5">
                {SKILL_CATEGORIES[activeTab].category}
              </h3>
              <p className="text-xs font-mono-hud text-text-muted mt-1">
                {SKILL_CATEGORIES[activeTab].description}
              </p>
            </div>
            <span className="text-xs font-mono-hud text-brand-lime font-bold px-3 py-1 bg-black/40 border border-brand-lime/30">
              {SKILL_CATEGORIES[activeTab].skills.length} VERIFIED STACK ITEMS
            </span>
          </div>

          {/* Machined Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
              <div
                key={skill.name}
                className="p-3.5 rounded-sm bg-[#161a22] border border-border hover:border-brand-lime/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-none bg-brand-lime inline-block" />
                    {skill.badge && (
                      <span className="text-[9px] font-mono-hud font-bold px-1 py-0.2 bg-brand-lime/10 text-brand-lime border border-brand-lime/30">
                        {skill.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-bold text-foreground font-sans">
                    {skill.name}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-border/50 text-[10px] font-mono-hud text-text-muted uppercase">
                  {skill.level || "Proficient"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
