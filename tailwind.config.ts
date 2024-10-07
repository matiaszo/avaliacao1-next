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
        darkYellow: "var(--darkYellow)",
        yellow: "var(--yellow)",
        lightYellow: "var(--lightYellow)",
        blue: "var(--blue)",
        black: "var(--black)",
        white: "var(--white)"
      },
    },
  },
  plugins: [],
};
export default config;
