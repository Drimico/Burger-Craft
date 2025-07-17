/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#F5E6AA',
          300: '#FFEC8B',
          500: '#FFD700', 
          700: '#D4AF37',
        },
      },
    },
  },
  plugins: [],
};