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
        "main-bg": "#fffffe",
        "default-blue": "#1e95e7",
        "light-shade-white": "#f3f7f9",
        "dark-black": "#1e1420",
        "light-accent": "#ed996e",
        "dark-accent": "#bc3e59",
        "accent-red": "#d11305",
        "accent-blue": "#3d5695",
      },
      keyframes: {
        rollout: {
          "0%": {
            opacity: "1",
            transform: "translateX(0px) rotate(0deg)",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(100%) rotate(120deg)",
            display: "none",
          },
        },
        rollin: {
          "0%": {
            opacity: "0",
            transform: "translateX(-100%) rotate(-120deg)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0px) rotate(0deg)",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateX(-30%)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        rollout: "rollout 1s ease",
        rollin: "rollin 1s ease",
        fadeIn: "fadeIn 1s linear",
      },
      backgroundImage: {
        loginBG: "url('../../public/Mobile login-rafiki.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
