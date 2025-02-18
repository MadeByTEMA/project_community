export const insertCommonLog = `
  INSERT INTO common_log (
    log_type, path, url, http_method, user_agent, ip_address, 
    request_params, body, session_id, session_data, referer, created_at, created_by
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, SYSDATE, SYSDATE, ?);
`;

export const getAllCommonLogs = `
  SELECT * FROM common_log ORDER BY created_at DESC;
`;

export const getCommonLogById = `
  SELECT * FROM common_log WHERE log_id = ?;
`;

export const getCommonLogsByType = `
  SELECT * FROM common_log WHERE log_type = ? ORDER BY created_at DESC;
`;

export const getCommonLogsByIp = `
  SELECT * FROM common_log WHERE ip_address = ? ORDER BY created_at DESC;
`;

export const getCommonLogsBySessionId = `
  SELECT * FROM common_log WHERE session_id = ? ORDER BY created_at DESC;
`;

export const getCommonLogsByHttpMethod = `
  SELECT * FROM common_log WHERE http_method = ? ORDER BY created_at DESC;
`;

export const getCommonLogsInDateRange = `
  SELECT * FROM common_log WHERE created_at BETWEEN ? AND ? ORDER BY created_at DESC;
`;

export const deleteOldCommonLogs = `
  DELETE FROM common_log WHERE created_at < SYSDATE - ?;  -- ? 일 이전 로그 삭제
`;
