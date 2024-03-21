/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{html,js,ts,tsx}"
  ],
  theme: {
    //이걸 설정하면 테일윈드에서 제공하는 color를 사용 못함
    colors: {
      'main': '#192544',
      'white': '#FFFFFF',
      'black': '#000000',
      'logo': '#D4D3B8'
      // 'darkly': 'rgba(0, 0, 0, 0.3)'
    },
    extend: {
      // keyframes: {
      //   wiggle: {
      //     '0%, 100%': { transform: 'rotate(-3deg)' },
      //     '50%': { transform: 'rotate(3deg)' },
      //   },
      // },
      // animation: {
      //   wiggle: 'wiggle 1s infinite',
      // },
    },

  },
  plugins: [],
}