/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090A'
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))'
      },
      backgroundImage: {
        'background-dopamine': "url('/src/assets/background-dopamine.png')"
      }
    },
  },
  plugins: [],
}
