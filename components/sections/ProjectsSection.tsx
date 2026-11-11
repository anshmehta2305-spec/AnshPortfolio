"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/content";
import {
  Layers,
  ExternalLink,
  Github,
  CheckCircle,
  FileCode,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  Terminal,
} from "lucide-react";

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: Project) => void;
}

export default function ProjectsSection({ onOpenCaseStudy }: ProjectsSectionProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeProject = PROJECTS[selectedIdx];

  return (
    <section id="projects" className="py-24 relative border-b border-border bg-[#090a0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-border gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-brand-lime inline-block" />
              <span className="text-xs font-mono-hud text-brand-lime uppercase font-bold tracking-widest">
                SECTION [02] // VERIFIED PRODUCTION ARCHITECTURES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold uppercase text-foreground tracking-tight">
              System Blueprints &amp; Case Studies
            </h2>
          </div>
          <div className="text-xs font-mono-hud text-text-muted">
            INDEX: [0{selectedIdx + 1}/0{PROJECTS.length}] // INTERACTIVE DOSSIER
          </div>
        </div>

        {/* Industrial CAD Architecture Inspector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Technical Selector List (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            {PROJECTS.map((proj, idx) => {
              const isSelected = idx === selectedIdx;
              return (
                <button
                  key={proj.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full text-left p-4 rounded-sm border transition-all text-xs font-mono-hud flex items-start justify-between ${
                    isSelected
                      ? "bg-[#161a22] border-brand-lime text-foreground shadow-tactile"
                      : "bg-[#11141a] border-border text-text-muted hover:text-foreground hover:bg-[#141820]"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-bold ${isSelected ? "text-brand-lime" : "text-text-muted"}`}>
                        0{idx + 1} //
                      </span>
                      <span className="font-bold text-sm text-foreground uppercase tracking-tight">
                        {proj.title}
                      </span>
                    </div>
                    <div className="text-[11px] text-text-muted line-clamp-1">
                      {proj.subtitle}
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-sm ${
                    isSelected ? "bg-brand-lime text-black" : "bg-black/50 text-text-muted"
                  }`}>
                    {proj.tag}
                  </span>
                </button>
              );
            })}

            {/* Quick summary card */}
            <div className="p-4 rounded-sm bg-[#11141a]/60 border border-border/80 text-[11px] font-mono-hud text-text-muted">
              <span className="text-brand-lime font-bold uppercase block mb-1">
                // ARCHITECTURAL BENCHMARK:
              </span>
              Every system is engineered with end-to-end relational modeling, input validation, and automated test coverage.
            </div>
          </div>

          {/* Right Column: Active Project Blueprint Dossier (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-sm bg-[#11141a] border border-border shadow-cad">
            {/* Dossier Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border/80 gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-hud text-brand-lime font-bold mb-1">
                  <span>SPECIFICATION: 0{selectedIdx + 1}</span>
                  <span>//</span>
                  <span>{activeProject.period}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-foreground">
                  {activeProject.title}
                </h3>
                <p className="text-sm font-mono-hud text-brand-lime font-semibold mt-1">
                  {activeProject.subtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-brand-lime text-black font-mono-hud font-bold text-xs uppercase hover:bg-white transition-colors"
                  >
                    <span>LIVE</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#161a22] border border-border text-foreground hover:border-brand-lime font-mono-hud font-semibold text-xs transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>REPO</span>
                  </a>
                )}
              </div>
            </div>

            {/* Problem & Role */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-sm bg-[#161a22] border border-border/80">
                <div className="text-[10px] font-mono-hud text-brand-orange font-bold uppercase mb-1 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  <span>PROBLEM ADDRESSED</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  {activeProject.problem}
                </p>
              </div>

              <div className="p-4 rounded-sm bg-[#161a22] border border-border/80">
                <div className="text-[10px] font-mono-hud text-brand-lime font-bold uppercase mb-1 flex items-center gap-1">
                  <Terminal className="w-3 h-3" />
                  <span>ENGINEER ROLE</span>
                </div>
                <p className="text-xs font-semibold text-foreground mb-1">
                  {activeProject.role}
                </p>
                <div className="text-[11px] font-mono-hud text-text-muted">
                  Metric: <strong className="text-brand-lime">{activeProject.highlightMetric}</strong>
                </div>
              </div>
            </div>

            {/* Key Deliverables */}
            <div className="space-y-2 mb-6">
              <div className="text-[11px] font-mono-hud text-foreground font-bold uppercase tracking-wider">
                // SYSTEM DELIVERABLES &amp; ACHIEVEMENTS:
              </div>
              <ul className="space-y-2">
                {activeProject.keyFeatures.slice(0, 3).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-text-muted leading-relaxed">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-lime flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack Chips */}
            <div className="mb-6">
              <div className="text-[10px] font-mono-hud text-text-muted uppercase mb-2">
                TECH STACK PIPELINE:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-sm text-[11px] font-mono-hud bg-[#161a22] border border-border/90 text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer trigger to open deep case study */}
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <button
                onClick={() => onOpenCaseStudy(activeProject)}
                className="inline-flex items-center gap-2 text-xs font-mono-hud font-bold uppercase text-brand-lime hover:underline cursor-pointer"
              >
                <Layers className="w-4 h-4" />
                <span>OPEN FULL TECHNICAL CASE STUDY &amp; ARCHITECTURE DIAGRAM &rarr;</span>
              </button>
              <span className="text-[10px] font-mono-hud text-text-muted">
                ZOD / RELATIONAL / SECURE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
