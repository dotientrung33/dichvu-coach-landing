import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#020817",
          900: "#061A45",
          800: "#071B3F",
          700: "#0A2A66",
          600: "#003B9A",
        },
        gold: {
          300: "#FFE7A3",
          400: "#F5C76A",
          500: "#D9A441",
          600: "#A86F12",
        },
      },
      boxShadow: {
        premium: "0 20px 60px rgba(0, 0, 0, 0.35)",
        glow: "0 14px 34px rgba(217, 164, 65, 0.28)",
        blueGlow: "0 0 28px rgba(0, 163, 255, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
