const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss')],
  },
  i18n: {
    locales: ['en', 'uk'],
    defaultLocale: 'uk'
  }
}
