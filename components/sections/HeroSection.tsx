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
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Subtle crimson studio atmospheric glow matching the portrait */}
      <div
        className="absolute top-1/4 right-10 lg:right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none opacity-20 blur-[140px]"
        style={{ background: "radial-gradient(circle, #e50914 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Strategic Negative Space (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="font-medium tracking-wide">Available for Full-Stack &amp; Software Roles</span>
              <span className="text-neutral-600">|</span>
              <span className="text-neutral-400 flex items-center gap-1 text-[11px]">
                <MapPin className="w-3 h-3 text-red-500" />
                India
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold tracking-tight text-white leading-[1.05]">
                Ansh Mehta
              </h1>
              <p className="text-xl sm:text-2xl font-light text-neutral-400 tracking-tight">
                Full-Stack Developer &amp; Software Engineer
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-[#a0a0a0] leading-relaxed max-w-xl font-normal">
              Final-year B.Tech CSE student specializing in high-performance web systems using the MERN stack, Next.js 14, and Python/FastAPI. Passionate about clean architecture, sub-100ms APIs, and applied AI.
            </p>

            {/* Sleek Minimalist Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-sm font-medium bg-[#e50914] text-white hover:bg-red-600 transition-all duration-200 shadow-lg shadow-red-950/30"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.cvDownloadPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-sm font-medium bg-transparent border border-white/20 text-white hover:border-white/40 hover:bg-white/[0.04] transition-all duration-200"
              >
                <FileDown className="w-4 h-4 text-neutral-400" />
                <span>Curriculum Vitae</span>
              </a>
            </div>

            {/* Direct Minimalist Handles */}
            <div className="pt-4 flex items-center gap-6 text-xs text-[#a0a0a0]">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-neutral-700">&bull;</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-neutral-700">&bull;</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Portrait Image with Seamless Gradient Fades (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[420px] aspect-[4/5] overflow-hidden">
              
              {/* The Hero Image */}
              <Image
                src="/ansh-hero.jpg"
                alt="Ansh Mehta Portrait"
                fill
                priority
                className="object-cover object-top select-none transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 420px"
              />

              {/* Edge Gradient Fades: Bottom, Left, and Right so it blends directly into #0a0a0a */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    linear-gradient(to top, #0a0a0a 0%, transparent 28%),
                    linear-gradient(to right, #0a0a0a 0%, transparent 12%),
                    linear-gradient(to left, #0a0a0a 0%, transparent 12%)
                  `,
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
