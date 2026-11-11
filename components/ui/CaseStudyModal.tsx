"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/content";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  TrendingUp,
  Layers,
  Calendar,
  AlertTriangle,
} from "lucide-react";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Case study: ${project.title}`}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0e1117] rounded-sm border border-brand-lime/60 overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-border bg-[#11141a]/95 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-sm text-xs font-mono-hud font-bold bg-brand-lime text-black uppercase">
              {project.tag}
            </span>
            <span className="text-xs font-mono-hud text-text-muted flex items-center gap-1">
              <Calendar className="w-3 h-3 text-brand-lime" /> {project.period}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-sm text-text-muted hover:text-brand-lime hover:bg-[#161a22] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Subtitle */}
          <div>
            <div className="text-[10px] font-mono-hud text-brand-lime uppercase font-bold tracking-widest mb-1">
              // ARCHITECTURAL DOSSIER
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-foreground">
              {project.title}
            </h2>
            <p className="text-sm font-mono-hud text-brand-lime font-semibold mt-1">
              {project.subtitle}
            </p>
            <div className="mt-2 text-xs font-mono-hud text-text-muted">
              ROLE: <strong className="text-foreground uppercase">{project.role}</strong>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-mono-hud font-bold uppercase bg-brand-lime text-black hover:bg-white transition-colors"
              >
                <span>VISIT LIVE PLATFORM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-mono-hud font-semibold uppercase bg-[#161a22] border border-border text-foreground hover:border-brand-lime transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GITHUB REPOSITORY</span>
              </a>
            )}
          </div>

          {/* Tech Stack Pills */}
          <div>
            <div className="text-[10px] font-mono-hud text-text-muted uppercase tracking-wider mb-2">
              TECHNOLOGY PIPELINE:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-sm text-xs font-mono-hud bg-[#161a22] border border-border text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem Statement */}
          <div className="p-4 rounded-sm border border-brand-orange/40 bg-brand-orange/5">
            <h3 className="text-xs font-mono-hud font-bold text-brand-orange uppercase flex items-center gap-2 mb-1.5">
              <AlertTriangle className="w-3.5 h-3.5" /> PROBLEM ADDRESSED
            </h3>
            <p className="text-xs text-text-muted leading-relaxed font-sans">
              {project.problem}
            </p>
          </div>

          {/* Key Architectural Deliverables */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono-hud font-bold uppercase text-foreground flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-lime" />
              <span>CORE ARCHITECTURAL FEATURES</span>
            </h3>
            <ul className="space-y-2">
              {project.keyFeatures.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-text-muted leading-relaxed"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Measurable Results */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono-hud font-bold uppercase text-foreground flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-brand-lime" />
              <span>MEASURABLE BENCHMARKS</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.measurableResults.map((result, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-sm border border-border bg-[#161a22] text-xs font-mono-hud text-foreground"
                >
                  <div className="text-[10px] text-brand-lime font-bold uppercase mb-1">
                    BENCHMARK.0{idx + 1}
                  </div>
                  {result}
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Pipeline */}
          {project.architectureDiagram && (
            <div className="space-y-3">
              <h3 className="text-sm font-mono-hud font-bold uppercase text-foreground">
                SYSTEM TOPOLOGY PIPELINE
              </h3>
              <div className="p-4 rounded-sm border border-border bg-[#161a22] font-mono-hud text-xs space-y-2">
                {project.architectureDiagram.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-text-muted">
                    <span className="text-brand-lime font-bold">[{idx + 1}]</span>
                    <span className="text-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
