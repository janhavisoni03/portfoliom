import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#050816",
          900: "#0B1120",
          800: "#111827",
        },
        signal: {
          teal: "#2DD4BF",
          cyan: "#22D3EE",
          amber: "#F5A524",
          rose: "#FB7185",
        },
        glass: {
          border: "rgba(148, 197, 210, 0.14)",
          fill: "rgba(17, 24, 39, 0.45)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "aurora-1":
          "radial-gradient(circle at 20% 20%, rgba(45,212,191,0.20), transparent 55%)",
        "aurora-2":
          "radial-gradient(circle at 80% 30%, rgba(34,211,238,0.16), transparent 55%)",
        "aurora-3":
          "radial-gradient(circle at 50% 80%, rgba(245,165,36,0.10), transparent 55%)",
        "grid-lines":
          "linear-gradient(rgba(148,197,210,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,197,210,0.06) 1px, transparent 1px)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0,0,0,0.37)",
        "glow-teal": "0 0 40px rgba(45,212,191,0.35)",
        "glow-cyan": "0 0 40px rgba(34,211,238,0.30)",
        "glow-amber": "0 0 30px rgba(245,165,36,0.35)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(45,212,191,0.45)" },
          "70%": { boxShadow: "0 0 0 14px rgba(45,212,191,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(45,212,191,0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
