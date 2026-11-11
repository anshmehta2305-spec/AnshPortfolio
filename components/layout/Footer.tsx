"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/content";
import { ArrowUp, Github, Linkedin, Mail, Copy, Check, Heart } from "lucide-react";

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
    <footer className="relative border-t border-border bg-surface/30 backdrop-blur-md pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-border">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-surface border border-accent-cyan/30 flex items-center justify-center font-display font-bold text-accent-cyan text-sm">
                AM
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                Ansh Mehta
              </span>
            </div>
            <p className="text-sm text-text-muted max-w-md leading-relaxed">
              Full-Stack Developer and B.Tech CSE student building production-style web applications, resilient backend architectures, and AI-driven platforms.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono-hud">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{PERSONAL_INFO.status}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <div className="text-xs font-mono-hud text-text-muted uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-text-muted hover:text-accent-cyan transition-colors">
                  About Engineer
                </a>
              </li>
              <li>
                <a href="#projects" className="text-text-muted hover:text-accent-cyan transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-text-muted hover:text-accent-cyan transition-colors">
                  Tech Stack & Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-text-muted hover:text-accent-cyan transition-colors">
                  Job Simulations
                </a>
              </li>
              <li>
                <a href="#education" className="text-text-muted hover:text-accent-cyan transition-colors">
                  Education & Certs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Coordinates */}
          <div className="space-y-3">
            <div className="text-xs font-mono-hud text-text-muted uppercase tracking-wider">
              Coordinates
            </div>
            <div className="space-y-2 text-sm">
              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-between p-2 rounded-lg border border-border bg-surface/50 hover:border-accent-cyan/40 text-text-muted hover:text-foreground text-xs font-mono-hud transition-colors"
                title="Click to copy email"
              >
                <span className="truncate">{PERSONAL_INFO.email}</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-accent-emerald flex-shrink-0" />
                ) : (
                  <Copy className="w-3.5 h-3.5 flex-shrink-0" />
                )}
              </button>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border bg-surface/50 text-text-muted hover:text-foreground hover:border-accent-cyan/40 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border bg-surface/50 text-text-muted hover:text-foreground hover:border-accent-cyan/40 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 rounded-lg border border-border bg-surface/50 text-text-muted hover:text-foreground hover:border-accent-cyan/40 transition-colors"
                  aria-label="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <div className="text-xs text-text-muted pt-1">
                {PERSONAL_INFO.location}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-hud text-text-muted">
          <div>
            &copy; {new Date().getFullYear()} Ansh Mehta. Designed with precision & Next.js 14.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> & Next.js
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-1.5 rounded-lg border border-border bg-surface hover:text-accent-cyan transition-colors"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
