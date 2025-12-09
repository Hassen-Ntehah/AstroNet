/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', 
    // Update this line to include jsx, ts, and tsx
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", 
    ],
    theme: {
      extend: {
        colors:{
          'dark': '#020208',
          'panel': '#152651',
          'cyan': '#A2D8F6',
          'white': '#D6F0FA',
          'blue': '#5691B9',
          'muted': '#90B0C7',
          'pink': '#EC4899',
          'pink-light': '#F472B6',
          'pink-dark': '#DB2777',
          'blue-light':'#A2D8F6'
        },
        animation: {
          'float': 'float 4s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-15px)' },
          }
        }
      },
    },
    plugins: [],
  }
