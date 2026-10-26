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
        heritage: {
          ivory: "#FAF7F2",
          cream: "#F4EFE6",
          sandstone: "#D4A373",
          sandstoneDark: "#B58252",
          terracotta: "#C86446",
          terracottaDark: "#9A3412",
          maroon: "#7C1D24",
          maroonDark: "#541217",
          gold: "#D4AF37",
          goldLight: "#F0DC82",
          goldDark: "#996515",
          peacock: "#0F4C5C",
          peacockDark: "#0B3844",
          emerald: "#1B4332",
          brass: "#C69214",
          slate: "#2C3E50",
          charcoal: "#1A1A1A",
        },
      },
      fontFamily: {
        serif: ["Cinzel", "Georgia", "serif"],
        display: ["Cinzel Decorative", "Cinzel", "serif"],
        sans: ["Outfit", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "mandala-subtle": "radial-gradient(circle, rgba(212,175,55,0.06) 1px, transparent 1px)",
        "jali-pattern": "repeating-linear-gradient(45deg, rgba(212,175,55,0.04) 0px, rgba(212,175,55,0.04) 10px, transparent 10px, transparent 20px)",
      },
      animation: {
        "float-gentle": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
