/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        emerald: {
          ...require("daisyui/src/colors/themes")["[data-theme=emerald]"],
          "--animation-btn": "0.25s",
          "--btn-focus-scale": "0.95",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
