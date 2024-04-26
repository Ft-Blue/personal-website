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
        "pickled-bluewood": "#2F4858",
        "blue-bayoux": "#416379",
        merino: "#F1F1E6",
        "greeny-blue": "#4BBC8E",
      },
    },
  },
  plugins: [],
};

export default config;
