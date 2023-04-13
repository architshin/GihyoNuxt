import type {Member, ReturnJSONMembers} from "@/interfaces";

export default defineEventHandler(
	async (event): Promise<ReturnJSONMembers> => {
		const params = event.context.params;
		let memberList = new Map<number, Member>();
		const storage = useStorage();
		const memberListStorage = await storage.getItem("local:member-management_members");
		if(memberListStorage != undefined) {
			memberList = new Map<number, Member>(memberListStorage as any);
		}
		const idNo = Number(params!.id);
		const member = memberList.get(idNo) as Member;
		return {
			result: 1,
			data: [member]
		};
	}
);
