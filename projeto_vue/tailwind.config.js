/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    extend: {},
    colors: {
      'background': '#09090A',
      'white': '#FFFFFF',
      'gray-600': '#27272A',
      'gray-300': '#DADADA54',
      'border': '#9D4B00',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    }
  },
  plugins: [],
}
