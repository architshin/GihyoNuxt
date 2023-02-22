<script setup lang="ts">
const onResetButtonClick = (error: any) => {
	error.value = null;
}
</script>

<template>
	<ErrorGeneratorFatal/>
	<p>
		<NuxtLink v-bind:to="{name: 'index'}">
			戻る
		</NuxtLink>
	</p>
</template>
