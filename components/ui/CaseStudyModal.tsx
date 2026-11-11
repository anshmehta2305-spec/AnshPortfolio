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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Case study: ${project.title}`}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#121212] rounded-lg border border-white/10 overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#161616]/95 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded text-xs font-semibold bg-[#e50914] text-white uppercase">
              {project.tag}
            </span>
            <span className="text-xs text-[#a0a0a0] flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-neutral-400" /> {project.period}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Subtitle */}
          <div>
            <div className="text-xs text-[#a0a0a0] uppercase tracking-wider font-semibold mb-1">
              Case Study
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {project.title}
            </h2>
            <p className="text-sm text-neutral-300 font-medium mt-1">
              {project.subtitle}
            </p>
            <div className="mt-2 text-xs text-[#a0a0a0]">
              Role: <strong className="text-white">{project.role}</strong>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold bg-[#e50914] text-white hover:bg-red-600 transition-colors"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold bg-[#161616] border border-white/10 text-white hover:border-white/30 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-white" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          {/* Tech Stack Pills */}
          <div>
            <div className="text-xs text-[#a0a0a0] uppercase tracking-wider mb-2 font-medium">
              Tech Stack:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs bg-[#161616] border border-white/[0.08] text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem Statement */}
          <div className="p-4 rounded-md border border-red-500/20 bg-red-950/10">
            <h3 className="text-xs font-semibold text-red-400 uppercase flex items-center gap-2 mb-1.5">
              <AlertTriangle className="w-3.5 h-3.5" /> Problem Addressed
            </h3>
            <p className="text-xs text-[#a0a0a0] leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Key Architectural Deliverables */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#e50914]" />
              <span>Core Architectural Features</span>
            </h3>
            <ul className="space-y-2">
              {project.keyFeatures.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-[#a0a0a0] leading-relaxed"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e50914] flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Measurable Results */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#e50914]" />
              <span>Measurable Results</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.measurableResults.map((result, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-md border border-white/[0.08] bg-[#161616] text-xs text-white"
                >
                  <div className="text-[10px] text-red-400 font-semibold uppercase mb-1">
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
              <h3 className="text-sm font-bold uppercase text-white">
                System Topology &amp; Architecture Flow
              </h3>
              <div className="p-4 rounded-md border border-white/[0.08] bg-[#161616] text-xs space-y-2">
                {project.architectureDiagram.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-[#a0a0a0]">
                    <span className="text-red-400 font-bold">[{idx + 1}]</span>
                    <span className="text-neutral-200">{step}</span>
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
