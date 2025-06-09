/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./Menu.html",
    "./Aboutus.html",
    "./Contactus.html",
    "./src/**/*.{js,ts,jsx,tsx,html}", // If you have JS/TS files in src that might use Tailwind
  ],
  theme: {
    // To override Tailwind's default screens entirely
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
    },
   fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      edusahand: ['"Edu SA Hand"', 'cursive'], // Added quotes for font name with spaces
    },
  extend: { // To add to or modify Tailwind's default theme
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    borderRadius: {
      '4xl': '2rem',
    },
  },

theme: {
    extend: {},
  },
},
  plugins: [],
};