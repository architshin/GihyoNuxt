<script setup lang="ts">
import type {City} from "@/interfaces";

const route = useRoute();
const cityList = useState<Map<number, City>>("cityList");
const selectedCity = computed(
	(): City => {
		const idNo = Number(route.params.id);
		return cityList.value.get(idNo) as City;
	}
);
const weatherDescription = ref("");

//クエリパラメータの元データとなるオブジェクトリテラルを用意。
const params:{
	lang: string,
	q: string,
	appId: string
} =
{
	//言語設定のクエリパラメータ
	lang: "ja",
	//都市を表すクエリパラメータ。
	q: selectedCity.value.q,
	//APIキーのクエリパラメータ。ここに各自の文字列を記述する!!
	appId: "913136635cfa3182bbe18e34ffd44849"
}

const asyncData = useLazyFetch(
	"http://api.openweathermap.org/data/2.5/weather",
	{
		key: `/WeatherInfo/${route.params.id}`,
		params: params,
		default: (): string => {
			return "";
		},
		transform: (data: any): string => {
			const weatherArray = data.weather;
			const weather = weatherArray[0];
			return weather.description;
		}
	}
);
watchEffect(
	(): void => {
		console.log(asyncData.data);
		console.log(asyncData.pending);
		if(asyncData.data.value != null) {
			weatherDescription.value = asyncData.data.value;
		}
	}
)
</script>

<template>
	<p v-if="asyncData.pending">データ取得中…</p>
	<section v-else>
		<h2>{{selectedCity.name}}の天気</h2>
		<p>{{weatherDescription}}</p>
	</section>
	<p>リストに<NuxtLink v-bind:to="{name: 'index'}">戻る</NuxtLink></p>
</template>
