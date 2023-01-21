import type {City} from "@/interfaces";

export const useWeatherInfoFetcher = (city: City) => {
	const config = useRuntimeConfig()
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
		q: city.q,
		appId: config.weathermapAppid
	}

	const asyncData = useLazyFetch(
		"http://api.openweathermap.org/data/2.5/weather",
		{
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
	return asyncData;
};
