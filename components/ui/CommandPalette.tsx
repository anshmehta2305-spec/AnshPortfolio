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
  User: <User className="w-3.5 h-3.5 text-brand-lime" />,
  Code: <Code className="w-3.5 h-3.5 text-brand-lime" />,
  Cpu: <Cpu className="w-3.5 h-3.5 text-brand-lime" />,
  Briefcase: <Briefcase className="w-3.5 h-3.5 text-brand-lime" />,
  GraduationCap: <GraduationCap className="w-3.5 h-3.5 text-brand-lime" />,
  Mail: <Mail className="w-3.5 h-3.5 text-brand-orange" />,
  Copy: <Copy className="w-3.5 h-3.5 text-brand-lime" />,
  FileText: <FileText className="w-3.5 h-3.5 text-brand-lime" />,
  Github: <Github className="w-3.5 h-3.5 text-foreground" />,
  Linkedin: <Linkedin className="w-3.5 h-3.5 text-brand-lime" />,
  Sun: <Sun className="w-3.5 h-3.5 text-brand-lime" />,
};

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);

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
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="w-full max-w-xl bg-[#0e1117] rounded-sm border border-brand-lime shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-[#11141a]">
          <Search className="w-4 h-4 text-brand-lime" />
          <input
            type="text"
            placeholder="Type a command or filter routines (e.g. projects, resume, email)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-foreground placeholder-text-muted/60 focus:outline-none text-xs font-mono-hud"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-sm text-text-muted hover:text-brand-lime"
            aria-label="Close command palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-1 divide-y divide-border/20">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono-hud text-text-muted">
              // NO MATCHING TELEMETRY ROUTINES
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.action)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-sm text-left text-xs font-mono-hud transition-colors ${
                    isSelected
                      ? "bg-brand-lime text-black font-extrabold"
                      : "text-foreground/90 hover:bg-[#161a22]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="p-1 rounded-sm bg-black/40 border border-border">
                      {ICON_MAP[item.icon] || <Command className="w-3.5 h-3.5 text-text-muted" />}
                    </span>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className={`text-[10px] ${isSelected ? "text-black/80" : "text-text-muted"}`}>
                        [{item.category}]
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold">
                    SELECT &crarr;
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-border bg-[#11141a] flex items-center justify-between text-[10px] text-text-muted font-mono-hud">
          <div className="flex items-center gap-3">
            <span>&uarr;&darr; NAVIGATE</span>
            <span>&crarr; EXECUTE</span>
            <span>ESC DISMISS</span>
          </div>
          {copied && (
            <span className="text-brand-lime flex items-center gap-1 font-bold">
              <Check className="w-3 h-3" /> EMAIL COPIED
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
