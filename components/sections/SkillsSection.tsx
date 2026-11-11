"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/content";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-28 relative border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-white/[0.06] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 inline-block" />
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                04 &bull; Technical Stack
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white tracking-tight">
              Skills &amp; Technologies
            </h2>
          </div>
          <div className="text-xs font-mono text-[#a0a0a0]">
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
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-[#121212] text-neutral-400 border-white/[0.06] hover:text-white hover:bg-neutral-800"
                }`}
              >
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Grid */}
        <div className="p-8 rounded-lg bg-[#121212] border border-white/[0.06] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.06] gap-2">
            <div>
              <h3 className="text-xl font-sans font-bold text-white">
                {SKILL_CATEGORIES[activeTab].category}
              </h3>
              <p className="text-xs text-[#a0a0a0] mt-1 font-normal">
                {SKILL_CATEGORIES[activeTab].description}
              </p>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              {SKILL_CATEGORIES[activeTab].skills.length} Capabilities
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-md bg-[#161616] border border-white/[0.04] hover:border-red-600/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-white">
                      {skill.name}
                    </span>
                    {skill.badge && (
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-red-600/10 text-red-400 border border-red-600/20">
                        {skill.badge}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-2 text-[11px] font-mono text-[#a0a0a0]">
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
