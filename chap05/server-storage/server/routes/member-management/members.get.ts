import type {Member, ReturnJSONMembers} from "@/interfaces";

export default defineEventHandler(
	async (event): Promise<ReturnJSONMembers> => {
		let memberList = new Map<number, Member>();
		const storage = useStorage();
		const memberListStrage = await storage.getItem("member-management:members");
		if(memberListStrage != undefined) {
			memberList = new Map<number, Member>(memberListStrage);
		}
		const memberListValues =  memberList.values();
		return {
			result: 1,
			data: Array.from(memberListValues)
		}
	}
);
