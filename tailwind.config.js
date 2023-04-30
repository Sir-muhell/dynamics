/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Questrial"],
      },
      colors: {
        primary: "#000000",
        secondary: "#161616",
        tertiary: "#6D6D6D",
      },
    },
  },
};
