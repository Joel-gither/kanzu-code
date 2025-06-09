// Example `tailwind.config.js` file

import { coolGray, lightBlue, rose, fuchsia } from 'tailwindcss/colors';

export const theme = {
  colors: {
    gray: coolGray,
    blue: lightBlue,
    red: rose,
    pink: fuchsia,
  },
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
    edusahand: ['Edu SA Hand', 'cursive'],
  },
  extend: {
    spacing: {
      '128': '32rem',
      '144': '36rem',
    },
    borderRadius: {
      '4xl': '2rem',
    }
  }
};
export const plugins = [];
export const variants = {
  extend: {
    borderColor: ['focus-visible'],
    opacity: ['disabled'],
  },
  plugins: [],
};