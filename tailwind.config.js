/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';

module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'custom-background': 'rgba(var(--background))',
        'custom-background-secondary': 'rgba(var(--background-secondary))',
        'custom-text': 'rgba(var(--text))',
        'custom-text-secondary': 'rgba(var(--text-secondary))',
        'custom-accent': 'rgba(var(--accent))',
        'custom-button': 'rgba(var(--button))',
      },
      keyframes: {
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideInFromRight: 'slideInFromRight 0.5s ease-out',
      },
    },
  },
  plugins: [tailwindScrollbar],
};
