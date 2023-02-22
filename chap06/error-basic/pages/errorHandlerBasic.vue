<script setup lang="ts">
const onResetButtonClick = (error: any) => {
	error.value = null;
}
</script>

<template>
	<NuxtErrorBoundary>
		<ErrorGenerator/>
		<template v-slot:error="errorLog">
			<p>エラーが発生しました!</p>
			<p>{{errorLog.error}}</p>
			<button v-on:click="onResetButtonClick(errorLog.error)">エラーを解消</button>
		</template>
	</NuxtErrorBoundary>
	<p>
		<NuxtLink v-bind:to="{name: 'index'}">
			戻る
		</NuxtLink>
	</p>
</template>
