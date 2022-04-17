const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss')],
  },
  i18n: {
    locales: ['uk', 'en'],
    defaultLocale: 'uk'
  },
  reactStrictMode: false
}
