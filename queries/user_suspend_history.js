export const insertUserSuspendHistory = `
  INSERT INTO user_suspend_history (
    suspend_history_id, user_id, suspend_menu_id, type, suspend_type, 
    reason, suspend_start_at, suspend_end_at, created_at, created_by
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, SYSDATE, ?);
`;

export const getUserSuspendHistoryByUserId = `
  SELECT * FROM user_suspend_history WHERE user_id = ? ORDER BY created_at DESC;
`;

export const getAllUserSuspendHistory = `
  SELECT * FROM user_suspend_history ORDER BY created_at DESC;
`;

export const getCurrentSuspendedUsers = `
  SELECT * FROM user_suspend_history 
  WHERE suspend_end_at > SYSDATE OR suspend_end_at IS NULL 
  ORDER BY suspend_start_at DESC;
`;

export const getUserSuspendHistoryBySuspendType = `
  SELECT * FROM user_suspend_history WHERE suspend_type = ? ORDER BY created_at DESC;
`;

export const getUserSuspendHistoryBySuspendMenuId = `
  SELECT * FROM user_suspend_history WHERE suspend_menu_id = ? ORDER BY created_at DESC;
`;

export const getUserSuspendHistoryByAdmin = `
  SELECT * FROM user_suspend_history WHERE created_by = ? ORDER BY created_at DESC;
`;

export const updateUserSuspendEndDate = `
  UPDATE user_suspend_history 
  SET suspend_end_at = ?, created_at = SYSDATE, created_by = ?
  WHERE suspend_history_id = ?;
`;

export const removeUserSuspend = `
  UPDATE user_suspend_history 
  SET suspend_end_at = SYSDATE, type = '정지해제', created_at = SYSDATE, created_by = ?
  WHERE suspend_history_id = ?;
`;

export const getUserSuspendHistoryInDateRange = `
  SELECT * FROM user_suspend_history WHERE created_at BETWEEN ? AND ? ORDER BY created_at DESC;
`;

export const deleteOldUserSuspendHistory = `
  DELETE FROM user_suspend_history WHERE created_at < SYSDATE - ?; -- ? 일 이전의 정지 이력 삭제
`;
