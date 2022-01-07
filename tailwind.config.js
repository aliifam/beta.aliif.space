const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.bg-line': {
          "background-image": "url(/images/bg-line.png)",
          "background-size": "cover",
        },
      })
    })
  ]
}