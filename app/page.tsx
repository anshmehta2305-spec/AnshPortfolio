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

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
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
      <div className="relative min-h-screen flex flex-col selection:bg-accent-cyan/20 selection:text-foreground">
        <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

        <main className="flex-1">
          <HeroSection />
          <AboutSection />
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

