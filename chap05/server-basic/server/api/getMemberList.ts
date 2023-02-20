import type {Member} from "@/interfaces";
import {createMemberList} from "@/membersDB";

export default defineEventHandler(
	(event): Member[] => {
		//membersDB.tsを利用して会員リスト情報Mapオブジェクトを生成。
		const memberList = createMemberList();
		//会員リスト情報Mapオブジェクトの値部分を取得。
		const memberListValues =  memberList.values();
		//会員リスト情報Mapオブジェクトの値部分を配列に変換。
		const memberListArray = Array.from(memberListValues);
		//会員リスト情報配列をリターン。
		return memberListArray;
	}
);
