import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPink: "#F222FF",
        sidebarPink: "#C21BCC",
        secondarySlate: "#2C3445",
        tertiarySlate: "#151D30",
        neoBrandTertiary: "#FF901F",
        lightAlterntive: "#A4ACC1",
        cardBgAlt: "#0B0F18",
        subcategory: "#E9EAEC",
        lightbg: "#F7F9FD",
        lighticon: "#353E58",
        fillicon: "#2C3445",
        cardwhite: "#0B0F18"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
