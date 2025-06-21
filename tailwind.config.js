/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmserif: ['"DM Serif Display"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        work: ['"Work Sans"', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      transitionDelay: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
      },
    },
  },
  plugins: [],
}
