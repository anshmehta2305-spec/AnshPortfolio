"use client";

import React from "react";
import { PERSONAL_INFO, KEY_METRICS } from "@/data/content";
import { Server, ShieldCheck, Cpu, Terminal } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 relative border-t border-line-primary bg-bg-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-crimson inline-block" />
          <span className="text-xs font-mono text-txt-muted uppercase tracking-widest">
            01 &bull; Engineering Background
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Bio & Core Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 reveal-blur">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-txt-primary tracking-tight leading-tight">
              Designing scalable software with architectural precision.
            </h2>

            <p className="text-base sm:text-lg text-txt-secondary leading-relaxed font-normal">
              {PERSONAL_INFO.bio}
            </p>

            {/* Core Architectural Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="p-5 rounded-lg bg-bg-card border border-line-primary shadow-theme hover:shadow-theme-hover hover:border-line-hover transition-all">
                <div className="flex items-center gap-2 text-txt-primary font-semibold text-sm mb-2">
                  <Server className="w-4 h-4 text-crimson" />
                  <span>High-Throughput Backends</span>
                </div>
                <p className="text-xs text-txt-secondary leading-relaxed">
                  FastAPI, Express.js, and Next.js server actions tuned for sub-100ms response latencies and database query efficiency.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-bg-card border border-line-primary shadow-theme hover:shadow-theme-hover hover:border-line-hover transition-all">
                <div className="flex items-center gap-2 text-txt-primary font-semibold text-sm mb-2">
                  <ShieldCheck className="w-4 h-4 text-crimson" />
                  <span>Security &amp; Encryption</span>
                </div>
                <p className="text-xs text-txt-secondary leading-relaxed">
                  AES-256 data protection, TOTP 2FA, HMAC webhook integrity, and multi-tier role-based access control (RBAC).
                </p>
              </div>

              <div className="p-5 rounded-lg bg-bg-card border border-line-primary shadow-theme hover:shadow-theme-hover hover:border-line-hover transition-all">
                <div className="flex items-center gap-2 text-txt-primary font-semibold text-sm mb-2">
                  <Cpu className="w-4 h-4 text-crimson" />
                  <span>Applied Artificial Intelligence</span>
                </div>
                <p className="text-xs text-txt-secondary leading-relaxed">
                  Integrating practical machine learning models, custom NLP pipelines (TF-IDF), and algorithmic solvers to automate workflows.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-bg-card border border-line-primary shadow-theme hover:shadow-theme-hover hover:border-line-hover transition-all">
                <div className="flex items-center gap-2 text-txt-primary font-semibold text-sm mb-2">
                  <Terminal className="w-4 h-4 text-crimson" />
                  <span>Automated Quality Assurance</span>
                </div>
                <p className="text-xs text-txt-secondary leading-relaxed">
                  50+ automated tests written across unit harnesses and headless Chrome DevTools Protocol verifying multi-viewport fidelity.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Metrics (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-lg bg-bg-card border border-line-primary shadow-theme space-y-6 reveal-blur">
            <div className="text-xs font-mono text-txt-muted uppercase tracking-widest pb-3 border-b border-line-primary">
              Verified Milestones
            </div>

            <div className="grid grid-cols-2 gap-6">
              {KEY_METRICS.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-sans font-extrabold text-txt-primary">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-crimson">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-txt-secondary leading-snug">
                    {metric.detail}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-line-primary text-xs font-mono text-txt-secondary flex items-center justify-between">
              <span>Candidate Focus:</span>
              <span className="text-txt-primary font-medium">Full-Stack / Software Engineer</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
