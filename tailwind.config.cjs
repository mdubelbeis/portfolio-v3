/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        paleLilac: "#e8e5e9",
        secondaryText: "#e8e5e9",
        // primaryBg: "#172454",
        primaryBg: "#253f4b",
        primaryText: "#446879",
        buttonBg: "#22C55D",
        buttonBgHover: "#1D9E4F",
      },
      fontFamily: {
        abril: ["Abril Fatface", "cursive"],
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
