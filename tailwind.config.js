/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      Orange:'hsl(25, 97%, 53%)',
      White: 'hsl(0, 0%, 100%)',
      Light_Grey: 'hsl(217, 12%, 63%)',
      Dark_Blue: 'hsl(213, 19%, 18%)',
      Very_Dark_Blue: 'hsl(216, 12%, 8%)'
    },
    fontFamily:{
      overpass: ['Overpass', 'sans-serif']
    }
  },
  plugins: [],
}