import type {City} from "@/interfaces";

export default defineEventHandler(
	(event): City[] => {
		return [
			{
				id: 1853909,
				name: "大阪",
				q: "Osaka"
			},
			{
				id: 1859171,
				name: "神戸",
				q: "Kobe"
			},
			{
				id: 1862627,
				name: "姫路",
				q: "Himeji"
			}
		];
	}
);
