/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16181C",
        slate2: "#4B5158",
        mist: "#F5F6F4",
        line: "#E4E6E3",
        brand: {
          DEFAULT: "#067647",
          dark: "#055C37",
          soft: "#EAF5EF",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        wrap: "72rem",
      },
    },
  },
  plugins: [],
};
