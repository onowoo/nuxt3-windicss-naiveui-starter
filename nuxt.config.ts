import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/tw-elements/dist/css/tw-elements.min.css",
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/tw-elements/dist/js/tw-elements.umd.min.js',
          async: true,
          body: true,
          defer: true
        }
      ]
    },
  },
  ssr: true,
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    "@pinia-plugin-persistedstate/nuxt",
    'nuxt-windicss',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
            'naive-ui',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer',
          ]
        : ['@juggle/resize-observer'],
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : [],
    },
    plugins: [
      Components({
        resolvers: [NaiveUiResolver()], // Automatically register all components in the `components` directory
      }),
    ],
    ssr: { noExternal: ['@nuxtjs/vite'] }
  },
})
