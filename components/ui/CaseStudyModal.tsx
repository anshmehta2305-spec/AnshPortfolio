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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Case study: ${project.title}`}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-bg-card rounded-xl border border-line-primary overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-line-primary bg-bg-card/95 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded text-xs font-semibold bg-crimson text-white uppercase">
              {project.tag}
            </span>
            <span className="text-xs text-txt-muted flex items-center gap-1 font-mono">
              <Calendar className="w-3.5 h-3.5 text-txt-muted" /> {project.period}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-txt-muted hover:text-txt-primary hover:bg-bg-secondary transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Subtitle */}
          <div>
            <div className="text-xs text-txt-muted uppercase tracking-wider font-semibold mb-1">
              Case Study
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-txt-primary">
              {project.title}
            </h2>
            <p className="text-sm text-txt-secondary font-medium mt-1">
              {project.subtitle}
            </p>
            <div className="mt-2 text-xs text-txt-muted">
              Role: <strong className="text-txt-primary">{project.role}</strong>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold bg-crimson hover:bg-crimson-hover text-white transition-colors shadow-sm"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold bg-bg-secondary border border-line-primary text-txt-primary hover:border-line-hover transition-colors shadow-sm"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          {/* Tech Stack Pills */}
          <div>
            <div className="text-xs text-txt-muted uppercase tracking-wider mb-2 font-medium">
              Tech Stack:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs bg-bg-secondary border border-line-primary text-txt-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem Statement */}
          <div className="p-4 rounded-md border border-crimson/20 bg-crimson/5">
            <h3 className="text-xs font-semibold text-crimson uppercase flex items-center gap-2 mb-1.5">
              <AlertTriangle className="w-3.5 h-3.5" /> Problem Addressed
            </h3>
            <p className="text-xs text-txt-secondary leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Key Architectural Deliverables */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase text-txt-primary flex items-center gap-2">
              <Layers className="w-4 h-4 text-crimson" />
              <span>Core Architectural Features</span>
            </h3>
            <ul className="space-y-2">
              {project.keyFeatures.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-txt-secondary leading-relaxed"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-crimson flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Measurable Results */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase text-txt-primary flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-crimson" />
              <span>Measurable Results</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.measurableResults.map((result, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-md border border-line-primary bg-bg-secondary text-xs text-txt-primary"
                >
                  <div className="text-[10px] text-crimson font-semibold uppercase mb-1">
                    Benchmark {idx + 1}
                  </div>
                  {result}
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Pipeline */}
          {project.architectureDiagram && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase text-txt-primary">
                System Topology &amp; Architecture Flow
              </h3>
              <div className="p-4 rounded-md border border-line-primary bg-bg-secondary text-xs space-y-2">
                {project.architectureDiagram.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-txt-secondary">
                    <span className="text-crimson font-bold">[{idx + 1}]</span>
                    <span className="text-txt-primary font-mono">{step}</span>
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
