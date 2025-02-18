export const insertBoardDescription = `
  INSERT INTO board_description (
    board_description_id, board_id, description, approval_status, reject_reason, 
    is_active, is_deleted, created_at, created_by
  ) VALUES (?, ?, ?, '대기', NULL, 'Y', 'N', SYSDATE, ?);
`;

export const getBoardDescriptionByBoardId = `
  SELECT * FROM board_description 
  WHERE board_id = ? AND is_deleted = 'N' 
  ORDER BY created_at DESC;
`;

export const getBoardDescriptionByApprovalStatus = `
  SELECT * FROM board_description 
  WHERE approval_status = ? AND is_deleted = 'N' 
  ORDER BY created_at DESC;
`;

export const updateBoardDescription = `
  UPDATE board_description 
  SET description = ?, updated_at = SYSDATE, updated_by = ? 
  WHERE board_description_id = ? AND is_deleted = 'N';
`;

export const approveBoardDescription = `
  UPDATE board_description 
  SET approval_status = '승인됨', approved_at = SYSDATE, approved_by = ? 
  WHERE board_description_id = ? AND is_deleted = 'N';
`;

export const rejectBoardDescription = `
  UPDATE board_description 
  SET approval_status = '거부', reject_reason = ?, updated_at = SYSDATE, updated_by = ? 
  WHERE board_description_id = ? AND is_deleted = 'N';
`;

export const markBoardDescriptionAsDeleted = `
  UPDATE board_description 
  SET is_deleted = 'Y', updated_at = SYSDATE, updated_by = ?
  WHERE board_description_id = ?;
`;

export const getBoardDescriptionsInDateRange = `
  SELECT * FROM board_description 
  WHERE created_at BETWEEN ? AND ? AND is_deleted = 'N' 
  ORDER BY created_at DESC;
`;

export const getActiveBoardDescriptions = `
  SELECT * FROM board_description 
  WHERE is_active = 'Y' AND is_deleted = 'N' 
  ORDER BY created_at DESC;
`;

export const getApprovedBoardDescriptionsByUser = `
  SELECT * FROM board_description 
  WHERE approved_by = ? AND approval_status = '승인됨' AND is_deleted = 'N'
  ORDER BY approved_at DESC;
`;
