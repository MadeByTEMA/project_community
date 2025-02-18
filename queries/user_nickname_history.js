export const insertUserNicknameHistory = `
  INSERT INTO user_nickname_history (
    nickname_history_id, user_id, nickname, change_type, remark, created_at, created_by
  ) VALUES (?, ?, ?, ?, ?, SYSDATE, ?);
`;

export const getUserNicknameHistoryByUserId = `
  SELECT * FROM user_nickname_history WHERE user_id = ? ORDER BY created_at DESC;
`;

export const getAllUserNicknameHistory = `
  SELECT * FROM user_nickname_history ORDER BY created_at DESC;
`;

export const getUserNicknameHistoryByChangeType = `
  SELECT * FROM user_nickname_history WHERE change_type = ? ORDER BY created_at DESC;
`;

export const getUserNicknameHistoryByCreatedBy = `
  SELECT * FROM user_nickname_history WHERE created_by = ? ORDER BY created_at DESC;
`;

export const getUserNicknameHistoryByNickname = `
  SELECT * FROM user_nickname_history WHERE nickname = ? ORDER BY created_at DESC;
`;

export const getUserNicknameHistoryInDateRange = `
  SELECT * FROM user_nickname_history WHERE created_at BETWEEN ? AND ? ORDER BY created_at DESC;
`;

export const deleteOldUserNicknameHistory = `
  DELETE FROM user_nickname_history WHERE created_at < SYSDATE - ?; -- ? 일 이전의 변경 이력 삭제
`;
