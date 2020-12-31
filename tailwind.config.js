/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const { colors, spacing } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    colors: {
      ...colors,
      primary: colors.teal,
      secondary: colors.orange
    },
    spacing: {
      ...spacing,
      pic: '20vw'
    },
    extend: {
      gridTemplateColumns: {
        auto: 'repeat(auto-fill, minmax(15rem, 1fr))'
      },
      width: {
        fit: 'fit-content'
      },
      transitionProperty: {
        opacity: 'opacity'
      },
      boxShadow: {
        'inner-under': 'inset 0 0 0 #fff, inset 0 -0.25em 0 0 currentColor'
      }
    }
  },
  variants: {},
  plugins: []
}
