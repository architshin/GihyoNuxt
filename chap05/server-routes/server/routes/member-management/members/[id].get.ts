import type {Member, ReturnJSONMembers} from "@/interfaces";
import {createMemberList} from "@/membersDB";

export default defineEventHandler(
	(event): ReturnJSONMembers => {
		const params = event.context.params;
		const memberList = createMemberList();
		const idNo = Number(params.id);
		const member = memberList.get(idNo) as Member;
		return {
			result: 1,
			data: [member]
		};
	}
);
