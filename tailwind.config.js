/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    colors: {
      ...colors,
      primary: colors.teal,
      secondary: colors.orange
    }
  },
  variants: {},
  plugins: []
}
