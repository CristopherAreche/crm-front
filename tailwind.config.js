/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        "base" : "#010922",
        "light" : "#A9CAEF",
        "primary" : "#8181D7",
        "secondary" : "#75D4DB"

      }
    },
  },
  plugins: [],
};
