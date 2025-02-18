export const insertBoardCategory = `
  INSERT INTO board_category (
    board_category_id, board_id, category_name, approval_status, 
    category_order, is_active, is_deleted, created_at, created_by
  ) VALUES (?, ?, ?, '대기', ?, 'Y', 'N', SYSDATE, ?);
`;

export const getBoardCategoriesByBoardId = `
  SELECT * FROM board_category 
  WHERE board_id = ? AND is_deleted = 'N' 
  ORDER BY category_order ASC, created_at DESC;
`;

export const getBoardCategoryByApprovalStatus = `
  SELECT * FROM board_category 
  WHERE approval_status = ? AND is_deleted = 'N' 
  ORDER BY created_at DESC;
`;

export const updateBoardCategory = `
  UPDATE board_category 
  SET category_name = ?, category_order = ?, updated_at = SYSDATE, updated_by = ? 
  WHERE board_category_id = ? AND is_deleted = 'N';
`;

export const approveBoardCategory = `
  UPDATE board_category 
  SET approval_status = '승인됨', updated_at = SYSDATE, updated_by = ? 
  WHERE board_category_id = ? AND is_deleted = 'N';
`;

export const rejectBoardCategory = `
  UPDATE board_category 
  SET approval_status = '거부', updated_at = SYSDATE, updated_by = ? 
  WHERE board_category_id = ? AND is_deleted = 'N';
`;

export const markBoardCategoryAsDeleted = `
  UPDATE board_category 
  SET is_deleted = 'Y', updated_at = SYSDATE, updated_by = ?
  WHERE board_category_id = ?;
`;

export const getBoardCategoriesInDateRange = `
  SELECT * FROM board_category 
  WHERE created_at BETWEEN ? AND ? AND is_deleted = 'N' 
  ORDER BY created_at DESC;
`;

export const getActiveBoardCategories = `
  SELECT * FROM board_category 
  WHERE is_active = 'Y' AND is_deleted = 'N' 
  ORDER BY category_order ASC, created_at DESC;
`;

export const getApprovedBoardCategoriesByUser = `
  SELECT * FROM board_category 
  WHERE approved_by = ? AND approval_status = '승인됨' AND is_deleted = 'N'
  ORDER BY created_at DESC;
`;

export const getBoardCategoriesByOrder = `
  SELECT * FROM board_category 
  WHERE board_id = ? AND is_deleted = 'N' 
  ORDER BY category_order ASC;
`;
