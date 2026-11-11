"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/content";
import { Cpu, CheckCircle, Sparkles, Filter } from "lucide-react";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...SKILL_CATEGORIES.map((cat) => cat.category)];

  const displayedCategories =
    activeCategory === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-md bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan">
                <Cpu className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono-hud text-accent-cyan uppercase tracking-wider">
                03 // Technical Competency Radar
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
              Classified Stack & Tooling
            </h2>
            <p className="text-sm text-text-muted mt-2 max-w-xl">
              From low-level data structures and algorithmic complexity to distributed cloud deployments and security compliance.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-text-muted hidden sm:inline-block mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-hud transition-all ${
                  activeCategory === cat
                    ? "bg-accent-cyan text-background font-bold shadow-[0_0_12px_rgba(0,240,255,0.4)]"
                    : "glass-panel border border-border text-text-muted hover:text-foreground hover:border-accent-cyan/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Category Grids */}
        <div className="space-y-8">
          {displayedCategories.map((group) => (
            <div
              key={group.category}
              className="p-6 sm:p-8 rounded-2xl glass-panel border border-border/80 hover:border-accent-cyan/30 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-border/50">
                <div>
                  <h3 className="text-lg font-display font-bold text-foreground flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent-cyan" />
                    <span>{group.category}</span>
                  </h3>
                  <p className="text-xs text-text-muted mt-0.5 font-mono-hud">
                    {group.description}
                  </p>
                </div>
                <span className="text-xs font-mono-hud text-accent-cyan font-semibold">
                  {group.skills.length} Capabilities
                </span>
              </div>

              {/* Skills Interactive Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative p-3 rounded-xl bg-surface/60 border border-border hover:border-accent-cyan/50 hover:bg-surface-card-hover transition-all cursor-default"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-foreground group-hover:text-accent-cyan transition-colors truncate">
                        {skill.name}
                      </span>
                      {skill.featured && (
                        <CheckCircle className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" />
                      )}
                    </div>

                    <div className="mt-2 flex items-center justify-between text-[10px] font-mono-hud text-text-muted">
                      <span>{skill.level || "Proficient"}</span>
                      {skill.badge && (
                        <span className="px-1.5 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan font-bold">
                          {skill.badge}
                        </span>
                      )}
                    </div>

                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-20 w-44 p-2 rounded-lg bg-surface-card border border-accent-cyan/40 shadow-xl text-center text-[11px] font-mono-hud text-foreground pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                      <div>{skill.name}</div>
                      <div className="text-[10px] text-accent-cyan mt-0.5">
                        Category: {group.category}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
