// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			weatherInfoUrl: "http://api.openweathermap.org/data/2.5/weather",
			weathermapAppid: "xxxxxx"
		}
	}
})
