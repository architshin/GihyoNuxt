// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            weathermapAppid: process.env.NUXT_WEATHERMAP_APPID
        }
    }
})
