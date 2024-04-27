import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        background: {
          100: "#d2cede",
          200: "#bbb6ce",
          300: "#a49ebd",
          400: "#8e86ad",
          500: "#776d9d",
          600: "#60558c",
          700: "#493d7c",
          800: "#33246b",
          900: "#1c0c5b",
        },
        primary: {
          100: "#F4F4EB",
          200: "#F2F2E9",
          300: "#F1F1E6",
          400: "#D9D9CF",
          500: "#C1C1B8",
          600: "#A9A9A1",
          700: "#91918A",
          800: "#797973",
          900: "#60605c",
        },
        secondary: {
          100: "#A5DEC7",
          200: "#93D7BB",
          300: "#81D0B0",
          400: "#6FC9A5",
          500: "#5DC399",
          600: "#4BBC8E",
          700: "#44A980",
          800: "#3C9672",
          900: "#358463",
        },
      },
    },
  },
  plugins: [],
};

export default config;
