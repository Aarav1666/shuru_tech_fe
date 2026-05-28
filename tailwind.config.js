/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#FFF3ED',
          100: '#FFD9C0',
          200: '#FFB38A',
          300: '#FF8C54',
          400: '#FF671F',
          500: '#CC5500',
          600: '#A34200',
          700: '#7A3000',
          800: '#521F00',
          900: '#310F00'
        },
        neutral: {
          50: '#F8F5F1',
          100: '#F1ECE6',
          200: '#DDD6CF',
          300: '#C7B7A8',
          400: '#A8957C',
          500: '#8B725C',
          600: '#705844',
          700: '#5A4537',
          800: '#483528',
          900: '#35261B'
        },
        accent: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          500: '#F59E0B',
          700: '#B45309',
          900: '#78350F'
        },
        success: {
          500: '#22C55E'
        },
        error: {
          500: '#EF4444'
        },
        warning: {
          500: '#F59E0B'
        },
        info: {
          500: '#3B82F6'
        }
      },
      fontFamily: {
        sans: ['"Playwrite GB J"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      }
    }
  }
}
