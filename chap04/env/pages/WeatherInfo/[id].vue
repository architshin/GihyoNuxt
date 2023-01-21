<script setup lang="ts">
import type {City} from "@/interfaces";
import { useWeatherInfoFetcher } from "~~/composables/useWeatherInfoFetcher";

const route = useRoute();
const cityList = useState<Map<number, City>>("cityList");
const selectedCity = computed(
	(): City => {
		const idNo = Number(route.params.id);
		return cityList.value.get(idNo) as City;
	}
);
const weatherDescription = ref("");
const asyncData = useWeatherInfoFetcher(selectedCity.value);
const data = asyncData.data;
const pending = asyncData.pending;
watchEffect(
	(): void => {
		if(data.value != null) {
			weatherDescription.value = data.value;
		}
	}
);
</script>

<template>
	<p v-if="pending">データ取得中…</p>
	<section v-else>
		<h2>{{selectedCity.name}}の天気</h2>
		<p>{{weatherDescription}}</p>
	</section>
	<p>リストに<NuxtLink v-bind:to="{name: 'index'}">戻る</NuxtLink></p>
</template>
