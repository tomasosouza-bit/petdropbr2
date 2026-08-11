/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pet: {
          50: '#fffbf5',
          100: '#fef3e2',
          200: '#fde3bf',
          300: '#fcce93',
          400: '#fbaf61',
          500: '#f98b30',
          600: '#ea6c17',
          700: '#c25012',
          800: '#9a3f16',
          900: '#7c3616',
        },
        paw: {
          rose: '#ff6b81',
          teal: '#2ed573',
          purple: '#70a1ff',
          bg: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out forwards',
        'pulse-subtle': 'pulseSubtle 2s infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
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
