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
  UserCheck,
  AlertCircle,
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Case study: ${project.title}`}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] glass-panel rounded-2xl border border-accent-cyan/30 overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-border bg-surface/90 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono-hud font-semibold bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30">
              {project.tag}
            </span>
            <span className="text-xs font-mono-hud text-text-muted flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {project.period}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-text-muted hover:text-foreground hover:bg-surface border border-transparent hover:border-border transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
              {project.title}
            </h2>
            <p className="text-base text-accent-cyan font-medium mt-1">
              {project.subtitle}
            </p>
            <div className="flex items-center gap-2 mt-2 text-sm text-text-muted">
              <UserCheck className="w-4 h-4 text-accent-indigo" />
              <span>Role: <strong className="text-foreground">{project.role}</strong></span>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-accent-primary text-background hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(0,240,255,0.4)]"
              >
                <span>Live Deployment</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border border-border bg-surface hover:bg-surface-card-hover text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-mono-hud text-text-muted uppercase tracking-wider mb-2.5">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono-hud bg-surface border border-border text-foreground/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem Statement */}
          <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5">
            <h3 className="text-sm font-semibold text-amber-400 flex items-center gap-2 mb-1.5">
              <AlertCircle className="w-4 h-4" /> Engineering Problem Solved
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Key Architectural Features */}
          <div>
            <h3 className="text-base font-display font-bold text-foreground flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-accent-cyan" /> Core Architectural Deliverables
            </h3>
            <ul className="space-y-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent-emerald flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Measurable Results */}
          <div>
            <h3 className="text-base font-display font-bold text-foreground flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-accent-emerald" /> Measurable Impact & Benchmarks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.measurableResults.map((result, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-border bg-surface/50 text-sm text-foreground/90 font-mono-hud"
                >
                  <div className="text-xs text-accent-emerald mb-1 font-semibold uppercase">
                    Result #{idx + 1}
                  </div>
                  {result}
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Diagram Steps */}
          {project.architectureDiagram && (
            <div>
              <h3 className="text-base font-display font-bold text-foreground mb-3">
                System Topology & Pipeline
              </h3>
              <div className="p-4 rounded-xl border border-border bg-surface/30 font-mono-hud text-xs space-y-2">
                {project.architectureDiagram.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-text-muted">
                    <span className="text-accent-cyan font-bold">[{idx + 1}]</span>
                    <span className="text-foreground">{step}</span>
                    {idx < (project.architectureDiagram?.length ?? 0) - 1 && (
                      <span className="text-text-muted/40 ml-auto">&darr;</span>
                    )}
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
