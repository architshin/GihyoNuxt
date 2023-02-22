<script setup lang="ts">
const onThrowsErrorClick = (): void => {
	throw createError({
		message: "404エラー発生。",
		statusCode: 404,
		statusMessage: "ページが見つかりません。",
		fatal: true
	});
};
</script>

<template>
	<section>
		致命的なエラーを<button v-on:click="onThrowsErrorClick">発生</button>
	</section>
</template>
