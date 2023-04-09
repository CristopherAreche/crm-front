/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    screens: {
      iphone12: "390px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      display: ["group-focus"],
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

module.exports.colors = module.exports.theme.extend.colors;
