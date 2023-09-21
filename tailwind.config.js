/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {},
    extend: {
      colors: {
        primary: '#585858',
        'primary-low': '#686868',

        'regal-blue': '#243c5a',
      },
      fontFamily: {
        roboto: ['Roboto'],
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer'), require('flowbite/plugin')],
};
