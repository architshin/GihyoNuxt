import type {City} from "@/interfaces";

export const useWeatherInfoFetcher = (city: City) => {
	const config = useRuntimeConfig();
	const asyncData = useLazyAsyncData(
		`useWeatherInfoFetcher-${city.id}`,
		(): Promise<any> => {
			const params:{
				lang: string;
				q: string;
				appid: string;
			} =
			{
				lang: "ja",
				q: city.q,
				appid: config.public.weathermapAppid
			}
			const queryParams = new URLSearchParams(params);
			const urlFull = `${config.public.weatherInfoUrl}?${queryParams}`;
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
