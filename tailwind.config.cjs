/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        darkPurple: "#1C0024",
        deepPlum: "#321939",
        royalPurple: "#49324f",
        amethyst: "#604c65",
        smokeyLavender: "#76667b",
        dustyLilac: "#8d7f91",
        silverPlum: "#a499a7",
        mauveMist: "#bab2bd",
        pearlGray: "#d1ccd3",
        paleLilac: "#e8e5e9",
      },
    },
  },
  plugins: [require("daisyui")],
};
