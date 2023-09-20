/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{vue,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        'theme-bg': '#f2f4fb'
      }
    }
  },
  plugins: []
}
