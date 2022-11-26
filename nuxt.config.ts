export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
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
})
