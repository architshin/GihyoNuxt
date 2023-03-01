export default defineEventHandler(
	(event): never => {
		throw createError("サーバ側でのエラー発生。");
	}
);
