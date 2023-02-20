import type {Member} from "@/interfaces";
import {createMemberList} from "@/membersDB";

export default defineEventHandler(
	(event): Member => {
		//クエリパラメータを取得。
		const query = getQuery(event);
		//membersDB.tsを利用して会員リスト情報Mapオブジェクトを生成。
		const memberList = createMemberList();
		//クエリパラメータのidを数値に変換。
		const idNo = Number(query.id);
		//クエリパラメータに該当する会員情報オブジェクトを取得。
		const member = memberList.get(idNo) as Member;
		//取得した会員情報オブジェクトをリターン。
		return member;
	}
);
