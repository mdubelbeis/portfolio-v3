/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        darkPurple: "#1C0024",
        textPurple: "#580071",
        deepPlum: "#321939",
        royalPurple: "#49324f",
        amethyst: "#604c65",
        smokeyLavender: "#76667b",
        dustyLilac: "#8d7f91",
        silverPlum: "#a499a7",
        mauveMist: "#bab2bd",
        pearlGray: "#d1ccd3",
        paleLilac: "#e8e5e9",

        primaryPink: "#DB2877",
        dullPinkLighter: "#F04FA0",
        lightPink: "#F46FB2",
        primaryPinkLightest: "#F8A1C9",
        primaryPinkLightest: "#FBC3E0",
        primaryPinkLightest: "#FDE5F7",
      },
      fontFamily: {
        abril: ["Abril Fatface", "cursive"],
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
