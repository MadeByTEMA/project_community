import logger from "./logger";

export function withLogging(handler) {
  return async function (req, context) {
    const startTime = Date.now();

    // ✅ 요청 로그 기록
    logger.info("API Request", {
      method: req.method,
      url: req.nextUrl.pathname,
      params: context?.params,
      headers: req.headers,
    });

    const response = await handler(req, context);

    // ✅ 응답 로그 기록
    logger.info("API Response", {
      method: req.method,
      url: req.nextUrl.pathname,
      status: response.status,
      duration: `${Date.now() - startTime}ms`,
    });

    return response;
  };
}