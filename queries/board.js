export const insertBoard = `
  INSERT INTO board (
    board_id, list_type, has_manager, board_name, board_description_id, 
    description, board_cover_id, board_cover_enabled, file_group_id, 
    created_at, created_by
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, SYSDATE, ?);
`;

export const getAllBoards = `
  SELECT * FROM board ORDER BY created_at DESC;
`;

export const getBoardById = `
  SELECT * FROM board WHERE board_id = ?;
`;

export const getBoardsByType = `
  SELECT * FROM board WHERE list_type = ? ORDER BY created_at DESC;
`;

export const getBoardsWithManager = `
  SELECT * FROM board WHERE has_manager = 'Y' ORDER BY created_at DESC;
`;

export const getBoardsWithCover = `
  SELECT * FROM board WHERE board_cover_enabled = 'Y' ORDER BY created_at DESC;
`;

export const updateBoard = `
  UPDATE board 
  SET list_type = ?, has_manager = ?, board_name = ?, 
      board_description_id = ?, description = ?, board_cover_id = ?, 
      board_cover_enabled = ?, file_group_id = ?, updated_at = SYSDATE, updated_by = ?
  WHERE board_id = ?;
`;

export const deleteBoard = `
  DELETE FROM board WHERE board_id = ?;
`;

export const getBoardsInDateRange = `
  SELECT * FROM board WHERE created_at BETWEEN ? AND ? ORDER BY created_at DESC;
`;
