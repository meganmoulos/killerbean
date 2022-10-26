/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'dark-brown': '#271110',
      'medium-brown': '#966448',
      'white': '#fff',
      'black': '#000'
    },
    fontFamily: {
      'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      'serif': ['Playfair Display']
    },
  },
  plugins: [],
}
