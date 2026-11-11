"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/content";
import { ExternalLink, Github, ArrowRight, Layers } from "lucide-react";

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: Project) => void;
}

export default function ProjectsSection({ onOpenCaseStudy }: ProjectsSectionProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeProject = PROJECTS[selectedIdx] || PROJECTS[0];

  return (
    <section id="projects" className="py-28 relative border-t border-line-primary bg-bg-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-line-primary gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson inline-block" />
              <span className="text-xs font-mono text-txt-muted uppercase tracking-widest">
                03 &bull; Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-txt-primary tracking-tight">
              Featured Projects
            </h2>
          </div>
          <div className="text-xs font-mono text-txt-muted">
            04 Production Deployments
          </div>
        </div>

        {/* Two-Column Project Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Project Selector List (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            {PROJECTS.map((proj, idx) => {
              const isSelected = idx === selectedIdx;
              return (
                <button
                  key={proj.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full text-left p-5 rounded-lg border transition-all text-xs flex items-center justify-between ${
                    isSelected
                      ? "bg-bg-card border-crimson text-txt-primary shadow-theme"
                      : "bg-bg-secondary border-line-primary text-txt-secondary hover:text-txt-primary hover:bg-bg-card hover:border-line-hover"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-mono">
                      <span className={isSelected ? "text-crimson font-bold" : "text-txt-muted"}>
                        0{idx + 1}
                      </span>
                      <span className="font-sans font-bold text-sm text-txt-primary">
                        {proj.title}
                      </span>
                    </div>
                    <div className="text-[11px] text-txt-secondary line-clamp-1">
                      {proj.subtitle}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg-tertiary text-txt-muted">
                    {proj.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Project Details (8 cols) */}
          <div className="lg:col-span-8 p-8 rounded-lg bg-bg-card border border-line-primary shadow-theme space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 border-b border-line-primary gap-4">
              <div>
                <span className="text-xs font-mono text-crimson font-medium">
                  {activeProject.period} &bull; {activeProject.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-txt-primary mt-1">
                  {activeProject.title}
                </h3>
                <p className="text-sm text-txt-secondary font-normal mt-1">
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
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-crimson hover:bg-crimson-hover text-white text-xs font-semibold transition-colors shadow-sm"
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
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-bg-secondary border border-line-primary hover:border-line-hover text-txt-primary text-xs font-medium transition-colors shadow-sm"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>

            {/* Problem & Role */}
            <div className="space-y-4">
              <p className="text-sm text-txt-secondary leading-relaxed">
                {activeProject.description}
              </p>

              <div className="p-4 rounded-md bg-bg-tertiary border border-line-primary text-xs text-txt-secondary leading-relaxed">
                <strong className="text-txt-primary block mb-1">Problem Statement:</strong>
                {activeProject.problem}
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-txt-muted uppercase tracking-wider">
                Key Deliverables:
              </div>
              <ul className="space-y-2">
                {activeProject.keyFeatures.slice(0, 3).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-txt-secondary leading-relaxed">
                    <span className="text-crimson mt-0.5">&bull;</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-txt-muted uppercase tracking-wider">
                Tech Stack:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-bg-secondary border border-line-primary text-xs text-txt-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Trigger */}
            <div className="pt-6 border-t border-line-primary flex items-center justify-between">
              <button
                onClick={() => onOpenCaseStudy(activeProject)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-crimson hover:text-crimson-hover transition-colors cursor-pointer"
              >
                <Layers className="w-4 h-4" />
                <span>View Full Case Study &amp; Architecture Diagram</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-xs font-mono text-txt-muted">
                {activeProject.highlightMetric}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
