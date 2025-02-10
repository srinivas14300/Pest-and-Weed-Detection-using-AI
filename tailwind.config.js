/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        float: "float 3s ease-in-out infinite",
        progress: "progress 3s ease-in-out",
        'bounce-x': "bounce-x 1s infinite",
        gradient: "gradient 8s ease infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        progress: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
        'bounce-x': {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(5px)",
          },
        },
        gradient: {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
      },
      transitionProperty: {
        'colors': 'background-color, color, border-color',
      },
      colors: {
        'green-25': '#f0fdf4',
        'orange-100': '#fff7ed'
      }
    },
  },
  plugins: [],
};