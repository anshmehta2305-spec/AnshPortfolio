"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroLoaderProps {
  onComplete: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Loading portfolio...");
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
        const next = prev + Math.floor(Math.random() * 24) + 14;
        if (next > 40 && next < 75) {
          setStatusText("Initializing workspace & projects...");
        } else if (next >= 75) {
          setStatusText("Rendering interface...");
        }
        return next > 100 ? 100 : next;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a] text-white select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeInOut" } }}
        >
          <div className="relative z-10 w-full max-w-sm px-6 text-left space-y-6 border border-white/[0.08] p-8 bg-[#121212] rounded-xl shadow-2xl">
            {/* Top Bar */}
            <div className="flex items-center justify-between text-xs text-[#a0a0a0] pb-3 border-b border-white/[0.06]">
              <span className="flex items-center gap-2 text-white font-medium">
                <span className="w-2 h-2 rounded-full bg-[#e50914]" />
                Ansh Mehta
              </span>
              <span>2026 Portfolio</span>
            </div>

            {/* Monogram Box */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-black/60 border border-red-500/30 flex items-center justify-center text-[#e50914] font-extrabold text-lg">
                AM
              </div>
              <div>
                <div className="text-base font-bold text-white">
                  Ansh Mehta
                </div>
                <div className="text-xs text-[#a0a0a0]">
                  Full-Stack Developer &bull; CSE &apos;26
                </div>
              </div>
            </div>

            {/* Progress Bar & Status */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#a0a0a0]">{statusText}</span>
                <span className="text-white font-semibold">{progress}%</span>
              </div>
              <div className="w-full h-1 bg-black/60 rounded-full overflow-hidden border border-white/[0.06]">
                <motion.div
                  className="h-full bg-[#e50914]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Skip */}
            <div className="text-right pt-2 border-t border-white/[0.06]">
              <button
                onClick={() => {
                  setIsDone(true);
                  setTimeout(onComplete, 100);
                }}
                className="text-xs text-[#a0a0a0] hover:text-white transition-colors"
              >
                Skip intro &rarr;
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
