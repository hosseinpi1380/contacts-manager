/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        lalezar:['lalezar','sans-serif'],
        vazir:['vazir','sans-serif']
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

