import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        "surface-card": "var(--surface-card)",
        "surface-card-hover": "var(--surface-card-hover)",
        border: "var(--border)",
        "border-subtle": "var(--border-subtle)",
        // Industrial Swiss / High-Craft Palette
        brand: {
          lime: "#d4ff00", // Acid Lime / Signal Chartreuse
          orange: "#ff5500", // Signal Orange
          cyan: "#00f0ff", // Technical Cyan
          steel: "#8b949e",
          dark: "#090a0d",
          charcoal: "#12151c",
          elevated: "#181c24",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        cad: "0 0 0 1px rgba(255, 255, 255, 0.08), 0 8px 24px -4px rgba(0, 0, 0, 0.6)",
        "lime-glow": "0 0 20px -3px rgba(212, 255, 0, 0.35)",
        tactile: "0 2px 0 0 rgba(255, 255, 255, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
