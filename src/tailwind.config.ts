import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic":
  //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //   },
  // },
  theme: {
    extend: {
      colors: {
        input: "var(--input)",
        ring: "var(--ring)",
        background: {
          DEFAULT: "var(--background)",
          transparent: "var(--background-transparent)",
        },
        foreground: "var(--foreground)",
        subText: "var(--sub-text)",
        gray:{
          dark: "var(--gray-dark)",
          light: "var(--gray-light)",
          medium: "var(--gray-medium)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          hover: "var(--primary-hover)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        border: {
          DEFAULT: "var(--border)",
          accent: "var(--border-accent)",
        },
      },
      button: {
        sizes: {
          large: "py-3 px-6 text-lg",
          medium: "py-2 px-4 text-md",
          small: "py-1 px-2 text-sm",
        },
        variants: {
          outline: "border-2 border-current",
          solid: "bg-current text-white",
        },
      },
    },
  },
  plugins: [],
};
export default config;
