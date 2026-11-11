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
      text: "ANSH MEHTA // DEVELOPER SHELL v3.0\nType 'help' to view available commands.",
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
        text: `Command not recognized: '${cmd}'. Type 'help' to view available commands.`,
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
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#121212] border border-white/10 text-xs font-medium text-neutral-300 hover:text-white hover:border-[#e50914] transition-all shadow-xl focus:outline-none"
          title="Open interactive terminal"
        >
          <Terminal className="w-3.5 h-3.5 text-[#e50914]" />
          <span>Terminal</span>
        </button>
      )}

      {isOpen && (
        <div
          className={`fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-40 w-[92vw] sm:w-[480px] bg-[#121212] rounded-lg border border-white/10 shadow-2xl transition-all duration-200 overflow-hidden ${
            isMinimized ? "h-11" : "h-[360px]"
          }`}
          role="region"
          aria-label="Terminal emulator"
        >
          {/* Title Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.08] bg-[#161616]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e50914] inline-block" />
              <span className="text-xs font-mono text-white">
                ansh@portfolio:~$
              </span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:text-white p-1"
                aria-label="Minimize terminal"
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minus className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-white p-1"
                aria-label="Close terminal"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Screen */}
          {!isMinimized && (
            <div className="flex flex-col h-[calc(100%-44px)] p-4 bg-black/90 font-mono text-xs">
              <div className="flex-1 overflow-y-auto space-y-2 pr-1">
                {history.map((item, index) => (
                  <div
                    key={index}
                    className={`whitespace-pre-wrap leading-relaxed ${
                      item.type === "input"
                        ? "text-red-400 font-semibold"
                        : "text-neutral-300"
                    }`}
                  >
                    {item.text}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Form Input */}
              <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2 border-t border-white/[0.08] mt-2">
                <span className="text-[#e50914] font-bold">&gt;</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type 'help'..."
                  className="flex-1 bg-transparent text-white placeholder-neutral-600 focus:outline-none text-xs"
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
