/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: 'rgba(0, 194, 186, 0.2)',
      },
    },
  },
  plugins: [],
}