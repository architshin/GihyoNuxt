import type {City} from "@/interfaces";

export const usePrepareCityListState = (cityArray: City[]) => {
	useState<Map<number, City>>(
		"cityList",
		(): Map<number, City> => {
			const cityListInit = new Map<number, City>();
			for(const city of cityArray) {
				cityListInit.set(city.id, city);
			}
			return cityListInit;
		}
	)
};
