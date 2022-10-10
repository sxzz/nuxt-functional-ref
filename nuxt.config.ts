import FunctionalRef from 'vue-functional-ref/vite'

export default defineNuxtConfig({
  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: '.',
        paths: {
          '@vue/reactivity': ['../node_modules/vue-functional-ref/types'],
        },
      },
    },
  },

  vite: {
    plugins: [FunctionalRef()],
  },
})
