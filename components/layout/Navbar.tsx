"use client";

import React, { useState, useEffect } from "react";
import { NAV_LINKS, PERSONAL_INFO } from "@/data/content";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Menu, X, FileDown } from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      const scrollPos = window.scrollY + 200;

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
      {/* Outer Fixed Wrapper with Fluid Top Position Transition */}
      <header
        className={`fixed left-0 right-0 z-40 flex justify-center transition-all duration-300 ease-out pointer-events-none ${
          isScrolled ? "top-3 sm:top-5 px-4 sm:px-6" : "top-0 px-0"
        }`}
      >
        {/* Dynamic Morphing Pill Container */}
        <div
          className={`pointer-events-auto flex items-center justify-between transition-all duration-300 ease-out ${
            isScrolled
              ? "w-full max-w-4xl py-2.5 px-4 sm:px-6 rounded-full backdrop-blur-xl border shadow-theme hover:shadow-theme-hover"
              : "w-full max-w-7xl py-5 px-6 sm:px-8 lg:px-12 rounded-none bg-transparent border-transparent shadow-none"
          }`}
          style={
            isScrolled
              ? {
                  backgroundColor: "var(--pill-bg)",
                  borderColor: "var(--pill-border)",
                }
              : undefined
          }
        >
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2.5 group focus:outline-none flex-shrink-0"
            aria-label="Ansh Mehta Home"
          >
            <div
              className={`rounded-full bg-bg-secondary border border-line-primary flex items-center justify-center font-sans font-bold text-xs text-txt-primary group-hover:border-crimson transition-all ${
                isScrolled ? "w-7 h-7" : "w-8 h-8 rounded-md"
              }`}
            >
              AM
            </div>
            <span
              className={`font-sans font-semibold tracking-tight text-txt-primary group-hover:text-crimson transition-colors ${
                isScrolled ? "text-xs hidden sm:inline-block" : "text-sm"
              }`}
            >
              Ansh Mehta
            </span>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            {NAV_LINKS.map((link) => {
              const secId = link.href.replace("#", "");
              const isActive = activeSection === secId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "text-txt-primary bg-bg-tertiary font-semibold"
                      : "text-txt-secondary hover:text-txt-primary hover:bg-bg-tertiary/60"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-crimson" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Utilities */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CV Download Button */}
            <a
              href={PERSONAL_INFO.cvDownloadPath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-crimson hover:bg-crimson-hover text-white transition-all duration-200 shadow-md shadow-crimson/20"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-line-primary bg-bg-card text-txt-primary hover:text-crimson transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-crimson" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-bg-primary/95 backdrop-blur-2xl md:hidden pt-28 px-6 flex flex-col justify-between pb-8 animate-in slide-in-from-top-6 duration-200 border-b border-line-primary"
          role="dialog"
          aria-modal="true"
        >
          <div className="space-y-4">
            <div className="text-xs font-mono text-txt-muted uppercase tracking-widest pb-2 border-b border-line-primary">
              Navigation
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-xl font-sans font-medium text-txt-primary hover:text-crimson transition-colors py-1.5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t border-line-primary">
            <a
              href={PERSONAL_INFO.cvDownloadPath}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-crimson hover:bg-crimson-hover text-white font-medium text-sm transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Curriculum Vitae</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
