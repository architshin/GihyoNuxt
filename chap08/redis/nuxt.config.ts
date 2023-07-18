// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	nitro: {
		storage: {
			"redis": {
				driver: "redis"
			}
		}
	}
});
