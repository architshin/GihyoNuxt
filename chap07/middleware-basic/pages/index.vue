<script setup lang="ts">
definePageMeta({
	middleware: ["loggedin-check"]
});
// const loginTokenCookie = useCookie("loginToken");
// const loginUserCookie = useCookie("loginUser");
// if(loginTokenCookie.value  == null || loginUserCookie.value == null) {
// 	await navigateTo("/login");
// }
</script>

<template>
	<h1>TOP</h1>
	<nav id="breadcrumbs">
		<ul>
			<li>TOP</li>
		</ul>
	</nav>
	<section>
		<p>
			<NuxtLink v-bind:to="{name: 'member-memberList'}">
				会員管理はこちら
			</NuxtLink>
		</p>
	</section>
</template>
