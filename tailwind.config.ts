import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sherogold: "#F3A712",
        sherobrick: "#C73A50",
        sherocream: "#FFF7E9",
        sherogreen: "#1E6F5C"
      }
    }
  },
  plugins: []
};

export default config;
