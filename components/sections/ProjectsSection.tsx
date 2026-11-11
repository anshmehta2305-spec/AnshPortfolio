"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/content";
import { ExternalLink, Github, ArrowRight, Layers } from "lucide-react";

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: Project) => void;
}

export default function ProjectsSection({ onOpenCaseStudy }: ProjectsSectionProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeProject = PROJECTS[selectedIdx];

  return (
    <section id="projects" className="py-28 relative border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-white/[0.06] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 inline-block" />
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                03 &bull; Selected Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>
          <div className="text-xs font-mono text-[#a0a0a0]">
            0{selectedIdx + 1} / 0{PROJECTS.length}
          </div>
        </div>

        {/* Minimalist Split Project Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Project Tab Selector (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            {PROJECTS.map((proj, idx) => {
              const isSelected = idx === selectedIdx;
              return (
                <button
                  key={proj.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full text-left p-5 rounded-lg border transition-all text-xs flex items-center justify-between ${
                    isSelected
                      ? "bg-[#141414] border-red-600/60 text-white shadow-sm"
                      : "bg-[#101010] border-white/[0.06] text-neutral-400 hover:text-white hover:bg-[#141414]"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-mono">
                      <span className={isSelected ? "text-red-500 font-bold" : "text-neutral-500"}>
                        0{idx + 1}
                      </span>
                      <span className="font-sans font-bold text-sm text-white">
                        {proj.title}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#a0a0a0] line-clamp-1">
                      {proj.subtitle}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-400">
                    {proj.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Project Details (8 cols) */}
          <div className="lg:col-span-8 p-8 rounded-lg bg-[#121212] border border-white/[0.06] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 border-b border-white/[0.06] gap-4">
              <div>
                <span className="text-xs font-mono text-red-500 font-medium">
                  {activeProject.period} &bull; {activeProject.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white mt-1">
                  {activeProject.title}
                </h3>
                <p className="text-sm text-neutral-400 font-normal mt-1">
                  {activeProject.subtitle}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-red-600 hover:bg-red-500 text-white text-xs font-medium transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-transparent border border-white/20 hover:border-white/40 text-neutral-300 hover:text-white text-xs font-medium transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>

            {/* Problem & Role */}
            <div className="space-y-4">
              <p className="text-sm text-[#a0a0a0] leading-relaxed">
                {activeProject.description}
              </p>

              <div className="p-4 rounded-md bg-white/[0.02] border border-white/[0.06] text-xs text-[#a0a0a0] leading-relaxed">
                <strong className="text-white block mb-1">Problem Statement:</strong>
                {activeProject.problem}
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Key Deliverables:
              </div>
              <ul className="space-y-2">
                {activeProject.keyFeatures.slice(0, 3).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#a0a0a0] leading-relaxed">
                    <span className="text-red-500 mt-0.5">&bull;</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Tech Stack:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06] text-xs text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Trigger */}
            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
              <button
                onClick={() => onOpenCaseStudy(activeProject)}
                className="inline-flex items-center gap-2 text-xs font-medium text-red-500 hover:text-red-400 transition-colors cursor-pointer"
              >
                <Layers className="w-4 h-4" />
                <span>View Full Case Study &amp; Architecture Diagram</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-xs font-mono text-neutral-500">
                {activeProject.highlightMetric}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
