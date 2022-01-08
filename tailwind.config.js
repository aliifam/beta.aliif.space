const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Source Serif Pro', 'serif'],
        sans: ['Inter', 'system-ui']
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.bg-line': {
          "background-image": "url(/images/bg-line.svg)",
          "background-size": "cover",
        },
      })
    })
  ]
}