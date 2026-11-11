"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Search,
  Command,
  User,
  Code,
  Cpu,
  Briefcase,
  GraduationCap,
  Mail,
  Copy,
  FileText,
  Github,
  Linkedin,
  Sun,
  X,
  Check,
} from "lucide-react";
import { COMMAND_PALETTE_ITEMS, PERSONAL_INFO } from "@/data/content";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  User: <User className="w-4 h-4 text-accent-cyan" />,
  Code: <Code className="w-4 h-4 text-accent-indigo" />,
  Cpu: <Cpu className="w-4 h-4 text-accent-emerald" />,
  Briefcase: <Briefcase className="w-4 h-4 text-accent-amber" />,
  GraduationCap: <GraduationCap className="w-4 h-4 text-sky-400" />,
  Mail: <Mail className="w-4 h-4 text-rose-400" />,
  Copy: <Copy className="w-4 h-4 text-accent-cyan" />,
  FileText: <FileText className="w-4 h-4 text-emerald-400" />,
  Github: <Github className="w-4 h-4 text-foreground" />,
  Linkedin: <Linkedin className="w-4 h-4 text-blue-500" />,
  Sun: <Sun className="w-4 h-4 text-yellow-400" />,
};

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Filter items based on query
  const filteredItems = useMemo(() => {
    if (!query.trim()) return COMMAND_PALETTE_ITEMS;
    return COMMAND_PALETTE_ITEMS.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const handleSelect = useCallback(
    (action: string) => {
      onClose();
      if (action.startsWith("#")) {
        const el = document.querySelector(action);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else if (action === "copy-email") {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } else if (action === "download-cv") {
        window.open(PERSONAL_INFO.cvDownloadPath, "_blank");
      } else if (action === "toggle-theme") {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        localStorage.setItem("ansh-theme", nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
        if (nextTheme === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
      } else if (action.startsWith("http")) {
        window.open(action, "_blank", "noopener,noreferrer");
      }
    },
    [onClose]
  );

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    setSelectedIndex(0);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev === 0 ? (filteredItems.length ? filteredItems.length - 1 : 0) : prev - 1
        );
      } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
        e.preventDefault();
        handleSelect(filteredItems[selectedIndex].action);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, handleSelect, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="w-full max-w-xl glass-panel rounded-xl shadow-2xl border border-accent-cyan/20 overflow-hidden transform animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-surface/40">
          <Search className="w-5 h-5 text-accent-cyan" />
          <input
            type="text"
            placeholder="Type a command or search sections..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-foreground placeholder-text-muted focus:outline-none text-sm font-sans"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-text-muted hover:text-foreground hover:bg-surface/50"
            aria-label="Close command palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-border/20">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-sm text-text-muted">
              No matching commands found.
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.action)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm transition-colors ${
                    isSelected
                      ? "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30"
                      : "text-foreground/90 hover:bg-surface/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="p-1.5 rounded-md bg-surface border border-border">
                      {ICON_MAP[item.icon] || <Command className="w-4 h-4 text-text-muted" />}
                    </span>
                    <div>
                      <div className="font-medium text-foreground">{item.title}</div>
                      <div className="text-xs text-text-muted font-mono-hud">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono-hud text-text-muted uppercase">
                    Select &crarr;
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2 border-t border-border bg-surface/30 flex items-center justify-between text-xs text-text-muted font-mono-hud">
          <div className="flex items-center gap-3">
            <span>&uarr;&darr; Navigate</span>
            <span>&crarr; Run</span>
            <span>Esc Close</span>
          </div>
          {copied && (
            <span className="text-accent-emerald flex items-center gap-1 font-sans">
              <Check className="w-3.5 h-3.5" /> Email copied!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
