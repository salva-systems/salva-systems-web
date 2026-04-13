import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          elevated: "rgb(var(--surface-elevated) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          strong: "rgb(var(--primary-strong) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-1": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "650" }],
        "display-2": ["2.625rem", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "620" }],
        "heading-1": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "heading-2": ["1.5rem", { lineHeight: "1.25", letterSpacing: "-0.015em", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.7", fontWeight: "450" }],
        small: ["0.875rem", { lineHeight: "1.55", fontWeight: "450" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
      borderRadius: {
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        premium: "0 20px 55px -30px rgba(2, 12, 42, 0.9), 0 10px 24px -16px rgba(0, 190, 255, 0.35)",
        glow: "0 0 0 1px rgba(0, 214, 255, 0.2), 0 0 22px rgba(0, 214, 255, 0.35)",
        "glow-soft": "0 0 0 1px rgba(65, 232, 255, 0.15), 0 0 16px rgba(65, 232, 255, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
