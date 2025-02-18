export const insertBoardCover = `
  INSERT INTO board_cover (
    board_cover_id, board_id, file_group_id, approval_status, reject_reason, 
    is_active, is_deleted, created_at, created_by
  ) VALUES (?, ?, ?, '대기', NULL, 'Y', 'N', SYSDATE, ?);
`;

export const getBoardCoverByBoardId = `
  SELECT * FROM board_cover 
  WHERE board_id = ? AND is_deleted = 'N' 
  ORDER BY created_at DESC;
`;

export const getBoardCoverByApprovalStatus = `
  SELECT * FROM board_cover 
  WHERE approval_status = ? AND is_deleted = 'N' 
  ORDER BY created_at DESC;
`;

export const updateBoardCover = `
  UPDATE board_cover 
  SET file_group_id = ?, updated_at = SYSDATE, updated_by = ? 
  WHERE board_cover_id = ? AND is_deleted = 'N';
`;

export const approveBoardCover = `
  UPDATE board_cover 
  SET approval_status = '승인됨', approved_at = SYSDATE, approved_by = ? 
  WHERE board_cover_id = ? AND is_deleted = 'N';
`;

export const rejectBoardCover = `
  UPDATE board_cover 
  SET approval_status = '거부', reject_reason = ?, updated_at = SYSDATE, updated_by = ? 
  WHERE board_cover_id = ? AND is_deleted = 'N';
`;

export const markBoardCoverAsDeleted = `
  UPDATE board_cover 
  SET is_deleted = 'Y', updated_at = SYSDATE, updated_by = ?
  WHERE board_cover_id = ?;
`;

export const getBoardCoversInDateRange = `
  SELECT * FROM board_cover 
  WHERE created_at BETWEEN ? AND ? AND is_deleted = 'N' 
  ORDER BY created_at DESC;
`;

export const getActiveBoardCovers = `
  SELECT * FROM board_cover 
  WHERE is_active = 'Y' AND is_deleted = 'N' 
  ORDER BY created_at DESC;
`;

export const getApprovedBoardCoversByUser = `
  SELECT * FROM board_cover 
  WHERE approved_by = ? AND approval_status = '승인됨' AND is_deleted = 'N'
  ORDER BY approved_at DESC;
`;
