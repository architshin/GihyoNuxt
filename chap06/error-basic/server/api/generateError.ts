export default defineEventHandler(
	(event): never => {
		throw createError({
			message: "サーバ側でのエラー発生。"
		});
	}
);
