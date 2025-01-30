import winston from "winston";
import path from "path";

// ✅ 로그 파일 저장 경로 설정
const logDir = "logs"; // logs 폴더에 저장
const errorLogPath = path.join(logDir, "error.log");
const combinedLogPath = path.join(logDir, "combined.log");

// ✅ 로그 포맷 설정 (timestamp를 가장 먼저 출력)
const logFormat = winston.format.printf(({ timestamp, level, message, ...meta }) => {
  return JSON.stringify({ timestamp, level, message, ...meta });
});

// ✅ Winston Logger 설정
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), // ✅ timestamp 추가
    winston.format.json(), // JSON 포맷 사용
    logFormat
  ),
  transports: [
    // ✅ 에러 로그는 error.log에 저장
    new winston.transports.File({ filename: errorLogPath, level: "error" }),
    // ✅ 모든 로그를 combined.log에 저장
    new winston.transports.File({ filename: combinedLogPath }),
    // ✅ 콘솔 출력 (개발 중 디버깅 용도)
    new winston.transports.Console(),
  ],
});

export default logger;