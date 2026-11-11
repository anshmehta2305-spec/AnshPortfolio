"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

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
    // Dark-first default, read user's saved preference
    const stored = localStorage.getItem("ansh-theme") as "dark" | "light" | null;
    const initialTheme = stored === "light" ? "light" : "dark";
    setTheme(initialTheme);
    applyTheme(initialTheme);

    const handleThemeChange = (e: Event) => {
      const customEvt = e as CustomEvent<"dark" | "light">;
      if (customEvt.detail) {
        setTheme(customEvt.detail);
      }
    };

    window.addEventListener("theme-change", handleThemeChange);
    return () => window.removeEventListener("theme-change", handleThemeChange);
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
    } catch {
      // LocalStorage access handling if blocked
    }
    applyTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full border border-line-primary bg-bg-secondary" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="relative p-2 rounded-full border border-line-primary bg-bg-card hover:bg-bg-card-hover text-txt-secondary hover:text-txt-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-crimson/40 cursor-pointer flex items-center justify-center flex-shrink-0 shadow-sm"
    >
      <div className="relative w-4 h-4 flex items-center justify-center pointer-events-none">
        {theme === "dark" ? (
          <Sun className="w-4 h-4 text-txt-primary transition-transform duration-200 hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-crimson transition-transform duration-200 hover:-rotate-12" />
        )}
      </div>
    </button>
  );
}
