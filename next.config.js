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
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://api.domrii.com.ua',
  },
  reactStrictMode: false
}
