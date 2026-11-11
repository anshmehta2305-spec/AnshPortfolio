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
      text: "ANSH MEHTA // INDUSTRIAL CAD SHELL v3.0\nType 'help' to inspect system routines.",
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
      { type: "input", text: `ansh@cad:~$ ${inputVal}` },
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
        text: `Command not recognized: '${cmd}'. Type 'help' to inspect available routines.`,
      });
    }

    setHistory(newHistory);
    setInputVal("");
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-3 py-2 rounded-sm bg-[#11141a] border border-brand-lime text-xs font-mono-hud text-brand-lime hover:bg-brand-lime hover:text-black transition-all shadow-tactile focus:outline-none"
          title="Open interactive engineer terminal"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>&gt;_ CLI_HUD</span>
        </button>
      )}

      {isOpen && (
        <div
          className={`fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-40 w-[92vw] sm:w-[480px] bg-[#0e1117] rounded-sm border border-brand-lime shadow-2xl transition-all duration-200 overflow-hidden ${
            isMinimized ? "h-10" : "h-[360px]"
          }`}
          role="region"
          aria-label="Terminal emulator"
        >
          {/* Title Bar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-[#11141a]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-lime inline-block" />
              <span className="text-xs font-mono-hud text-foreground ml-1">
                ansh@cad:~$ [BASH]
              </span>
            </div>
            <div className="flex items-center gap-2 text-text-muted">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:text-brand-lime"
                aria-label="Minimize terminal"
              >
                {isMinimized ? <Maximize2 className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-brand-lime"
                aria-label="Close terminal"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Terminal Screen */}
          {!isMinimized && (
            <div className="flex flex-col h-[calc(100%-37px)] p-3 bg-black font-mono-hud text-xs">
              <div className="flex-1 overflow-y-auto space-y-2 pr-1">
                {history.map((item, index) => (
                  <div
                    key={index}
                    className={`whitespace-pre-wrap leading-relaxed ${
                      item.type === "input"
                        ? "text-brand-lime font-bold"
                        : "text-foreground/90"
                    }`}
                  >
                    {item.text}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Form Input */}
              <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2 border-t border-border/40 mt-1">
                <span className="text-brand-lime font-bold">&gt;</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type 'help'..."
                  className="flex-1 bg-transparent text-foreground placeholder-text-muted/40 focus:outline-none text-xs"
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
