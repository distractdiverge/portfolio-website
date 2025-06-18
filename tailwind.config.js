/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8A5CE8',
          50: '#F5F1FF',
          100: '#E9E0FF',
          200: '#D3C0FF',
          300: '#B591FF',
          400: '#9D61FF',
          500: '#8A5CE8',
          600: '#7A4BD1',
          700: '#6A3AB9',
          800: '#5A29A2',
          900: '#4A188A',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
