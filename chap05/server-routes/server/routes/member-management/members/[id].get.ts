import type {Member, ReturnJSONMembers} from "@/interfaces";
import {createMemberList} from "@/membersDB";

export default defineEventHandler(
	(event): ReturnJSONMembers => {
		//ルートパラメータを取得。
		const params = event.context.params;
		//membersDB.tsを利用して会員リスト情報Mapオブジェクトを生成。
		const memberList = createMemberList();
		//ルートパラメータのidを数値に変換。
		const idNo = Number(params!.id);
		//ルートパラメータに該当する会員情報オブジェクトを取得。
		const member = memberList.get(idNo) as Member;
		//送信データオブジェクトをリターン。
		return {
			result: 1,
			data: [member]
		};
	}
);
