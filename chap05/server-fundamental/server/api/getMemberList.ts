import type {Member} from "@/interfaces";
import {createMemberList} from "@/membersDB";

export default defineEventHandler(
	(event): Member[] => {
        const memberList = createMemberList();
        const memberListValues =  memberList.values();
        return Array.from(memberListValues);
    }
);
