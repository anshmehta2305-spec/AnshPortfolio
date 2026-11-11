"use client";

import React, { useState, useEffect } from "react";
import { NAV_LINKS, PERSONAL_INFO } from "@/data/content";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Command, Menu, X, FileDown, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Intersection / active section detector
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
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2 group text-foreground focus:outline-none"
            aria-label="Ansh Mehta Portfolio Home"
          >
            <div className="w-8 h-8 rounded-lg bg-surface border border-accent-cyan/30 flex items-center justify-center font-display font-extrabold text-sm text-accent-cyan group-hover:border-accent-cyan group-hover:shadow-[0_0_12px_rgba(0,240,255,0.4)] transition-all">
              AM
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight leading-tight group-hover:text-accent-cyan transition-colors">
                Ansh Mehta
              </span>
              <span className="text-[10px] font-mono-hud text-text-muted leading-tight">
                Full-Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full glass-panel border border-border">
            {NAV_LINKS.map((link) => {
              const secId = link.href.replace("#", "");
              const isActive = activeSection === secId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono-hud transition-all duration-200 ${
                    isActive
                      ? "bg-accent-cyan/15 text-accent-cyan font-semibold border border-accent-cyan/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                      : "text-text-muted hover:text-foreground hover:bg-surface/50"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Utilities (Cmd+K, Theme, CV, Mobile Toggle) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-surface/50 hover:bg-surface-card-hover text-text-muted hover:text-foreground text-xs font-mono-hud transition-colors"
              title="Open Command Palette (Ctrl+K / Cmd+K)"
            >
              <Command className="w-3.5 h-3.5 text-accent-cyan" />
              <span>Cmd+K</span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Resume button */}
            <a
              href={PERSONAL_INFO.cvDownloadPath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-hud font-semibold bg-accent-primary text-background hover:opacity-90 transition-opacity shadow-[0_0_12px_rgba(0,240,255,0.35)]"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-border bg-surface text-foreground"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8 animate-in slide-in-from-top-6 duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="space-y-4">
            <div className="text-xs font-mono-hud text-text-muted uppercase tracking-wider mb-2">
              Navigation Menu
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-xl font-display font-semibold text-foreground hover:text-accent-cyan transition-colors py-1.5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-border">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-border bg-surface text-sm font-mono-hud"
            >
              <span className="flex items-center gap-2">
                <Command className="w-4 h-4 text-accent-cyan" />
                <span>Command Palette</span>
              </span>
              <span className="text-xs text-text-muted">Tap to open</span>
            </button>

            <a
              href={PERSONAL_INFO.cvDownloadPath}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-accent-primary text-background font-semibold text-sm shadow-[0_0_15px_rgba(0,240,255,0.4)]"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV (PDF)</span>
              <ArrowUpRight className="w-4 h-4 ml-auto" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
