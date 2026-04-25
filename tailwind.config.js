/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FCFAFC',
        'cream-dark': '#F4EEF4',
        'teal': '#8374A6', // was teal, now lavender
        'teal-dark': '#5B4E7A', // was teal-dark, now dark lavender
        'teal-light': '#AFA2C9', // was teal-light, now light lavender
        'terracotta': '#C99EAB', // was terracotta, now muted rose
        'terracotta-light': '#DAB4BF', // was terracotta-light
        'sand': '#E2D1C8', // was sand, now soft beige
        'sage': '#B19CB3', // was sage, now soft mauve
        'charcoal': '#2A282C', // charcoal with a slight purple tint
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-in': 'slideIn 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
