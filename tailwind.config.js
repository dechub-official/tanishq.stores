/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        tanishqAIBg:'linear-gradient(90deg, rgba(216,70,88,1) 0%, rgba(114,37,46,1) 100%);',
        liteLimeBg:'linear-gradient(9deg, rgba(249,242,229,0.4901610302324054) 0%, rgba(249,242,229,1) 100%);'
      },
      boxShadow:{
        sequreShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px;',

      }
    },
  },
  plugins: [],
}

