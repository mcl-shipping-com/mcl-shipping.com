/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0E3A5D",
          light: "#155B8A",
          dark: "#07243A",
          accent: "#14B8A6"
        }
      },
        borderRadius: {
          '2xl': '1.25rem',
          '3xl': '1.75rem'
        }
    },
  },
  plugins: [],
};
