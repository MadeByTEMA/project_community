export const insertPopularPost = `
  INSERT INTO popular_post (
    post_id, board_id, category_id, title, content, file_group_id, 
    is_deleted, nickname, created_at, created_by
  ) VALUES (?, ?, ?, ?, ?, ?, 'N', ?, SYSDATE, ?);
`;

export const getAllPopularPosts = `
  SELECT * FROM popular_post WHERE is_deleted = 'N' ORDER BY created_at DESC;
`;

export const getPopularPostsByBoardId = `
  SELECT * FROM popular_post WHERE board_id = ? AND is_deleted = 'N' ORDER BY created_at DESC;
`;

export const getPopularPostsByCategoryId = `
  SELECT * FROM popular_post WHERE category_id = ? AND is_deleted = 'N' ORDER BY created_at DESC;
`;

export const getPopularPostById = `
  SELECT * FROM popular_post WHERE post_id = ? AND is_deleted = 'N';
`;

export const updatePopularPost = `
  UPDATE popular_post 
  SET title = ?, content = ?, file_group_id = ?, 
      updated_at = SYSDATE, updated_by = ?
  WHERE post_id = ? AND is_deleted = 'N';
`;

export const markPopularPostAsDeleted = `
  UPDATE popular_post 
  SET is_deleted = 'Y', updated_at = SYSDATE, updated_by = ?
  WHERE post_id = ?;
`;

export const getPopularPostsByUser = `
  SELECT * FROM popular_post WHERE created_by = ? AND is_deleted = 'N' ORDER BY created_at DESC;
`;

export const getPopularPostsInDateRange = `
  SELECT * FROM popular_post WHERE created_at BETWEEN ? AND ? AND is_deleted = 'N' ORDER BY created_at DESC;
`;

export const getPopularPostsWithFiles = `
  SELECT * FROM popular_post WHERE file_group_id IS NOT NULL AND is_deleted = 'N' ORDER BY created_at DESC;
`;
