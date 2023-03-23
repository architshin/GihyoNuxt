<script setup lang="ts">
const now = new Date();
const nowTime = ref(now.toLocaleTimeString());
</script>

<template>
	<p>現在の時刻: {{nowTime}}</p>
	<p>
		<NuxtLink v-bind:to="{name: 'index'}">
			戻る
		</NuxtLink>
	</p>
</template>
