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

//アクセス先URLの基本部分の変数を用意。
const weatherInfoUrl = "http://api.openweathermap.org/data/2.5/weather";
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
//クエリパラメータを生成。
const queryParams = new URLSearchParams(params);
//実際にアクセスするURLを生成。
const urlFull = `${weatherInfoUrl}?${queryParams}`;
//URLに非同期でアクセスしてデータを取得。
const response = await $fetch(urlFull) as any;
// console.log(response);
//お天気情報JSONから天気データを取得し、テンプレート変数に格納。
const weatherArray = response.weather;
const weather = weatherArray[0];
weatherDescription.value = weather.description;
</script>

<template>
	<section>
		<h2>{{selectedCity.name}}の天気</h2>
		<p>{{weatherDescription}}</p>
	</section>
	<p>リストに<NuxtLink v-bind:to="{name: 'index'}">戻る</NuxtLink></p>
</template>
