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
        // Standardized Semantic Color System
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
          card: "var(--bg-card)",
          "card-hover": "var(--bg-card-hover)",
        },
        txt: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        line: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          hover: "var(--border-hover)",
        },
        crimson: {
          DEFAULT: "var(--accent-color)",
          hover: "var(--accent-hover)",
          subtle: "var(--accent-subtle)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        theme: "var(--card-shadow)",
        "theme-hover": "var(--card-shadow-hover)",
      },
    },
  },
  plugins: [],
};
export default config;
