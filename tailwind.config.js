module.exports = {
  purge: [
    './public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave-pattern': "url('../img/wave-white.png')",
        'wave-pattern-dots': "url('../img/pattern-white-dots.png')",
        'pattern-characters-red': "url('../img/pattern-characters-red.png')",
        'character-mario': "url('../img/character-l.png')",
        'wave-pink': "url('../img/wave-pink.png')",
        'yellow-dots': "url('../img/pattern-yellow-dots.png')",
      }),
      screens:{
        'xsm': '320px'

      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
