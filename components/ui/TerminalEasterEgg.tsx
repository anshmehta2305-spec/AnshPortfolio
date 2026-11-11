"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, X, Minus, Maximize2 } from "lucide-react";
import { TERMINAL_COMMANDS } from "@/data/content";

interface TerminalMessage {
  type: "input" | "output";
  text: string;
}

export default function TerminalEasterEgg() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<TerminalMessage[]>([
    {
      type: "output",
      text: "ANSH MEHTA // PORTFOLIO SHELL v2.4.0\nType 'help' to view available system routines.",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory: TerminalMessage[] = [
      ...history,
      { type: "input", text: `ansh@portfolio:~$ ${inputVal}` },
    ];

    if (cmd === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    if (TERMINAL_COMMANDS[cmd]) {
      newHistory.push({ type: "output", text: TERMINAL_COMMANDS[cmd] });
    } else {
      newHistory.push({
        type: "output",
        text: `Command not recognized: '${cmd}'. Type 'help' to inspect supported commands.`,
      });
    }

    setHistory(newHistory);
    setInputVal("");
  };

  return (
    <>
      {/* Floating launcher pill */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-3 py-2 rounded-full glass-panel border border-accent-cyan/30 text-xs font-mono-hud text-accent-cyan hover:bg-surface-card-hover transition-all duration-200 shadow-[0_0_15px_rgba(0,240,255,0.2)] focus:outline-none focus:ring-2 focus:ring-accent-cyan"
          title="Open interactive engineer terminal"
        >
          <Terminal className="w-3.5 h-3.5 text-accent-cyan animate-pulse" />
          <span>ansh@portfolio:~$</span>
        </button>
      )}

      {/* Terminal Window */}
      {isOpen && (
        <div
          className={`fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-40 w-[92vw] sm:w-[480px] glass-panel rounded-xl border border-accent-cyan/40 shadow-2xl transition-all duration-300 overflow-hidden ${
            isMinimized ? "h-11" : "h-[360px]"
          }`}
          role="region"
          aria-label="Terminal emulator"
        >
          {/* Title Bar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-surface/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-mono-hud text-text-muted ml-2">
                ansh@portfolio:~$ [bash]
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-text-muted">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:text-foreground"
                aria-label="Minimize terminal"
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minus className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:text-foreground"
                aria-label="Close terminal"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Screen & Input */}
          {!isMinimized && (
            <div className="flex flex-col h-[calc(100%-37px)] p-3 bg-black/70 font-mono-hud text-xs">
              <div className="flex-1 overflow-y-auto space-y-2 pr-1">
                {history.map((item, index) => (
                  <div
                    key={index}
                    className={`whitespace-pre-wrap leading-relaxed ${
                      item.type === "input"
                        ? "text-accent-cyan font-semibold"
                        : "text-foreground/90"
                    }`}
                  >
                    {item.text}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Command Form */}
              <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2 border-t border-border/40 mt-1">
                <span className="text-accent-cyan select-none">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type 'help'..."
                  className="flex-1 bg-transparent text-foreground placeholder-text-muted/50 focus:outline-none"
                  autoCapitalize="none"
                  autoComplete="off"
                  spellCheck="false"
                />
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
}
