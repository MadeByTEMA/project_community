export const insertCommonMenuOrder = `
  INSERT INTO common_menu_order (
    BOARD_ID, board_order, created_at, board_order_updated_at
  ) VALUES (?, ?, SYSDATE, ?);
`;

export const getAllCommonMenuOrders = `
  SELECT * FROM common_menu_order ORDER BY board_order ASC;
`;

export const getCommonMenuOrderByBoardId = `
  SELECT * FROM common_menu_order WHERE BOARD_ID = ?;
`;

export const updateCommonMenuOrder = `
  UPDATE common_menu_order 
  SET board_order = ?, board_order_updated_at = SYSDATE
  WHERE BOARD_ID = ?;
`;

export const deleteCommonMenuOrder = `
  DELETE FROM common_menu_order WHERE BOARD_ID = ?;
`;

export const getCommonMenuOrdersByUpdatedDate = `
  SELECT * FROM common_menu_order 
  WHERE board_order_updated_at BETWEEN ? AND ? 
  ORDER BY board_order_updated_at DESC;
`;
