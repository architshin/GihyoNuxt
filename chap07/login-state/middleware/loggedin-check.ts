import type {User} from "@/interfaces";

export default defineNuxtRouteMiddleware(
	(to, from) => {
		const loginUserState = useState<User|null>("loginUser");
		const loginTokenState = useState<string>("loginToken");
		if(loginTokenState.value  == "" || loginUserState.value == null) {
			return navigateTo("/login");
		}
		else {
			return;
		}
	}
);
