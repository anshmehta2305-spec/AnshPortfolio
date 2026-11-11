"use client";

import React, { useState, useEffect } from "react";
import { NAV_LINKS, PERSONAL_INFO } from "@/data/content";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Command, Menu, X, FileDown, ArrowUpRight, Terminal } from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const secId = sections[i];
        const el = document.getElementById(secId);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(secId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Industrial Telemetry Ticker (Desktop) */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1.5 bg-[#090a0d] border-b border-border/80 text-[10px] font-mono-hud text-text-muted select-none z-50 fixed top-0 left-0 right-0">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-brand-lime font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
            <span>SYS.VERIFIED // 2026.PROD</span>
          </span>
          <span className="text-white/20">|</span>
          <span>LATENCY: 72ms (DOM-READY)</span>
          <span className="text-white/20">|</span>
          <span>LOC: 22.3072° N, 73.1812° E (GUJARAT, IN)</span>
        </div>
        <div className="flex items-center gap-4">
          <span>ROLE: FULL-STACK / SDE</span>
          <span className="text-white/20">|</span>
          <span className="text-foreground">TARGET: HIGH-IMPACT PRODUCT TEAMS</span>
        </div>
      </div>

      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? "top-0 lg:top-[29px] py-3 bg-[#090a0d]/90 backdrop-blur-md border-b border-border shadow-2xl"
            : "top-0 lg:top-[29px] py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Industrial Brand Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Ansh Mehta Engineering Dossier"
          >
            <div className="w-9 h-9 rounded-sm bg-[#11141a] border border-brand-lime/60 flex items-center justify-center font-mono-hud font-extrabold text-sm text-brand-lime group-hover:bg-brand-lime group-hover:text-black transition-all shadow-[0_0_12px_rgba(212,255,0,0.2)]">
              AM
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-sm tracking-tight uppercase text-foreground group-hover:text-brand-lime transition-colors">
                Ansh Mehta
              </span>
              <span className="text-[10px] font-mono-hud text-text-muted">
                ENGINEER // CSE &apos;26
              </span>
            </div>
          </a>

          {/* Desktop Swiss Hairline Navigation */}
          <nav className="hidden md:flex items-center border border-border bg-[#11141a]/90 divide-x divide-border rounded-sm">
            {NAV_LINKS.map((link) => {
              const secId = link.href.replace("#", "");
              const isActive = activeSection === secId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2 text-xs font-mono-hud tracking-wider uppercase transition-all duration-150 ${
                    isActive
                      ? "bg-brand-lime text-black font-extrabold"
                      : "text-text-muted hover:text-foreground hover:bg-[#1a1f29]"
                  }`}
                >
                  [{link.label}]
                </a>
              );
            })}
          </nav>

          {/* Right Action Utilities */}
          <div className="flex items-center gap-2">
            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-sm border border-border bg-[#11141a] hover:border-brand-lime/60 text-text-muted hover:text-foreground text-xs font-mono-hud transition-colors"
              title="Open Command Palette (Ctrl+K / Cmd+K)"
            >
              <Command className="w-3.5 h-3.5 text-brand-lime" />
              <span>CMD+K</span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Resume Button */}
            <a
              href={PERSONAL_INFO.cvDownloadPath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm text-xs font-mono-hud font-extrabold uppercase bg-brand-lime text-black hover:bg-white transition-colors shadow-tactile"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV.PDF</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-sm border border-border bg-[#11141a] text-foreground"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-brand-lime" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-[#090a0d]/98 backdrop-blur-2xl md:hidden pt-28 px-6 flex flex-col justify-between pb-8 animate-in slide-in-from-top-6 duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="space-y-3">
            <div className="text-[11px] font-mono-hud text-brand-lime uppercase tracking-widest pb-2 border-b border-border">
              // TELEMETRY ROUTER
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-xl font-display font-bold uppercase text-foreground hover:text-brand-lime transition-colors py-2"
              >
                &rarr; {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t border-border">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-sm border border-border bg-[#11141a] text-xs font-mono-hud"
            >
              <span className="flex items-center gap-2">
                <Command className="w-4 h-4 text-brand-lime" />
                <span>COMMAND PALETTE</span>
              </span>
              <span className="text-[10px] text-text-muted">[TAP]</span>
            </button>

            <a
              href={PERSONAL_INFO.cvDownloadPath}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-sm bg-brand-lime text-black font-extrabold text-xs font-mono-hud uppercase"
            >
              <FileDown className="w-4 h-4" />
              <span>DOWNLOAD CURRICULUM VITAE</span>
              <ArrowUpRight className="w-4 h-4 ml-auto" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
