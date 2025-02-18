export const insertUserFavoriteBoard = `
  INSERT INTO user_favorite_board (
    user_id, menu_id, board_id, menu_url, created_at, created_by
  ) VALUES (?, ?, ?, ?, SYSDATE, ?);
`;

export const getUserFavoriteBoardsByUserId = `
  SELECT * FROM user_favorite_board 
  WHERE user_id = ? 
  ORDER BY created_at DESC;
`;

export const getUserFavoriteBoardsByBoardId = `
  SELECT * FROM user_favorite_board 
  WHERE board_id = ? 
  ORDER BY created_at DESC;
`;

export const deleteUserFavoriteBoard = `
  DELETE FROM user_favorite_board WHERE user_id = ? AND menu_id = ?;
`;

export const getFavoriteCountByMenuId = `
  SELECT COUNT(*) AS favorite_count FROM user_favorite_board WHERE menu_id = ?;
`;

export const getFavoriteCountByUser = `
  SELECT COUNT(*) AS favorite_count FROM user_favorite_board WHERE user_id = ?;
`;

export const getUserFavoriteBoardsInDateRange = `
  SELECT * FROM user_favorite_board 
  WHERE created_at BETWEEN ? AND ? 
  ORDER BY created_at DESC;
`;
