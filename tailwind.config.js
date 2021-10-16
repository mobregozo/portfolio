/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const { spacing } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  theme: {
    colors: {
      white: '#fff',
      primary: {
        100: '#e6fffa',
        200: '#b2f5ea',
        300: '#81e6d9',
        400: '#4fd1c5',
        500: '#38b2ac',
        600: '#319795',
        700: '#2c7a7b',
        800: '#285e61',
        900: '#234e52'
      },
      secondary: {
        100: '#fffaf0',
        200: '#feebc8',
        300: '#fbd38d',
        400: '#f6ad55',
        500: '#ed8936',
        600: '#dd6b20',
        700: '#c05621',
        800: '#9c4221',
        900: '#7b341e'
      },
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c'
      },
      twitter: '#1DA1F2'
    },
    spacing: {
      ...spacing,
      pic: '20vw'
    },
    extend: {
      scale: {
        101: '1.01'
      },
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
      },
      fontWeight: ['hover', 'focus']
    }
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'dark'],
      fontWeight: ['dark']
    }
  },
  plugins: []
}
