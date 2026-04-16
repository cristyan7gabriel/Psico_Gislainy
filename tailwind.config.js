/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F9F7F2',
        'cream-dark': '#F0EDE6',
        'teal': '#3D5A5A',
        'teal-dark': '#2C4343',
        'teal-light': '#4A6B6B',
        'terracotta': '#C4836A',
        'terracotta-light': '#D4A08B',
        'sand': '#D4C5B0',
        'sage': '#8FA89A',
        'charcoal': '#2A2A2A',
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
