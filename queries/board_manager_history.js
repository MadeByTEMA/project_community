export const insertBoardManagerHistory = `
  INSERT INTO board_manager_history (
    board_manager_history_id, board_id, user_id, type, created_at, created_by
  ) VALUES (?, ?, ?, ?, SYSDATE, ?);
`;

export const getBoardManagerHistoryByBoardId = `
  SELECT * FROM board_manager_history WHERE board_id = ? ORDER BY created_at DESC;
`;

export const getBoardManagerHistoryByUserId = `
  SELECT * FROM board_manager_history WHERE user_id = ? ORDER BY created_at DESC;
`;

export const getBoardManagerHistoryByType = `
  SELECT * FROM board_manager_history WHERE type = ? ORDER BY created_at DESC;
`;

export const getBoardManagerHistoryByAdmin = `
  SELECT * FROM board_manager_history WHERE created_by = ? ORDER BY created_at DESC;
`;

export const getBoardManagerHistoryInDateRange = `
  SELECT * FROM board_manager_history WHERE created_at BETWEEN ? AND ? ORDER BY created_at DESC;
`;

export const deleteOldBoardManagerHistory = `
  DELETE FROM board_manager_history WHERE created_at < SYSDATE - ?; -- ? 일 이전의 담당자 변경 이력 삭제
`;
