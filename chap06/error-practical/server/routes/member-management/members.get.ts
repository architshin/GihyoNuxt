import type {Member, ReturnJSONMembers} from "@/interfaces";

export default defineEventHandler(
	async (event): Promise<ReturnJSONMembers> => {
		let memberList = new Map<number, Member>();
		let result = 0;

		// throw createError("擬似エラー発生");
		try{
			// throw createError("擬似エラー発生");
			const storage = useStorage();
			const memberListStorage = await storage.getItem("member-management:members");
			if(memberListStorage != undefined) {
				memberList = new Map<number, Member>(memberListStorage);
			}
			result = 1;
		}
		catch(err) {
			console.log(err);
		}

		const memberListValues =  memberList.values();
		const memberListArray = Array.from(memberListValues);
		return {
			result: result,
			data: memberListArray
		}
	}
);
