import logger from "./logger";

export function withErrorHandling(handler) {
  return async function (req, context) {
    try {
      return await handler(req, context);
    } catch (error) {
      // ✅ 에러 로그를 error.log 및 combined.log에 저장
      logger.error("API Error", {
        method: req.method,
        url: req.nextUrl.pathname,
        message: error.message,
        stack: error.stack,
      });

      return new Response(JSON.stringify({ message: "Internal Server Error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  };
}