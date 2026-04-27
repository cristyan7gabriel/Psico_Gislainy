/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          light: '#E6EBE6',
          DEFAULT: '#5B7070',
          dark: '#3D4D4D',
        },
        terracotta: {
          light: '#F5E6E1',
          DEFAULT: '#C98E7B',
          dark: '#A66E5B',
        },
        beige: {
          light: '#FCFBF7',
          DEFAULT: '#F4EFE6',
          dark: '#E8E1D5',
        },
        graphite: '#2D2926',
        charcoal: '#2D2B2A', // Keep for compatibility or replace if used elsewhere
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'ticker': 'ticker 30s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-in': 'slideIn 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
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
