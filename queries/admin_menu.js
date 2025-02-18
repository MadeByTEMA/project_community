export const insertAdminMenu = `
  INSERT INTO admin_menu (
    menu_id, parent_menu_id, menu_url, menu_order, is_active, remarks, 
    menu_level, created_at, created_by
  ) VALUES (?, ?, ?, ?, 'Y', ?, ?, SYSDATE, ?);
`;

export const getAllAdminMenus = `
  SELECT * FROM admin_menu 
  WHERE is_active = 'Y' 
  ORDER BY menu_order ASC, created_at DESC;
`;

export const getAdminMenusByParentId = `
  SELECT * FROM admin_menu 
  WHERE parent_menu_id = ? AND is_active = 'Y' 
  ORDER BY menu_order ASC;
`;

export const getAdminMenuById = `
  SELECT * FROM admin_menu WHERE menu_id = ?;
`;

export const updateAdminMenu = `
  UPDATE admin_menu 
  SET menu_url = ?, menu_order = ?, remarks = ?, updated_at = SYSDATE, updated_by = ?
  WHERE menu_id = ?;
`;

export const updateAdminMenuStatus = `
  UPDATE admin_menu 
  SET is_active = ?, updated_at = SYSDATE, updated_by = ?
  WHERE menu_id = ?;
`;

export const getAdminMenusByLevel = `
  SELECT * FROM admin_menu 
  WHERE menu_level = ? AND is_active = 'Y' 
  ORDER BY menu_order ASC;
`;

export const getAdminMenusByOrder = `
  SELECT * FROM admin_menu 
  WHERE is_active = 'Y' 
  ORDER BY menu_order ASC;
`;

export const getAdminMenusCreatedByUser = `
  SELECT * FROM admin_menu 
  WHERE created_by = ? 
  ORDER BY created_at DESC;
`;

export const getAdminMenusUpdatedInDateRange = `
  SELECT * FROM admin_menu 
  WHERE updated_at BETWEEN ? AND ? 
  ORDER BY updated_at DESC;
`;
