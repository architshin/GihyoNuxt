import type {ReturnJSONMembers} from "@/interfaces";
import {createMemberList} from "@/membersDB";

export default defineEventHandler(
	(event): ReturnJSONMembers => {
		const memberList = createMemberList();
		const memberListValues =  memberList.values();
		return {
			result: 1,
			data: Array.from(memberListValues)
		}
	}
);
