/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-darker': '#26296B',
        'primary-dark': '#272A6C',
        'primary': '#23347B',
        'primary-light': '#355EE0',
        'primary-lighter': '#4871F4'
      }
    },
  },
  plugins: [],
}
