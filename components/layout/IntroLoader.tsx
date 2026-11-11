"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroLoaderProps {
  onComplete: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("CALIBRATING CAD SCHEMATICS...");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 350);
          }, 150);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 22) + 12;
        if (next > 35 && next < 70) {
          setStatusText("MOUNTING 3D WIREFRAME ENGINE...");
        } else if (next >= 70) {
          setStatusText("DEPLOYING HIGH-CRAFT TELEMETRY HUD...");
        }
        return next > 100 ? 100 : next;
      });
    }, 75);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090a0d] text-foreground font-mono-hud select-none cad-grid"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeInOut" } }}
        >
          <div className="relative z-10 w-full max-w-sm px-6 text-left space-y-5 border border-border p-6 bg-[#11141a] shadow-cad">
            {/* Top telemetry bar */}
            <div className="flex items-center justify-between text-[10px] text-text-muted pb-3 border-b border-border">
              <span className="text-brand-lime font-bold">ANSH_MEHTA // BOOT_SEQ</span>
              <span>v3.0.0</span>
            </div>

            {/* Monogram Box */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black border border-brand-lime flex items-center justify-center text-brand-lime font-extrabold text-base">
                AM
              </div>
              <div>
                <div className="text-sm font-display font-extrabold uppercase text-foreground">
                  Ansh Mehta
                </div>
                <div className="text-[10px] text-text-muted">
                  Full-Stack Engineer &bull; CSE &apos;26
                </div>
              </div>
            </div>

            {/* Progress Bar & Telemetry status */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-brand-lime uppercase font-semibold">{statusText}</span>
                <span className="text-foreground font-bold">{progress}%</span>
              </div>
              <div className="w-full h-1 bg-black overflow-hidden border border-border">
                <motion.div
                  className="h-full bg-brand-lime"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Skip */}
            <div className="text-right pt-2 border-t border-border/60">
              <button
                onClick={() => {
                  setIsDone(true);
                  setTimeout(onComplete, 100);
                }}
                className="text-[10px] text-text-muted hover:text-brand-lime transition-colors uppercase font-bold"
              >
                [ESC_BOOT &rarr;]
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
