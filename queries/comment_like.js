export const insertCommentLike = `
  INSERT INTO comment_like (
    post_id, comment_id, user_id, created_at, created_by
  ) VALUES (?, ?, ?, SYSDATE, ?);
`;

export const getCommentLikesByCommentId = `
  SELECT * FROM comment_like 
  WHERE comment_id = ? 
  ORDER BY created_at DESC;
`;

export const getCommentLikesByUserId = `
  SELECT * FROM comment_like 
  WHERE user_id = ? 
  ORDER BY created_at DESC;
`;

export const deleteCommentLike = `
  DELETE FROM comment_like WHERE comment_id = ? AND user_id = ?;
`;

export const getCommentLikeCountByCommentId = `
  SELECT COUNT(*) AS like_count FROM comment_like WHERE comment_id = ?;
`;

export const getUserCommentLikeCountByUserId = `
  SELECT COUNT(*) AS like_count FROM comment_like WHERE user_id = ?;
`;

export const getCommentLikesInDateRange = `
  SELECT * FROM comment_like 
  WHERE created_at BETWEEN ? AND ? 
  ORDER BY created_at DESC;
`;
