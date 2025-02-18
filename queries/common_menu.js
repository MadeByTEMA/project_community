export const insertCommonMenu = `
  INSERT INTO common_menu (
    MENU_ID, MENU_NAME, UPPER_MENU_ID, BOARD_ID, MENU_URL, 
    USE_YN, DEPTH, REG_DTTM, REG_USER
  ) VALUES (?, ?, ?, ?, ?, 'Y', ?, SYSDATE, ?);
`;

export const getAllCommonMenus = `
  SELECT * FROM common_menu WHERE USE_YN = 'Y' ORDER BY DEPTH, MENU_ID;
`;

export const getCommonMenuById = `
  SELECT * FROM common_menu WHERE MENU_ID = ? AND USE_YN = 'Y';
`;

export const getCommonMenusByUpperMenuId = `
  SELECT * FROM common_menu WHERE UPPER_MENU_ID = ? AND USE_YN = 'Y' ORDER BY MENU_ID;
`;

export const getCommonMenusByDepth = `
  SELECT * FROM common_menu WHERE DEPTH = ? AND USE_YN = 'Y' ORDER BY MENU_ID;
`;

export const getCommonMenusWithBoard = `
  SELECT * FROM common_menu WHERE BOARD_ID IS NOT NULL AND USE_YN = 'Y';
`;

export const updateCommonMenu = `
  UPDATE common_menu 
  SET MENU_NAME = ?, MENU_URL = ?, USE_YN = ?, UPDT_DTTM = SYSDATE, UPDT_USER = ?
  WHERE MENU_ID = ?;
`;

export const deleteCommonMenu = `
  UPDATE common_menu 
  SET USE_YN = 'N'
  WHERE MENU_ID = ?;
`;

export const permanentlyDeleteCommonMenu = `
  DELETE FROM common_menu WHERE MENU_ID = ?;
`;
