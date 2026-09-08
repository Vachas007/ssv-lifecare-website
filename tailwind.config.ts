import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f8',
          100: '#d9f0ed',
          200: '#b3e1dd',
          300: '#7ec8ca',
          400: '#4aafb3',
          500: '#2d9fa7',
          600: '#1f7a83',
          700: '#1a5f6a',
          800: '#184c56',
          900: '#163e48',
          950: '#0d252d',
        },
        secondary: {
          50: '#f0fdf8',
          100: '#d9fef1',
          200: '#b3fce3',
          300: '#7efad3',
          400: '#4af8bf',
          500: '#1ef9ad',
          600: '#0ce892',
          700: '#09b377',
          800: '#0d8b5d',
          900: '#0d704d',
          950: '#04402a',
        },
        accent: {
          50: '#f0f9fb',
          100: '#d9f1f6',
          200: '#b3e4f0',
          300: '#7ecce5',
          400: '#4ab3d9',
          500: '#2a9acc',
          600: '#1f7bb0',
          700: '#1a5f8a',
          800: '#184c72',
          900: '#163e5d',
          950: '#0d253a',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
        slideDown: 'slideDown 0.5s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config