import type {ReturnJSONAuth} from "@/interfaces";

export default defineEventHandler(
	async (event): Promise<ReturnJSONAuth> => {
		let resultVal = 0;
		let tokenVal = "";
		
		try{
			const body = await readBody(event);
			if(body.loginId == "bow" && body.password == "wow") {
				resultVal = 1;
				tokenVal = "abcsefghijklmn";
			}
		}
		catch(err) {
			console.log(err);
		}
		return {
			result: resultVal,
			token: tokenVal
		};
	}
);
