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
    <footer className="relative border-t border-white/[0.06] bg-[#0a0a0a] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e50914] inline-block" />
              <span className="font-extrabold text-base text-white">
                Ansh Mehta
              </span>
              <span className="text-neutral-500">|</span>
              <span className="text-neutral-400 font-normal">Full-Stack Developer</span>
            </div>
            <p className="text-[#a0a0a0] max-w-md leading-relaxed font-normal text-sm">
              B.Tech Computer Science &amp; Engineering final year. Specializing in high-performance web systems, MERN stack, Next.js 14, and Python/FastAPI.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#a0a0a0] text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e50914] animate-pulse inline-block" />
              <span>Available for Full-Stack &amp; Software Roles</span>
            </div>
          </div>

          {/* Quick Routing */}
          <div className="space-y-3">
            <div className="text-xs text-white font-semibold uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-[#a0a0a0]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Technical Stack
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-white transition-colors">
                  Education &amp; Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Comms */}
          <div className="space-y-3">
            <div className="text-xs text-white font-semibold uppercase tracking-wider">
              Connect
            </div>
            <button
              onClick={copyEmail}
              className="w-full text-left p-3 rounded-md border border-white/[0.08] bg-[#121212] hover:border-white/20 text-[#a0a0a0] hover:text-white transition-all flex items-center justify-between"
              title="Click to copy email"
            >
              <span className="truncate">{PERSONAL_INFO.email}</span>
              {copied ? (
                <span className="text-red-400 font-medium text-[11px] flex items-center gap-1">
                  <Check className="w-3 h-3" /> Copied
                </span>
              ) : (
                <span className="text-neutral-500 text-[11px] flex items-center gap-1">
                  <Copy className="w-3 h-3" /> Copy
                </span>
              )}
            </button>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-md border border-white/[0.08] bg-[#121212] text-[#a0a0a0] hover:text-white hover:border-white/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-md border border-white/[0.08] bg-[#121212] text-[#a0a0a0] hover:text-[#e50914] hover:border-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-md border border-white/[0.08] bg-[#121212] text-[#a0a0a0] hover:text-white hover:border-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Ansh Mehta. Built with Next.js 14, TypeScript &amp; Tailwind CSS.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-neutral-400">
              {PERSONAL_INFO.location}
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#a0a0a0] hover:text-white transition-colors"
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
