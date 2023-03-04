export default defineNuxtRouteMiddleware(
	(to, from) => {
		console.log(`遷移元: ${to.fullPath}\n遷移先: ${from.fullPath}`);
		return;
	}
);
