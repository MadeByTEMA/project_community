export const insertAdminErrorLog = `
  INSERT INTO admin_error_log (
    error_log_id, error_code, error_message, error_service_name, error_method_name, 
    error_line, error_file_name, request_params, session_data, created_at, created_by
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, SYSDATE, ?);
`;

export const getAllAdminErrorLogs = `
  SELECT * FROM admin_error_log ORDER BY created_at DESC;
`;

export const getAdminErrorLogsByCode = `
  SELECT * FROM admin_error_log WHERE error_code = ? ORDER BY created_at DESC;
`;

export const getAdminErrorLogsByDateRange = `
  SELECT * FROM admin_error_log 
  WHERE created_at BETWEEN ? AND ? 
  ORDER BY created_at DESC;
`;

export const getAdminErrorLogsByServiceName = `
  SELECT * FROM admin_error_log WHERE error_service_name = ? ORDER BY created_at DESC;
`;

export const getAdminErrorLogsByMethodName = `
  SELECT * FROM admin_error_log WHERE error_method_name = ? ORDER BY created_at DESC;
`;

export const getAdminErrorLogsByFileName = `
  SELECT * FROM admin_error_log WHERE error_file_name = ? ORDER BY created_at DESC;
`;

export const getAdminErrorLogsBySessionData = `
  SELECT * FROM admin_error_log WHERE session_data LIKE ? ORDER BY created_at DESC;
`;

export const deleteOldAdminErrorLogs = `
  DELETE FROM admin_error_log WHERE created_at < SYSDATE - ?; -- ? 일 이전의 에러 로그 삭제
`;
