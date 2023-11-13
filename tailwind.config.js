/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: "#333333",
      },
      fontFamily: {
        mono: ["Monomaniac One"],
        yusei: ["Yusei Magic"],
      },
    },
  },
  plugins: [],
};
