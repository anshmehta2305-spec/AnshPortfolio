"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/content";
import { ArrowUp, Github, Linkedin, Mail, Copy, Check } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="relative border-t border-border bg-[#07080a] text-xs font-mono-hud pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-border/80">
          {/* Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-brand-lime inline-block" />
              <span className="font-display font-extrabold text-base uppercase text-foreground">
                Ansh Mehta // Full-Stack Engineer
              </span>
            </div>
            <p className="text-text-muted max-w-md leading-relaxed font-sans">
              B.Tech Computer Science &amp; Engineering final year. Specializing in high-performance web systems, MERN stack, Next.js 14, and Python/FastAPI.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#11141a] border border-brand-lime/40 text-brand-lime text-[10px]">
              <span className="w-1.5 h-1.5 bg-brand-lime animate-pulse inline-block" />
              <span>STATUS: DISPATCH_READY</span>
            </div>
          </div>

          {/* Quick Routing */}
          <div className="space-y-2">
            <div className="text-[10px] text-brand-lime font-bold uppercase">
              // TELEMETRY ROUTER
            </div>
            <ul className="space-y-1.5 text-text-muted">
              <li>
                <a href="#about" className="hover:text-brand-lime transition-colors">
                  [01] ABOUT DOSSIER
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-brand-lime transition-colors">
                  [02] PRODUCTION SYSTEMS
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-brand-lime transition-colors">
                  [03] TECH MATRIX
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-brand-lime transition-colors">
                  [04] JOB SIMULATIONS
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-brand-lime transition-colors">
                  [05] EDUCATION &amp; CERTS
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Comms */}
          <div className="space-y-2">
            <div className="text-[10px] text-brand-lime font-bold uppercase">
              // DIRECT CHANNELS
            </div>
            <button
              onClick={copyEmail}
              className="w-full text-left p-2.5 rounded-sm border border-border bg-[#11141a] hover:border-brand-lime text-text-muted hover:text-foreground transition-all flex items-center justify-between"
              title="Click to copy email"
            >
              <span className="truncate">{PERSONAL_INFO.email}</span>
              {copied ? (
                <span className="text-brand-lime font-bold">[COPIED]</span>
              ) : (
                <span className="text-text-muted">[COPY]</span>
              )}
            </button>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border bg-[#11141a] text-text-muted hover:text-brand-lime hover:border-brand-lime transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border bg-[#11141a] text-text-muted hover:text-brand-lime hover:border-brand-lime transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 border border-border bg-[#11141a] text-text-muted hover:text-brand-lime hover:border-brand-lime transition-colors"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-text-muted">
          <div>
            &copy; {new Date().getFullYear()} ANSH MEHTA. INDUSTRIAL SWISS ARCHITECTURE.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 p-1 px-2 border border-border bg-[#11141a] text-text-muted hover:text-brand-lime hover:border-brand-lime transition-colors"
          >
            <span>TOP OF DOSSIER</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
