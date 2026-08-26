/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          950: '#0e020d',
          900: '#190518',
          800: '#2b0928',
          700: '#3e0d3b',
          600: '#561352',
        },
        burgundy: {
          900: '#3b061c',
          800: '#570a2b',
          700: '#750e3b',
          600: '#94144c',
          500: '#b41b5e',
        },
        gold: {
          50: '#fdfbf2',
          100: '#fbf7e2',
          200: '#f5ecb8',
          300: '#eedf8a',
          400: '#e5cc55',
          500: '#d4af37', // Royal Gold
          600: '#b78f24',
          700: '#916d1a',
          800: '#765518',
          900: '#644617',
        },
        roseGold: {
          400: '#f49da9',
          500: '#e57a8c',
          600: '#cb566b',
        },
        champagne: '#f7e7ce'
      },
      fontFamily: {
        cursive: ['"Great Vibes"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
