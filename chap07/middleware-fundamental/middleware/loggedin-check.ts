export default defineNuxtRouteMiddleware(
	(to, from) => {
		const loginTokenCookie = useCookie("loginToken");
		const loginUserCookie = useCookie("loginUser");
		if(loginTokenCookie.value  == null || loginUserCookie.value == null) {
			return navigateTo("/login");
		}
		else {
			return;
		}
	}
);
