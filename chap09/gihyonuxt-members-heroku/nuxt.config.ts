// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	nitro: {
		preset: "heroku",
		storage: {
			"redis": {
				driver: "redis",
				url: process.env.REDIS_URL
			}
		}
	}
})
