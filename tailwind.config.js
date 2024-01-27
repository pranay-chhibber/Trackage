/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./tracking.js",
    "./carousel.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily:{
      Josefin: 'Josefin Sans',
      Poiret: 'Poiret One',
    }
  },
  plugins: [],
}

