<script setup lang="ts">
import type {City, WeatherInfoData} from "@/interfaces";

//会員情報リストをステートから取得。
const cityList = useState<Map<number, City>>("cityList");
//選択された都市ID用テンプレート変数を大阪を初期値で用意。
const selectedCityId = ref(1853909);

const asyncData = await useAsyncData(
	async (): Promise<any> => {
		const selectedCity = cityList.value.get(selectedCityId.value) as City;
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
			q: selectedCity.q,
			//APIキーのクエリパラメータ。ここに各自の文字列を記述する!!
			appId: "913136635cfa3182bbe18e34ffd44849"
		}
		//クエリパラメータを生成。
		const queryParams = new URLSearchParams(params);
		//実際にアクセスするURLを生成。
		const urlFull = `${weatherInfoUrl}?${queryParams}`;
		//URLに非同期でアクセスしてデータを取得。
		const response = await $fetch(urlFull) as any;
		return response;
	},
	{
		transform: (data: any): WeatherInfoData => {
			const weatherArray = data.weather;
			const weather = weatherArray[0];
			return {
				cityName: `${data.name}の天気`,
				description: weather.description
			};
		},
		watch: [selectedCityId]
	}
);
const pending = asyncData.pending;
const data = asyncData.data;
</script>

<template>
	<section>
		<label>
			表示するお天気ポイント: 
			<select v-model="selectedCityId">
				<option v-for="[id, city] in cityList" v-bind:key="id" v-bind:value="id">
					{{city.name}}
				</option>
			</select>
		</label>
	</section>
	<p v-if="pending">データ取得中…</p>
	<section v-else>
		<h2>{{data?.cityName}}</h2>
		<p>{{data?.description}}</p>
	</section>
</template>
