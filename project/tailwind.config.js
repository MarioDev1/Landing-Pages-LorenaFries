/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fef7f0',
          100: '#fdecd8',
          200: '#fcdbcb',
          300: '#f9c4a8',
          400: '#f5a375',
          500: '#f08319',
          600: '#e16a0a',
          700: '#ba5208',
          800: '#94410c',
          900: '#78370e',
        },
        secondary: {
          50: '#f5f3f9',
          100: '#ede9f4',
          200: '#d3c9e3',
          300: '#b3a3cc',
          400: '#8f75b0',
          500: '#403385',
          600: '#372a6b',
          700: '#2e2157',
          800: '#261c47',
          900: '#1f173a',
        },
        accent: {
          50: '#f0f8ff',
          100: '#e0f2fe',
          200: '#cdeafb',
          300: '#a7d8f8',
          400: '#7bc2f4',
          500: '#307fc2',
          600: '#1e5f9e',
          700: '#1a4b7f',
          800: '#1a3e6a',
          900: '#1a3558',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#010102',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0, -5px, 0)' },
          '70%': { transform: 'translate3d(0, -3px, 0)' },
          '90%': { transform: 'translate3d(0, -1px, 0)' },
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '92': '23rem',
      }
    },
  },
  plugins: [],
};