/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en', 'zh', 'ja'],
    localeDetection: true,
  },
  localePath: './src/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
} 