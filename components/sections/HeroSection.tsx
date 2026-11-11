"use client";

import React from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/content";
import { ArrowRight, FileDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function HeroSection() {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-bg-primary transition-colors duration-300"
    >
      {/* Subtle crimson studio atmospheric glow matching the portrait */}
      <div
        className="absolute top-1/4 right-10 lg:right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none opacity-20 dark:opacity-25 blur-[140px]"
        style={{ background: "radial-gradient(circle, #e50914 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Strategic Negative Space (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-bg-card border border-line-primary text-xs text-txt-secondary shadow-sm">
              <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
              <span className="font-medium tracking-wide">Available for Full-Stack &amp; Software Roles</span>
              <span className="text-txt-muted">|</span>
              <span className="text-txt-secondary flex items-center gap-1 text-[11px]">
                <MapPin className="w-3 h-3 text-crimson" />
                India
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold tracking-tight text-txt-primary leading-[1.05]">
                Ansh Mehta
              </h1>
              <p className="text-xl sm:text-2xl font-light text-txt-secondary tracking-tight">
                Full-Stack Developer &amp; Software Engineer
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-txt-secondary leading-relaxed max-w-xl font-normal">
              Final-year B.Tech CSE student specializing in high-performance web systems using the MERN stack, Next.js 14, and Python/FastAPI. Passionate about clean architecture, sub-100ms APIs, and applied AI.
            </p>

            {/* Sleek Minimalist Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-sm font-semibold bg-crimson hover:bg-crimson-hover text-white transition-all duration-200 shadow-md shadow-crimson/25"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.cvDownloadPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-sm font-medium bg-bg-card border border-line-primary text-txt-primary hover:border-line-hover hover:bg-bg-card-hover transition-all duration-200 shadow-sm"
              >
                <FileDown className="w-4 h-4 text-txt-muted" />
                <span>Curriculum Vitae</span>
              </a>
            </div>

            {/* Direct Minimalist Handles */}
            <div className="pt-4 flex items-center gap-6 text-xs text-txt-secondary">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-txt-primary transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-txt-muted">&bull;</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-txt-primary transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-txt-muted">&bull;</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-txt-primary transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Portrait Image - Elevated Floating Card in Light Mode, Studio Blend in Dark Mode */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative py-2">
            <div className="relative w-full max-w-[390px] sm:max-w-[420px]">
              
              {/* Floating Card Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-crimson/25 dark:border-transparent bg-bg-card shadow-[0_20px_50px_rgba(0,0,0,0.18)] dark:shadow-none transition-all duration-300 group">
                
                {/* The Hero Image: 100% Crisp & Sharp (Zero muddy fade in Light Mode) */}
                <Image
                  src="/ansh-hero.jpg"
                  alt="Ansh Mehta Portrait"
                  fill
                  priority
                  className="object-cover object-top select-none transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 420px"
                />

                {/* Dark Mode ONLY Edge Fade: Completely inactive in Light Mode, seamless in Dark Mode */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-300 hero-portrait-fade"
                  aria-hidden="true"
                />
              </div>

              {/* Decorative Subtle Accent Tag under Card in Light Mode */}
              <div className="hidden sm:flex items-center justify-between mt-3 px-2 text-[11px] font-mono text-txt-muted opacity-80 dark:hidden">
                <span>PORTRAIT // 2026</span>
                <span className="flex items-center gap-1.5 text-crimson font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
                  Full-Stack Studio
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
