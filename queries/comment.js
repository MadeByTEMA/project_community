export const insertComment = `
  INSERT INTO comment (
    comment_id, post_id, content, parent_comment_id, is_deleted, 
    created_at, created_by
  ) VALUES (?, ?, ?, ?, 'N', SYSDATE, ?);
`;

export const getCommentsByPostId = `
  SELECT * FROM comment 
  WHERE post_id = ? AND is_deleted = 'N' 
  ORDER BY created_at ASC;
`;

export const getCommentById = `
  SELECT * FROM comment WHERE comment_id = ? AND is_deleted = 'N';
`;

export const getRepliesByParentId = `
  SELECT * FROM comment 
  WHERE parent_comment_id = ? AND is_deleted = 'N' 
  ORDER BY created_at ASC;
`;

export const updateComment = `
  UPDATE comment 
  SET content = ?, updated_at = SYSDATE, updated_by = ?
  WHERE comment_id = ? AND is_deleted = 'N';
`;

export const markCommentAsDeleted = `
  UPDATE comment 
  SET is_deleted = 'Y', updated_at = SYSDATE, updated_by = ?
  WHERE comment_id = ?;
`;

export const deleteCommentPermanently = `
  DELETE FROM comment WHERE comment_id = ?;
`;

export const getCommentsByUser = `
  SELECT * FROM comment 
  WHERE created_by = ? AND is_deleted = 'N' 
  ORDER BY created_at DESC;
`;

export const getCommentsInDateRange = `
  SELECT * FROM comment 
  WHERE created_at BETWEEN ? AND ? AND is_deleted = 'N' 
  ORDER BY created_at DESC;
`;
