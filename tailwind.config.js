/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      colors: {
        "bingo-purple": "#1a0b2e",
        "bingo-deep-purple": "#0f051a",
        "bingo-gold": "#fbbf24",
        "bingo-accent": "#8b5cf6",
        "bingo-green": "#10b981",
        "bingo-red": "#ef4444",
      },
    },
  },
  plugins: [],
};
