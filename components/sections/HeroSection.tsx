"use client";

import React, { useState, useEffect } from "react";
import HeroCanvas from "@/components/3d/HeroCanvas";
import { PERSONAL_INFO, KEY_METRICS } from "@/data/content";
import {
  ArrowDown,
  ArrowUpRight,
  FileDown,
  Github,
  Linkedin,
  Mail,
  Cpu,
  Layers,
  Terminal,
} from "lucide-react";

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.subtitles.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 cad-grid overflow-hidden border-b border-border"
    >
      {/* 3D CAD Blueprint Wireframe Layer */}
      <HeroCanvas />

      {/* CAD Viewport Corner Crosshairs */}
      <div className="absolute top-28 left-6 font-mono-hud text-xs text-brand-lime/60 hidden sm:block">
        + [CAD_VIEWPORT_X0.00]
      </div>
      <div className="absolute top-28 right-6 font-mono-hud text-xs text-brand-lime/60 hidden sm:block">
        [SYS_CALIBRATED_100%] +
      </div>
      <div className="absolute bottom-6 left-6 font-mono-hud text-xs text-text-muted/60 hidden sm:block">
        + [PROD_LEVEL: HIGH]
      </div>
      <div className="absolute bottom-6 right-6 font-mono-hud text-xs text-text-muted/60 hidden sm:block">
        [STACK: MERN/NEXT14/FASTAPI] +
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Hardware Status Ribbon */}
        <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-sm bg-[#11141a] border border-brand-lime/40 text-xs font-mono-hud mb-6 shadow-tactile">
          <span className="w-2 h-2 rounded-none bg-brand-lime animate-pulse inline-block" />
          <span className="text-brand-lime font-bold uppercase tracking-wider">
            STATUS // RECRUITMENT READY
          </span>
          <span className="text-white/20">|</span>
          <span className="text-text-muted">GUJARAT, INDIA</span>
        </div>

        {/* Massive Industrial Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold tracking-tighter text-foreground uppercase leading-[0.95] max-w-5xl">
          Ansh Mehta
          <span className="block text-2xl sm:text-4xl md:text-5xl font-mono-hud font-bold text-brand-lime mt-3">
            // Full-Stack Engineer
          </span>
        </h1>

        {/* Dynamic Telemetry Role Banner */}
        <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 bg-[#161a22] border border-border text-xs sm:text-sm font-mono-hud text-text-muted">
          <span className="text-brand-lime font-bold">&gt;&gt;</span>
          <span className="text-foreground uppercase font-semibold">
            SPECIALIZATION:
          </span>
          <span
            key={roleIndex}
            className="text-brand-lime font-bold animate-in fade-in duration-200"
          >
            {PERSONAL_INFO.subtitles[roleIndex]}
          </span>
        </div>

        {/* Technical Philosophy Statement */}
        <p className="mt-6 text-sm sm:text-base text-text-muted max-w-2xl leading-relaxed font-sans">
          Final-year B.Tech CSE student building production-style web architectures with the MERN stack, Next.js 14, and Python/FastAPI.
          Trained on sub-100ms response latencies, cryptographic data integrity (AES-256), and rigorous automated QA testing.
        </p>

        {/* Tactile Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm font-mono-hud font-extrabold text-xs uppercase bg-brand-lime text-black hover:bg-white transition-all shadow-tactile"
          >
            <Layers className="w-4 h-4" />
            <span>Inspect System Architectures &rarr;</span>
          </a>

          <a
            href={PERSONAL_INFO.cvDownloadPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm font-mono-hud font-bold text-xs uppercase bg-[#11141a] border border-border hover:border-brand-lime/80 text-foreground transition-all hover:bg-[#1a1f29]"
          >
            <FileDown className="w-4 h-4 text-brand-lime" />
            <span>Download Dossier (CV.PDF)</span>
          </a>
        </div>

        {/* Live Metric Bento strip */}
        <div className="mt-12 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          {KEY_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-sm bg-[#11141a]/90 border border-border hover:border-brand-lime/50 transition-colors"
            >
              <div className="text-[10px] font-mono-hud text-brand-lime font-bold">
                METRIC.0{idx + 1}
              </div>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-foreground mt-0.5">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-foreground/90 uppercase tracking-tight">
                {metric.label}
              </div>
              <div className="text-[10px] font-mono-hud text-text-muted mt-0.5 truncate">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Coordinates Quick Bar */}
        <div className="mt-8 flex items-center gap-6 text-xs font-mono-hud text-text-muted">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-brand-lime transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/anshmehta2305-spec</span>
          </a>
          <span>//</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-brand-lime transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>linkedin/ansh-mehta</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-10">
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="p-2 border border-border hover:border-brand-lime text-text-muted hover:text-brand-lime transition-colors inline-block"
          >
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
