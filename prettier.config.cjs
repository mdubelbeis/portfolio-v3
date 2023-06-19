module.exports = {
  singleQuotes: true,
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro, *.cjs",
      options: {
        parser: "astro",
      },
    },
  ],
};
