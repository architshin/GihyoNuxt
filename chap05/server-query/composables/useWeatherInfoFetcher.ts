import type {City} from "@/interfaces";

export const useWeatherInfoFetcher = (city: City) => {
	const config = useRuntimeConfig();
	const asyncData = useLazyAsyncData(
		`useWeatherInfoFetcher-${city.id}`,
		(): Promise<any> => {
			const params:{
				lang: string,
				q: string,
				appId: string
			} =
			{
				lang: "ja",
				q: city.q,
				appId: config.weathermapAppid
			}
			const queryParams = new URLSearchParams(params);
			const urlFull = `${config.weatherInfoUrl}?${queryParams}`;
			const response = $fetch(urlFull);
			return response;
		},
		{
			transform: (data): string => {
				const weatherArray = data.weather;
				const weather = weatherArray[0];
				return weather.description;
			}
		}
	);
	return asyncData;
};
