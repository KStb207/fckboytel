/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#f9f9f9',
          100: '#f3f3f3',
          200: '#e8e8e8',
          300: '#d3d3d3',
          400: '#a8a8a8',
          500: '#6f6f6f',
          600: '#5f5f5f',
          700: '#484848',
          800: '#303030',
          900: '#212121',
        },
      },
      fontFamily: {
        sans: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}