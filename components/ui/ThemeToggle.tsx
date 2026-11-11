"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("ansh-theme") as "dark" | "light" | null;
    if (stored) {
      setTheme(stored);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("ansh-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-border bg-surface/50" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative p-2 rounded-lg border border-border bg-surface/60 hover:bg-surface-card-hover text-foreground/80 hover:text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 hover:border-accent-cyan/40"
      title={`Toggle theme (current: ${theme})`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === "dark" ? (
          <Sun className="w-4 h-4 text-accent-cyan animate-in fade-in zoom-in duration-200" />
        ) : (
          <Moon className="w-4 h-4 text-accent-indigo animate-in fade-in zoom-in duration-200" />
        )}
      </div>
    </button>
  );
}
