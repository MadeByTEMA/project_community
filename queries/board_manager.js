export const insertBoardManager = `
  INSERT INTO board_manager (
    board_id, user_id
  ) VALUES (?, ?);
`;

export const getBoardManagersByBoardId = `
  SELECT * FROM board_manager WHERE board_id = ?;
`;

export const getBoardManagersByUserId = `
  SELECT * FROM board_manager WHERE user_id = ?;
`;

export const deleteBoardManager = `
  DELETE FROM board_manager WHERE board_id = ? AND user_id = ?;
`;

export const getBoardManagerCountByBoardId = `
  SELECT COUNT(*) AS manager_count FROM board_manager WHERE board_id = ?;
`;

export const getBoardsManagedByUser = `
  SELECT board_id FROM board_manager WHERE user_id = ?;
`;

export const checkIfBoardHasManager = `
  SELECT EXISTS (SELECT 1 FROM board_manager WHERE board_id = ?) AS has_manager;
`;
