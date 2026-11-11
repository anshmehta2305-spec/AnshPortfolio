"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/content";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-28 relative border-t border-line-primary bg-bg-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-line-primary gap-4 reveal-blur">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson inline-block" />
              <span className="text-xs font-mono text-txt-muted uppercase tracking-widest">
                04 &bull; Stack
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-txt-primary tracking-tight">
              Skills &amp; Technologies
            </h2>
          </div>
          <div className="text-xs font-mono text-txt-muted">
            Core Disciplines
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isActive = idx === activeTab;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-md text-xs font-medium whitespace-nowrap transition-all border ${
                  isActive
                    ? "bg-crimson text-white border-crimson shadow-sm"
                    : "bg-bg-secondary text-txt-secondary border-line-primary hover:text-txt-primary hover:bg-bg-card hover:border-line-hover"
                }`}
              >
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Grid */}
        <div className="p-8 rounded-lg bg-bg-card border border-line-primary shadow-theme space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-line-primary gap-2">
            <div>
              <h3 className="text-xl font-sans font-bold text-txt-primary">
                {SKILL_CATEGORIES[activeTab].category}
              </h3>
              <p className="text-xs text-txt-secondary mt-1 font-normal">
                {SKILL_CATEGORIES[activeTab].description}
              </p>
            </div>
            <span className="text-xs font-mono text-txt-muted">
              {SKILL_CATEGORIES[activeTab].skills.length} Capabilities
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-md bg-bg-secondary border border-line-primary hover:border-crimson/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-txt-primary">
                      {skill.name}
                    </span>
                    {skill.badge && (
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-crimson/10 text-crimson border border-crimson/20">
                        {skill.badge}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-2 text-[11px] font-mono text-txt-secondary">
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
