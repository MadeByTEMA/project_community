export const insertCommonErrorLog = `
  INSERT INTO common_error_log (
    error_log_id, error_code, error_message, error_service_name, 
    error_method_name, error_line, error_file_name, request_params, 
    session_data, created_at, created_by
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, SYSDATE, ?);
`;

export const getAllCommonErrorLogs = `
  SELECT * FROM common_error_log ORDER BY created_at DESC;
`;

export const getCommonErrorLogById = `
  SELECT * FROM common_error_log WHERE error_log_id = ?;
`;

export const getCommonErrorLogsByCode = `
  SELECT * FROM common_error_log WHERE error_code = ? ORDER BY created_at DESC;
`;

export const getCommonErrorLogsByService = `
  SELECT * FROM common_error_log WHERE error_service_name = ? ORDER BY created_at DESC;
`;

export const getCommonErrorLogsByMethod = `
  SELECT * FROM common_error_log WHERE error_method_name = ? ORDER BY created_at DESC;
`;

export const getCommonErrorLogsInDateRange = `
  SELECT * FROM common_error_log WHERE created_at BETWEEN ? AND ? ORDER BY created_at DESC;
`;

export const getCommonErrorLogsBySession = `
  SELECT * FROM common_error_log WHERE session_data = ? ORDER BY created_at DESC;
`;

export const deleteOldCommonErrorLogs = `
  DELETE FROM common_error_log WHERE created_at < SYSDATE - ?;  -- ? 일 이전 로그 삭제
`;
