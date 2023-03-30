/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        base: "#010922",
        "base-light": "#353D57",
        light: "#A9CAEF",
        primary: "#8181D7",
        secondary: "#75D4DB",
      },
    },
  },
  plugins: [],
};
