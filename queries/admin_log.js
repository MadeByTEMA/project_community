export const insertAdminLog = `
  INSERT INTO admin_log (
    log_id, log_type, path, url, http_method, user_agent, 
    ip_address, request_params, body, session_id, session_data, 
    referer, created_at, created_by
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, SYSDATE, SYSDATE, ?);
`;

export const getAllAdminLogs = `
  SELECT * FROM admin_log ORDER BY created_at DESC;
`;

export const getAdminLogsByType = `
  SELECT * FROM admin_log WHERE log_type = ? ORDER BY created_at DESC;
`;

export const getAdminLogsByDateRange = `
  SELECT * FROM admin_log 
  WHERE created_at BETWEEN ? AND ? 
  ORDER BY created_at DESC;
`;

export const getAdminLogsByHttpMethod = `
  SELECT * FROM admin_log WHERE http_method = ? ORDER BY created_at DESC;
`;

export const getAdminLogsByIp = `
  SELECT * FROM admin_log WHERE ip_address = ? ORDER BY created_at DESC;
`;

export const getAdminLogsBySessionId = `
  SELECT * FROM admin_log WHERE session_id = ? ORDER BY created_at DESC;
`;

export const getAdminLogsByUserAgent = `
  SELECT * FROM admin_log WHERE user_agent LIKE ? ORDER BY created_at DESC;
`;

export const deleteOldAdminLogs = `
  DELETE FROM admin_log WHERE created_at < SYSDATE - ?; -- ? 일 이전의 로그 삭제
`;
