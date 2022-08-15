/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        boozerblue: '#56ffff'
      },
      fontFamily: {
        'elite': ['Special Elite', 'cursive'],
        'merri' : ['Merriweather', 'serif']
      }
    },
  },
  plugins: [],
}
