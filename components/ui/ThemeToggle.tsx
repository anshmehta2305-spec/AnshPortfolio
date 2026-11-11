"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  // Apply theme to DOM documentElement
  const applyTheme = (t: "dark" | "light") => {
    document.documentElement.setAttribute("data-theme", t);
    if (t === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
    // Dark-first priority: check localStorage, otherwise default to "dark"
    const stored = localStorage.getItem("ansh-theme") as "dark" | "light" | null;
    const initialTheme = stored === "light" ? "light" : "dark";
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const toggleTheme = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    try {
      localStorage.setItem("ansh-theme", nextTheme);
    } catch (err) {
      // LocalStorage access handling if disabled
    }
    applyTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full border border-white/10 bg-neutral-900/50" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="relative p-2 rounded-full border border-white/10 dark:border-white/10 light:border-black/10 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-600/50 cursor-pointer flex items-center justify-center flex-shrink-0"
    >
      <div className="relative w-4 h-4 flex items-center justify-center pointer-events-none">
        {theme === "dark" ? (
          <Sun className="w-4 h-4 text-neutral-300 hover:text-white transition-colors" />
        ) : (
          <Moon className="w-4 h-4 text-[#e50914] transition-colors" />
        )}
      </div>
    </button>
  );
}
