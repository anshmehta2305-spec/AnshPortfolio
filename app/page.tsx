"use client";

import React, { useState } from "react";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import IntroLoader from "@/components/layout/IntroLoader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import MagneticCursor from "@/components/ui/MagneticCursor";
import CommandPalette from "@/components/ui/CommandPalette";
import CaseStudyModal from "@/components/ui/CaseStudyModal";
import TerminalEasterEgg from "@/components/ui/TerminalEasterEgg";
import ScrollBlurObserver from "@/components/ui/ScrollBlurObserver";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesMarqueeSection from "@/components/sections/ServicesMarqueeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationCertSection from "@/components/sections/EducationCertSection";
import GithubActivitySection from "@/components/sections/GithubActivitySection";
import ContactSection from "@/components/sections/ContactSection";

import { Project } from "@/data/content";

export default function Home() {
  const [loaderComplete, setLoaderComplete] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Global Ctrl+K / Cmd+K listener
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <SmoothScrollProvider>
      {/* Cinematic Intro Loader */}
      {!loaderComplete && <IntroLoader onComplete={() => setLoaderComplete(true)} />}

      {/* Top Scroll Progress bar */}
      <ScrollProgress />

      {/* Desktop Magnetic Cursor */}
      <MagneticCursor />

      {/* Global Scroll Reveal with Blur Observer */}
      <ScrollBlurObserver />

      {/* Global Interactive Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Deep-dive Project Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Main Page Flow */}
      <div className="relative min-h-screen flex flex-col bg-bg-primary text-txt-primary transition-colors duration-300">
        {/* Skip to Main Content Link for Keyboard / Screen Reader Accessibility (WCAG 2.4.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-md focus:bg-crimson focus:text-white focus:outline-none focus:ring-2 focus:ring-white text-xs font-semibold shadow-2xl"
        >
          Skip to Main Content
        </a>

        <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

        <main id="main-content" className="flex-1" tabIndex={-1}>
          <HeroSection />
          <AboutSection />
          <ServicesMarqueeSection />
          <ProjectsSection onOpenCaseStudy={(proj) => setSelectedProject(proj)} />
          <SkillsSection />
          <ExperienceSection />
          <EducationCertSection />
          <GithubActivitySection />
          <ContactSection />
        </main>

        <Footer />

        {/* Engineer Terminal Easter Egg */}
        <TerminalEasterEgg />
      </div>
    </SmoothScrollProvider>
  );
}

