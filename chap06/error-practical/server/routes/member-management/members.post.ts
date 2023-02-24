import type {Member, ReturnJSONMembers} from "@/interfaces";

export default defineEventHandler(
	async (event): Promise<ReturnJSONMembers> => {
		let result = 0;
		let member: Member = {
				id: 0,
				name: "",
				email: "",
				points: 0,
				note: ""
		};
		
		// throw createError("擬似エラー発生");
		try{
			// throw createError("擬似エラー発生");
			const body = await readBody(event);
			member = body as Member;
			let memberList = new Map<number, Member>();
			const storage = useStorage();
			const memberListStorage = await storage.getItem("member-management:members");
			if(memberListStorage != undefined) {
				memberList = new Map<number, Member>(memberListStorage);
			}
			memberList.set(member.id, member);
			await storage.setItem("member-management:members", [...memberList]);
			result = 1;
		}
		catch(err) {
			console.log(err);
		}
		return {
			result: result,
			data: [member]
		};
	}
);
