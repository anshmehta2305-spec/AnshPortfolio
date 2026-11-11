"use client";

import React, { useState, useEffect } from "react";
import { NAV_LINKS, PERSONAL_INFO } from "@/data/content";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Command, Menu, X, FileDown } from "lucide-react";

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
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3.5 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.06] shadow-sm"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Minimalist Monogram Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Ansh Mehta Home"
          >
            <div className="w-8 h-8 rounded-sm bg-neutral-900 border border-white/10 flex items-center justify-center font-sans font-bold text-sm text-white group-hover:border-red-600 transition-colors">
              AM
            </div>
            <span className="font-sans font-semibold text-sm tracking-tight text-white group-hover:text-red-500 transition-colors">
              Ansh Mehta
            </span>
          </a>

          {/* Desktop Minimal Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const secId = link.href.replace("#", "");
              const isActive = activeSection === secId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-medium tracking-wide transition-colors ${
                    isActive
                      ? "text-red-500 font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Utilities */}
          <div className="flex items-center gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden lg:flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-white/10 bg-white/[0.02] hover:border-white/20 text-neutral-400 hover:text-white text-xs font-mono transition-colors"
              title="Open Command Palette (Ctrl+K / Cmd+K)"
            >
              <Command className="w-3.5 h-3.5 text-neutral-400" />
              <span>⌘K</span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CV Download */}
            <a
              href={PERSONAL_INFO.cvDownloadPath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md text-xs font-medium bg-red-600 hover:bg-red-500 text-white transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md border border-white/10 bg-neutral-900 text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-red-500" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-[#0a0a0a]/98 backdrop-blur-2xl md:hidden pt-28 px-6 flex flex-col justify-between pb-8 animate-in slide-in-from-top-6 duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="space-y-4">
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest pb-2 border-b border-white/10">
              Navigation
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-xl font-sans font-medium text-white hover:text-red-500 transition-colors py-1.5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <a
              href={PERSONAL_INFO.cvDownloadPath}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-red-600 text-white font-medium text-sm"
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
