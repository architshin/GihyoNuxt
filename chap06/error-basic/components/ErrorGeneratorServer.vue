<script setup lang="ts">
const onThrowsErrorClick = async (): Promise<void> => {
	const asyncData = await useFetch("/api/generateError");
	if(asyncData.error.value != null) {
		const errorValue = asyncData.error.value;
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
