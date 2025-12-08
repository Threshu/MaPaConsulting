// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-12-02',
  devtools: { enabled: true },

  runtimeConfig: {
    formspreeEndpoint: ''
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],

  css: ['~/assets/css/main.css'],

  ui: {
    theme: {
      colors: ['primary'],
      defaultVariants: {
        color: 'primary',
        size: 'md'
      }
    }
  },

  i18n: {
    defaultLocale: 'de',
    strategy: 'no_prefix',
    langDir: 'locales',
    locales: [
      { code: 'de', name: 'Deutsch', file: 'de.json' },
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'pl', name: 'Polski', file: 'pl.json' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'mapa_locale',
      redirectOn: 'root',
      alwaysRedirect: false
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'de'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      meta: [
        { name: 'theme-color', content: '#1a4b84' },
        { name: 'msapplication-TileColor', content: '#1a4b84' }
      ]
    }
  }
});