/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        eerieGreen: '#39FF14',
        glitchRed: '#FF4F79',
        neonCyan: '#00F0FF',
      },
      fontFamily: {
        mono: ['VT323', 'monospace'],
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        glitch: 'glitch 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glitch: {
          '0%': { textShadow: '2px 0 red' },
          '20%': { textShadow: '-2px 0 blue' },
          '40%': { textShadow: '2px 2px red' },
          '60%': { textShadow: '-2px -2px blue' },
          '80%': { textShadow: '1px -1px green' },
          '100%': { textShadow: 'none' },
        },
      },
    },
  },
  plugins: [],
}
