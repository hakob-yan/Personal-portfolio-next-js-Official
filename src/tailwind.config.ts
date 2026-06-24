import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0f1a",
          900: "#0d1424",
        },
        slate: {
          850: "#111a2e",
          800: "#1a2438",
          400: "#7e8ba3",
          300: "#a7b2c6",
          100: "#e8edf5",
        },
        border: {
          subtle: "#26324a",
          strong: "#33415c",
        },
        accent: {
          400: "#5b9bd9",
          500: "#3b82c4",
          600: "#2c6699",
          soft: "rgba(59,130,196,0.12)",
        },
        metric: {
          DEFAULT: "#2dd4bf",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h1: ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h2: ["1.75rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h3: ["1.25rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
        "mono-label": [
          "0.8125rem",
          { lineHeight: "1.4", letterSpacing: "0.08em" },
        ],
      },
      spacing: {
        section: "6rem",
        "section-sm": "4rem",
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
        tag: "6px",
      },
      maxWidth: {
        container: "1200px",
        reading: "68ch",
      },
      transitionTimingFunction: {
        reveal: "cubic-bezier(0.16,1,0.3,1)",
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
