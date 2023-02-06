import type {Member, ReturnJSONMembers} from "@/interfaces";

export default defineEventHandler(
	async (event): Promise<ReturnJSONMembers> => {
		const body = await readBody(event);
		const member = body as Member;
		let memberList = new Map<number, Member>();
		const storage = useStorage();
		const memberListStrage = await storage.getItem("member-management:members");
		if(memberListStrage != undefined) {
			memberList = new Map<number, Member>(memberListStrage);
		}
		memberList.set(member.id, member);
		await storage.setItem("member-management:members", [...memberList]);
		return {
			result: 1,
			data: [member]
		};
	}
);
