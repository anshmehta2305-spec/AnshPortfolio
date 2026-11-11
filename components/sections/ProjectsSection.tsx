"use client";

import React, { useRef } from "react";
import { PROJECTS, Project } from "@/data/content";
import {
  Code2,
  ExternalLink,
  Github,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Layers,
  Sparkles,
} from "lucide-react";

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: Project) => void;
}

export default function ProjectsSection({ onOpenCaseStudy }: ProjectsSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -420, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-24 relative border-t border-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-md bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan">
                <Code2 className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono-hud text-accent-cyan uppercase tracking-wider">
                02 // Selected Architectures
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
              Featured Production Systems
            </h2>
            <p className="text-sm text-text-muted mt-2 max-w-xl">
              Engineered end-to-end: from multi-tier relational schemas and security barriers to high-performance client rendering and automated test suites.
            </p>
          </div>

          {/* Desktop Carousel Controls */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="p-2.5 rounded-xl border border-border bg-surface hover:border-accent-cyan/50 text-foreground transition-all hover:bg-surface-card-hover focus:outline-none"
              aria-label="Scroll projects left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2.5 rounded-xl border border-border bg-surface hover:border-accent-cyan/50 text-foreground transition-all hover:bg-surface-card-hover focus:outline-none"
              aria-label="Scroll projects right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Projects Gallery Container (Desktop Horizontal Scroll, Mobile Stacked) */}
        <div
          ref={scrollContainerRef}
          className="flex flex-col sm:flex-row gap-6 overflow-x-auto pb-6 sm:snap-x sm:snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="w-full sm:w-[480px] lg:w-[520px] flex-shrink-0 sm:snap-start glass-panel rounded-2xl border border-border/80 hover:border-accent-cyan/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(0,240,255,0.15)] group"
            >
              {/* Top Meta Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono-hud text-accent-cyan font-semibold">
                      0{index + 1} //
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono-hud bg-surface border border-border text-text-muted">
                      {project.tag}
                    </span>
                  </div>
                  <span className="text-xs font-mono-hud text-text-muted">
                    {project.period}
                  </span>
                </div>

                {/* Title & Role */}
                <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-text-muted mt-1">
                  {project.subtitle}
                </p>

                {/* Description snippet */}
                <p className="text-xs text-text-muted/90 mt-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Metric callout badge */}
                <div className="mt-5 p-3 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
                    <span className="text-xs font-mono-hud text-foreground font-semibold">
                      {project.highlightMetric}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono-hud text-text-muted">
                    {project.highlightLabel}
                  </span>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono-hud bg-surface/80 border border-border text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 5 && (
                    <span className="px-2 py-1 rounded-md text-[11px] font-mono-hud text-text-muted">
                      +{project.stack.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="mt-8 pt-5 border-t border-border/60 flex items-center justify-between">
                <button
                  onClick={() => onOpenCaseStudy(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono-hud font-semibold text-accent-cyan hover:underline"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Case Study & Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border bg-surface hover:text-foreground text-text-muted hover:border-accent-cyan/40 transition-colors"
                      title="View GitHub Repository"
                      aria-label={`${project.title} GitHub repo`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border bg-surface hover:text-foreground text-text-muted hover:border-accent-cyan/40 transition-colors"
                      title="View Live Deployment"
                      aria-label={`${project.title} live link`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
