export const insertPostLike = `
  INSERT INTO post_like (
    post_id, user_id, created_at, created_by
  ) VALUES (?, ?, SYSDATE, ?);
`;

export const getPostLikesByPostId = `
  SELECT * FROM post_like 
  WHERE post_id = ? 
  ORDER BY created_at DESC;
`;

export const getPostLikesByUserId = `
  SELECT * FROM post_like 
  WHERE user_id = ? 
  ORDER BY created_at DESC;
`;

export const deletePostLike = `
  DELETE FROM post_like WHERE post_id = ? AND user_id = ?;
`;

export const getPostLikeCountByPostId = `
  SELECT COUNT(*) AS like_count FROM post_like WHERE post_id = ?;
`;

export const getUserLikeCountByUserId = `
  SELECT COUNT(*) AS like_count FROM post_like WHERE user_id = ?;
`;

export const getPostLikesInDateRange = `
  SELECT * FROM post_like 
  WHERE created_at BETWEEN ? AND ? 
  ORDER BY created_at DESC;
`;
