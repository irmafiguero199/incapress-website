/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#eef4fb',
          100: '#d9e6f5',
          200: '#b3cdea',
          300: '#84abd8',
          400: '#5585c2',
          500: '#3567a8',
          600: '#2b5aa9',
          700: '#1f3e6e',
          800: '#18305a',
          900: '#122344',
          950: '#0b182f',
        },
        sun: {
          300: '#ffd68c',
          400: '#ffc95e',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        leaf: {
          500: '#0d9488',
          600: '#0f766e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
