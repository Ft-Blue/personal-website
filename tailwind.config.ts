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
          100: "#eaedee",
          200: "#C1C8CD",
          300: "#ACB6BC",
          400: "#97A4AC",
          500: "#82919B",
          600: "#6D7F8A",
          700: "#596D79",
          800: "#445A69",
          900: "#2F4858",
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
