export const insertUserReport = `
  INSERT INTO user_report (
    report_id, report_type, target_id, reported_nickname, 
    report_category, report_reason, created_by, created_at
  ) VALUES (?, ?, ?, ?, ?, ?, ?, SYSDATE);
`;

export const getAllUserReports = `
  SELECT * FROM user_report ORDER BY created_at DESC;
`;

export const getUserReportById = `
  SELECT * FROM user_report WHERE report_id = ?;
`;

export const getUserReportsByType = `
  SELECT * FROM user_report WHERE report_type = ? ORDER BY created_at DESC;
`;

export const getUserReportsByTarget = `
  SELECT * FROM user_report WHERE target_id = ? ORDER BY created_at DESC;
`;

export const getUserReportsByReporter = `
  SELECT * FROM user_report WHERE created_by = ? ORDER BY created_at DESC;
`;

export const getUserReportsByCategory = `
  SELECT * FROM user_report WHERE report_category = ? ORDER BY created_at DESC;
`;

export const getUserReportsInDateRange = `
  SELECT * FROM user_report WHERE created_at BETWEEN ? AND ? ORDER BY created_at DESC;
`;

export const deleteUserReport = `
  DELETE FROM user_report WHERE report_id = ?;
`;
