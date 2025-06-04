/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: "es5",
  tabWidth: 4,
  semi: false,
  singleQuote: true,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/tailwind.css",
};

module.exports = config;