/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        primary: {
          DEFAULT: 'rgb(15, 23, 42)', 
        },
        secondary: {
          DEFAULT: '#082f49', 
          light: '#a5f3fc', 
          dark: '#155e75' 
        },
        tertiary: {
          opacity: ' #17255491', 
          light: '#', 
          dark: '#' 
        }
      },
      maxWidth: {
        'screen-content': '100vw', 
      },
    },
  },
  plugins: [],
}