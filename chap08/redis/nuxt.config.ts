// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        storage: {
            "redis": {
                driver: "redis"
            }
        }
    }
})
