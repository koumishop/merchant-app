/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans:['Montserrat', 'Oswald', 'sans-serif'],
    },
    colors:{
      'white':'#FFFFFF',
      'primary':'#FF0606',
      'secondary':'#8D99AE',
      'alt-secondary': '#D9D9D9',
      'dark': '#070111',
    },
  },
  plugins: [],
}