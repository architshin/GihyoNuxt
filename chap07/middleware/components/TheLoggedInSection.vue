<script setup lang="ts">
const loginUserCookie = useCookie("loginUser");
const loginUser = loginUserCookie.value as any;
</script>

<template>
	<section v-if="loginUserCookie">
		<p>{{loginUser.name}}さんがログイン中</p>
		<p><NuxtLink v-bind:to="{name: 'logout'}">ログアウト</NuxtLink></p>
	</section>
</template>