export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.$filters = {
      currency(value) {
        return `$${parseFloat(value).toFixed(2)}`
      }
    }
  })