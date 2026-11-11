"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroLoaderProps {
  onComplete: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("MOUNTING CORE ENGINE...");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion, skip quickly
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
            setTimeout(onComplete, 400);
          }, 200);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 20) + 10;
        if (next > 40 && next < 70) {
          setStatusText("LOADING 3D MESH & GRAPHICS...");
        } else if (next >= 70) {
          setStatusText("ESTABLISHING ARCHITECTURE HUD...");
        }
        return next > 100 ? 100 : next;
      });
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090e] text-foreground font-mono-hud select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.45, ease: "easeInOut" } }}
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-grid-blueprint opacity-20 pointer-events-none" />

          <div className="relative z-10 w-full max-w-md px-6 text-center space-y-6">
            {/* Monogram Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan text-2xl font-display font-extrabold shadow-[0_0_25px_rgba(0,240,255,0.3)]"
            >
              AM
            </motion.div>

            {/* Headline */}
            <div>
              <h1 className="text-xl sm:text-2xl font-display font-bold tracking-tight text-white">
                ANSH MEHTA
              </h1>
              <p className="text-xs text-text-muted mt-1 uppercase tracking-widest">
                Full-Stack Developer &bull; Engineer Portfolio
              </p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-text-muted">
                <span className="text-accent-cyan">{statusText}</span>
                <span className="text-white font-bold">{progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent-indigo via-accent-cyan to-accent-emerald shadow-[0_0_10px_#00f0ff]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Skip action */}
            <button
              onClick={() => {
                setIsDone(true);
                setTimeout(onComplete, 200);
              }}
              className="text-[11px] text-text-muted/60 hover:text-accent-cyan transition-colors uppercase underline cursor-pointer"
            >
              Skip Intro &rarr;
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
