/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slateglass: '#07111b',
        industrial: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34, 211, 238, 0.15), 0 24px 80px rgba(0, 0, 0, 0.45)'
      },
      backgroundImage: {
        'mesh-gradient':
          'radial-gradient(circle at 20% 20%, rgba(34,211,238,0.20), transparent 24%), radial-gradient(circle at 80% 0%, rgba(6,182,212,0.16), transparent 18%), radial-gradient(circle at 80% 80%, rgba(15,23,42,0.25), transparent 28%), linear-gradient(135deg, #020617 0%, #07111b 48%, #040b14 100%)'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      }
    }
  },
  plugins: []
};