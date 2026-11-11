"use client";

import React from "react";
import { PERSONAL_INFO, KEY_METRICS } from "@/data/content";
import { User, Cpu, ShieldCheck, Zap, TerminalSquare } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="p-1.5 rounded-md bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan">
            <User className="w-4 h-4" />
          </span>
          <span className="text-xs font-mono-hud text-accent-cyan uppercase tracking-wider">
            01 // Engineering Profile
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio & Core Tenets */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
              Crafting scalable full-stack software with deep architectural rigor.
            </h2>

            <p className="text-base text-text-muted leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* Architecture Highlights Pill Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl glass-panel border border-border">
                <div className="flex items-center gap-2.5 text-accent-cyan font-semibold text-sm mb-1.5">
                  <Cpu className="w-4 h-4" />
                  <span>Production Architectures</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Next.js 14 App Router, React 18, and FastAPI backends engineered for sub-100ms response latencies and high availability.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-border">
                <div className="flex items-center gap-2.5 text-accent-emerald font-semibold text-sm mb-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Security & Integrity</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  AES-256 encryption, TOTP 2FA, HMAC webhooks, Zod request validation, and multi-tier RBAC across all sensitive flows.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-border">
                <div className="flex items-center gap-2.5 text-accent-indigo font-semibold text-sm mb-1.5">
                  <Zap className="w-4 h-4" />
                  <span>Data & AI Integration</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Translating real-world operational challenges into applied ML, custom NLP pipelines (TF-IDF), and algorithmic solvers.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-border">
                <div className="flex items-center gap-2.5 text-accent-amber font-semibold text-sm mb-1.5">
                  <TerminalSquare className="w-4 h-4" />
                  <span>Automated Quality Assurance</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Rigorous test suites using Chrome DevTools Protocol (CDP) and unit harnesses verifying accessibility, XSS immunity, and multi-viewport fidelity.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Key Metrics HUD */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl glass-panel border border-accent-cyan/25 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/5 rounded-full blur-2xl pointer-events-none" />

              <div className="text-xs font-mono-hud text-accent-cyan uppercase tracking-wider mb-6 flex items-center justify-between">
                <span>System Verified Metrics</span>
                <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {KEY_METRICS.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-surface/60 border border-border/60 hover:border-accent-cyan/40 transition-colors"
                  >
                    <div className="text-3xl sm:text-4xl font-display font-extrabold text-foreground">
                      {metric.value}
                    </div>
                    <div className="text-xs font-semibold text-accent-cyan mt-1">
                      {metric.label}
                    </div>
                    <div className="text-[11px] text-text-muted mt-0.5 leading-snug">
                      {metric.detail}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 text-xs font-mono-hud text-text-muted flex items-center justify-between">
                <span>Core Target: SDE / Full-Stack</span>
                <span className="text-foreground font-semibold">Ready to Deploy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
