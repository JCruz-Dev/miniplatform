const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  experimental: {
    applyComplexClasses: true,
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      'content/**/*.md',
    ],
  },
  theme: {
    screens: {
      xxs: '320px',
      xs: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: {
        default: '16px',
      },
    },
    fontFamily: {
      roboto: ['Nunito Sans', ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      xss: '0.75rem',
      xs: '0.8475rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.375rem',
    },
    lineHeight: {
      1: '22.19px',
    },
    fontWeight: {
      normal: 400,
      medium: 600,
      bold: 700,
    },
    colors: {
      primary: '#30308C',
      secondary: '#80808A',
      gray: {
        100: '#ECF1F6',
        200: '#80808A',
        300: '#FAFAFA',
      },

      black: '#00000',
      black2: '#3333',
      black3: '#1C1C57',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
  },
  variants: {},
  plugins: [],
}
