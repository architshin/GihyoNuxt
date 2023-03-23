// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	routeRules: {
		"/spa": {ssr: false},
		"/ssg": {prerender: true},
		"/isg": {swr: 60}
	}
});
