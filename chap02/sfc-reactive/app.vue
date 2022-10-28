<script setup lang="ts">
const widthInit = Math.round(Math.random() * 10);
const heightInit = Math.round(Math.random() * 10);
const rectangle = reactive({
	width: widthInit,
	height: heightInit
});
const area = computed(
	(): number => {
		return rectangle.width * rectangle.height;
	}
);
setInterval(
	():void => {
		rectangle.width = Math.round(Math.random() * 10);
		rectangle.height = Math.round(Math.random() * 10);
	},
	1000
);
</script>

<template>
	<p>縦{{rectangle.width}}で横が{{rectangle.height}}の長方形の面積は{{area}}</p>
</template>
