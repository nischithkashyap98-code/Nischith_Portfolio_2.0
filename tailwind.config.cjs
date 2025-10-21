/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class', // 👈 Important
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#b8912b',
        bg: '#060607',
        panel: '#0d0d0f',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        pop: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
