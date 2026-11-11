"use client";

import React, { useState, useEffect } from "react";
import HeroCanvas from "@/components/3d/HeroCanvas";
import { PERSONAL_INFO } from "@/data/content";
import {
  ArrowDown,
  ArrowUpRight,
  FileDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.subtitles.length);
    }, 2800);
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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* 3D WebGL Canvas Layer */}
      <HeroCanvas />

      {/* Atmospheric ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-accent-cyan/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] bg-accent-indigo/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Availability HUD Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-accent-cyan/30 text-xs font-mono-hud text-foreground/90 mb-6 shadow-[0_0_15px_rgba(0,240,255,0.15)] animate-in fade-in slide-in-from-top-4 duration-700">
          <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
          <span className="text-accent-cyan font-semibold">STATUS //</span>
          <span>{PERSONAL_INFO.status}</span>
          <span className="text-text-muted">|</span>
          <span className="flex items-center gap-1 text-text-muted">
            <MapPin className="w-3 h-3 text-accent-cyan" />
            {PERSONAL_INFO.location}
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-foreground leading-[1.08] max-w-4xl">
          Ansh Mehta <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-foreground via-accent-cyan to-accent-indigo bg-clip-text text-transparent">
            — Full-Stack Developer
          </span>
        </h1>

        {/* Rotating Role Pill */}
        <div className="mt-5 h-9 flex items-center justify-center font-mono-hud text-sm sm:text-base text-accent-cyan font-semibold">
          <span className="text-text-muted mr-2">&gt;</span>
          <span
            key={roleIndex}
            className="inline-block animate-in fade-in slide-in-from-bottom-2 duration-300"
          >
            {PERSONAL_INFO.subtitles[roleIndex]}
          </span>
          <span className="w-2 h-4 bg-accent-cyan ml-1.5 animate-pulse inline-block" />
        </div>

        {/* Pitch Summary */}
        <p className="mt-6 text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed">
          Building production-grade web systems, high-throughput APIs, and AI-driven platforms.
          Obsessed with low-latency architectures, enterprise security, and clean engineering.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-semibold text-sm bg-accent-primary text-background hover:opacity-90 transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)]"
          >
            <Sparkles className="w-4 h-4" />
            <span>View Featured Projects</span>
          </a>

          <a
            href={PERSONAL_INFO.cvDownloadPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-semibold text-sm glass-panel border border-border hover:border-accent-cyan/50 text-foreground transition-all hover:bg-surface-card-hover"
          >
            <FileDown className="w-4 h-4 text-accent-cyan" />
            <span>Download Curriculum Vitae</span>
          </a>
        </div>

        {/* Social / Direct Coordinates Quick Bar */}
        <div className="mt-10 flex items-center gap-4 text-sm font-mono-hud text-text-muted">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-accent-cyan transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-text-muted/60" />
          </a>
          <span>&bull;</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-accent-cyan transition-colors"
          >
            <Linkedin className="w-4 h-4 text-blue-400" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-text-muted/60" />
          </a>
          <span>&bull;</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-1.5 hover:text-accent-cyan transition-colors"
          >
            <Mail className="w-4 h-4 text-rose-400" />
            <span>Email</span>
            <ArrowUpRight className="w-3 h-3 text-text-muted/60" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 animate-bounce">
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="p-2 rounded-full border border-border/40 text-text-muted hover:text-accent-cyan transition-colors inline-block"
          >
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
