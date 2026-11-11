"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/content";
import { Terminal, Shield, Zap, Database, Server, GitBranch } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative border-b border-border bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-border">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-brand-lime inline-block" />
            <span className="text-xs font-mono-hud text-brand-lime uppercase font-bold tracking-widest">
              SECTION [01] // SYSTEM DOSSIER &amp; SPECIFICATIONS
            </span>
          </div>
          <span className="text-xs font-mono-hud text-text-muted hidden sm:inline-block">
            DOC_REF: AM-BTECH-CSE-2026
          </span>
        </div>

        {/* Industrial Bento Engineering Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Main Dossier Summary (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-sm bg-[#11141a] border border-border space-y-6 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono-hud text-brand-lime font-bold uppercase mb-2">
                // EXECUTIVE SUMMARY
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-foreground tracking-tight leading-snug">
                Engineering real, production-style software with full-stack discipline.
              </h2>
              <p className="mt-4 text-sm text-text-muted leading-relaxed font-sans">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Technical Parameters Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-border/60">
              <div className="p-3 bg-[#161a22] border border-border/80">
                <div className="text-[10px] font-mono-hud text-brand-lime font-bold">
                  PRIMARY STACK
                </div>
                <div className="text-xs font-bold text-foreground mt-0.5">
                  MERN + Next.js 14
                </div>
              </div>

              <div className="p-3 bg-[#161a22] border border-border/80">
                <div className="text-[10px] font-mono-hud text-brand-lime font-bold">
                  BACKEND &amp; AI
                </div>
                <div className="text-xs font-bold text-foreground mt-0.5">
                  FastAPI + Python
                </div>
              </div>

              <div className="p-3 bg-[#161a22] border border-border/80 col-span-2 sm:col-span-1">
                <div className="text-[10px] font-mono-hud text-brand-lime font-bold">
                  DATA STORES
                </div>
                <div className="text-xs font-bold text-foreground mt-0.5">
                  Postgres / Mongo / MySQL
                </div>
              </div>
            </div>
          </div>

          {/* Right Bento Quadrants (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Architectural Rigor */}
            <div className="p-5 rounded-sm bg-[#11141a] border border-border hover:border-brand-lime/40 transition-colors">
              <div className="flex items-center gap-2 text-brand-lime text-xs font-mono-hud font-bold uppercase mb-1.5">
                <Server className="w-3.5 h-3.5" />
                <span>Sub-100ms API Execution</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Relational schema normalization, database query indexing, and idempotency caching to prevent transaction collisions.
              </p>
            </div>

            {/* Cryptographic Security */}
            <div className="p-5 rounded-sm bg-[#11141a] border border-border hover:border-brand-lime/40 transition-colors">
              <div className="flex items-center gap-2 text-brand-orange text-xs font-mono-hud font-bold uppercase mb-1.5">
                <Shield className="w-3.5 h-3.5" />
                <span>Defense-in-Depth Security</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Zero-trust RBAC access controls, AES-256-GCM data encryption, HMAC webhooks, and Zod input validation schemas.
              </p>
            </div>

            {/* Automated QA Harness */}
            <div className="p-5 rounded-sm bg-[#11141a] border border-border hover:border-brand-lime/40 transition-colors">
              <div className="flex items-center gap-2 text-white text-xs font-mono-hud font-bold uppercase mb-1.5">
                <Terminal className="w-3.5 h-3.5 text-brand-lime" />
                <span>Automated CDP Quality Assurance</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Over 50 automated tests authored using Chrome DevTools Protocol and Node.js covering multi-viewport UX and accessibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
