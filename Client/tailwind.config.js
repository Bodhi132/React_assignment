/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
      'nunito': ['Nunito', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}