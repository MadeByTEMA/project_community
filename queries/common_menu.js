export const insertCommonMenu = `
  INSERT INTO common_menu (
    menu_id, menu_name, upper_menu_id, board_id, menu_url, 
    is_active, depth, REG_DTTM, REG_USER
  ) VALUES (?, ?, ?, ?, ?, 'Y', ?, SYSDATE, ?);
`;

export const getAllCommonMenus = `
  SELECT * FROM common_menu WHERE is_active = 1 ORDER BY depth, menu_id;
`;

export const getCommonMenuById = `
  SELECT * FROM common_menu WHERE menu_id = ? AND is_active = 1;
`;

export const getCommonMenusByUpperMenuId = `
  SELECT * FROM common_menu WHERE upper_menu_id = ? AND is_active = 1 ORDER BY menu_id;
`;

export const getCommonMenusByDepth = `
  SELECT * FROM common_menu WHERE depth = ? AND is_active = 1 ORDER BY menu_id;
`;

export const getCommonMenusWithBoard = `
  SELECT * FROM common_menu WHERE board_id IS NOT NULL AND is_active = 1;
`;

export const updateCommonMenu = `
  UPDATE common_menu 
  SET menu_name = ?, menu_url = ?, is_active = ?, updated_at = SYSDATE, updated_by = ?
  WHERE menu_id = ?;
`;

export const deleteCommonMenu = `
  UPDATE common_menu 
  SET is_active = 'N', updated_at = SYSDATE, updated_by = ?
  WHERE menu_id = ?;
`;

export const permanentlyDeleteCommonMenu = `
  DELETE FROM common_menu WHERE menu_id = ?;
`;
