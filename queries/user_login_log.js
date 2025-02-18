export const insertUserLoginLog = `
  INSERT INTO user_login_log (
    login_history_id, user_id, os, browser, ip_address, created_at, created_by
  ) VALUES (?, ?, ?, ?, ?, SYSDATE, ?);
`;

export const getUserLoginLogsByUserId = `
  SELECT * FROM user_login_log WHERE user_id = ? ORDER BY created_at DESC;
`;

export const getAllUserLoginLogs = `
  SELECT * FROM user_login_log ORDER BY created_at DESC;
`;

export const getUserLoginLogsByIp = `
  SELECT * FROM user_login_log WHERE ip_address = ? ORDER BY created_at DESC;
`;

export const getUserLoginLogsByOS = `
  SELECT * FROM user_login_log WHERE os = ? ORDER BY created_at DESC;
`;

export const getUserLoginLogsByBrowser = `
  SELECT * FROM user_login_log WHERE browser = ? ORDER BY created_at DESC;
`;

export const getUserLoginLogsInDateRange = `
  SELECT * FROM user_login_log WHERE created_at BETWEEN ? AND ? ORDER BY created_at DESC;
`;

export const deleteOldUserLoginLogs = `
  DELETE FROM user_login_log WHERE created_at < SYSDATE - ?; -- ? 일 이전의 로그 삭제
`;
