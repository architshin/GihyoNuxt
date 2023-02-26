<script setup lang="ts">
const onThrowsErrorClick = async (): Promise<void> => {
	// const asyncData = await useFetch("https://httpbin.org/status/500");
	const asyncData = await useFetch("/api/generateError");
	const errorValue = asyncData.error.value;
	if(errorValue != null) {
		throw createError({
			message: `サーバでエラーが発生しました: ${errorValue.message}`,
			statusCode: errorValue.statusCode,
			statusMessage: errorValue.statusMessage,
			fatal: true
		});
	}
};
</script>

<template>
	<section>
		サーバでエラーを<button v-on:click="onThrowsErrorClick">発生</button>
	</section>
</template>
