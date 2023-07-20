/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    borderColor: 'rgb(255, 86, 125)',
    extend: {
      // fontFamily: {
      //   'sans': ['kite-mallory', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      // },
      width: {
        '130': '130px'
      },
      height: {
        '46': '46px'
      },
      borderColor: {
        'agoda-pink' : 'rgb(255, 86, 125)'
      }
    }
  },
  plugins: [],
}