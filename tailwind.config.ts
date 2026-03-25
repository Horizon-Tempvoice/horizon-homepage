import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#00A0FF",
        background: "#080a10",
        surface: "#0d1017",
        "border-subtle": "#1a1f2e",
        "text-primary": "#dde2f0",
        "text-muted": "#4a5068",
      },
      animation: {
        gradient: "gradient 15s ease infinite",
        float: "float 6s ease-in-out infinite",
        "marquee-left": "marquee-left 40s linear infinite",
        "marquee-right": "marquee-right 40s linear infinite",
        "fade-in": "fadeIn 0.2s ease-out forwards",
      },
      keyframes: {
        gradient: {
          "0%":   { backgroundPosition: "0% 50%" },
          "50%":  { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        float: {
          "0%":   { transform: "translateY(0px)" },
          "50%":  { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "marquee-left": {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          from: { transform: "translateX(-50%)" },
          to:   { transform: "translateX(0)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 160, 255, 0.3)",
        "card-hover": "0 20px 40px rgba(0, 160, 255, 0.15)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
