/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand
        primary: '#E1306C',
        secondary: '#F77737',
        tertiary: '#C13584',

        // Backgrounds
        background: '#FFFFFF',
        surface: '#FAFAFA',
        'surface-lowest': '#FFFFFF',
        'surface-container-low': '#FFF6F8',
        'surface-container': '#F7F3F5',
        'surface-container-high': '#F3F1F2',
        'surface-container-highest': '#F0EFF0',

        // Text / borders
        'on-surface': '#262626',
        'on-surface-variant': '#8E8E8E',
        'outline-variant': '#DBDBDB',
        border: '#DBDBDB',
      },

      // Custom gradient background for brand use
      backgroundImage: {
        instagram: 'linear-gradient(45deg, #F58529, #E1306C, #C13584)',
      },

      // Soft shadows tuned to the brand color
      boxShadow: {
        'soft-md': '0 8px 30px rgba(225,48,108,0.08)',
        'soft-lg': '0 18px 40px rgba(225,48,108,0.09)',
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
