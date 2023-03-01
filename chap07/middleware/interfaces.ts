export interface Member {
	id: number;
	name: string;
	email: string;
	points: number;
	note?: string;
}

export interface ReturnJSONMembers {
	result: number;
	data: Member[];
}

export interface ReturnJSONAuth {
	result: number;
	token: string;
}
