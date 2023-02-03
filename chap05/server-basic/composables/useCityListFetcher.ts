export const useCityListFetcher = async () => {
	return await useFetch("/api/getCityList");
};
