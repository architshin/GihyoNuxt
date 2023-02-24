import type {Member, ReturnJSONMembers} from "@/interfaces";

export default defineEventHandler(
	async (event): Promise<ReturnJSONMembers> => {
		let result = 0;
		const memberListArray: Member[] = [];
		
		// throw createError("擬似エラー発生");
		try{
			// throw createError("擬似エラー発生");
			const params = event.context.params;
			let memberList = new Map<number, Member>();
			const storage = useStorage();
			const memberListStorage = await storage.getItem("member-management:members");
			if(memberListStorage != undefined) {
				memberList = new Map<number, Member>(memberListStorage);
			}
			if(params != undefined) {
				const idNo = Number(params.id);
				const member = memberList.get(idNo);
				result = 1;
				if(member != undefined) {
					memberListArray[0] = member;
				}
			}
		}
		catch(err) {
			console.log(err);
		}
		return {
			result: result,
			data: memberListArray
		};
	}
);
