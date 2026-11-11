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
  User: <User className="w-3.5 h-3.5 text-crimson" />,
  Code: <Code className="w-3.5 h-3.5 text-crimson" />,
  Cpu: <Cpu className="w-3.5 h-3.5 text-crimson" />,
  Briefcase: <Briefcase className="w-3.5 h-3.5 text-crimson" />,
  GraduationCap: <GraduationCap className="w-3.5 h-3.5 text-crimson" />,
  Mail: <Mail className="w-3.5 h-3.5 text-crimson" />,
  Copy: <Copy className="w-3.5 h-3.5 text-crimson" />,
  FileText: <FileText className="w-3.5 h-3.5 text-crimson" />,
  Github: <Github className="w-3.5 h-3.5 text-txt-primary" />,
  Linkedin: <Linkedin className="w-3.5 h-3.5 text-crimson" />,
  Sun: <Sun className="w-3.5 h-3.5 text-crimson" />,
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
        window.open(PERSONAL_INFO.cvDownloadPath, "_blank", "noopener,noreferrer");
      } else if (action === "toggle-theme") {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        localStorage.setItem("ansh-theme", nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
        if (nextTheme === "dark") {
          document.documentElement.classList.add("dark");
          document.documentElement.classList.remove("light");
        } else {
          document.documentElement.classList.add("light");
          document.documentElement.classList.remove("dark");
        }
        window.dispatchEvent(new CustomEvent("theme-change", { detail: nextTheme }));
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
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/50 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="w-full max-w-xl bg-bg-card rounded-xl border border-line-primary shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-line-primary bg-bg-secondary">
          <Search className="w-4 h-4 text-crimson flex-shrink-0" />
          <input
            type="text"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-txt-primary placeholder-txt-muted/70 focus:outline-none text-xs"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-txt-muted hover:text-txt-primary"
            aria-label="Close command palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs text-txt-muted">
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
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left text-xs transition-colors ${
                    isSelected
                      ? "bg-crimson text-white font-semibold"
                      : "text-txt-primary hover:bg-bg-secondary"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="p-1 rounded bg-bg-secondary border border-line-primary">
                      {ICON_MAP[item.icon] || <Command className="w-3.5 h-3.5 text-txt-muted" />}
                    </span>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className={`text-[10px] ${isSelected ? "text-white/80" : "text-txt-muted"}`}>
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold">
                    Select &crarr;
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 border-t border-line-primary bg-bg-secondary flex items-center justify-between text-[11px] text-txt-muted">
          <div className="flex items-center gap-3">
            <span>&uarr;&darr; Navigate</span>
            <span>&crarr; Select</span>
            <span>ESC Dismiss</span>
          </div>
          {copied && (
            <span className="text-crimson flex items-center gap-1 font-semibold">
              <Check className="w-3 h-3" /> Email Copied
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
