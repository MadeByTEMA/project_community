export const insertPost = `
  INSERT INTO post (
    post_id, board_id, category_id, title, content, file_group_id, 
    status, is_pinned, is_popular, is_deleted, nickname, 
    created_at, created_by
  ) VALUES (?, ?, ?, ?, ?, ?, ?, 'N', 'N', 'N', ?, SYSDATE, ?);
`;

export const getAllPosts = `
  SELECT * FROM post WHERE is_deleted = 'N' ORDER BY created_at DESC;
`;

export const getPostsByBoardId = `
  SELECT * FROM post WHERE board_id = ? AND is_deleted = 'N' ORDER BY created_at DESC;
`;

export const getPostsByCategoryId = `
  SELECT * FROM post WHERE category_id = ? AND is_deleted = 'N' ORDER BY created_at DESC;
`;

export const getPostById = `
  SELECT * FROM post WHERE post_id = ? AND is_deleted = 'N';
`;

export const updatePost = `
  UPDATE post 
  SET title = ?, content = ?, status = ?, file_group_id = ?, 
      updated_at = SYSDATE, updated_by = ?
  WHERE post_id = ? AND is_deleted = 'N';
`;

export const updatePostStatus = `
  UPDATE post 
  SET status = ?, updated_at = SYSDATE, updated_by = ?
  WHERE post_id = ? AND is_deleted = 'N';
`;

export const pinPost = `
  UPDATE post 
  SET is_pinned = ?, updated_at = SYSDATE, updated_by = ?
  WHERE post_id = ? AND is_deleted = 'N';
`;

export const markPostAsDeleted = `
  UPDATE post 
  SET is_deleted = 'Y', updated_at = SYSDATE, updated_by = ?
  WHERE post_id = ?;
`;

export const getPostsByUser = `
  SELECT * FROM post WHERE created_by = ? AND is_deleted = 'N' ORDER BY created_at DESC;
`;

export const getPopularPosts = `
  SELECT * FROM post WHERE is_popular = 'Y' AND is_deleted = 'N' ORDER BY created_at DESC;
`;

export const getPostsInDateRange = `
  SELECT * FROM post WHERE created_at BETWEEN ? AND ? AND is_deleted = 'N' ORDER BY created_at DESC;
`;

export const getPostsByNickname = `
  SELECT * FROM post WHERE nickname = ? AND is_deleted = 'N' ORDER BY created_at DESC;
`;

export const getPostsWithFiles = `
  SELECT * FROM post WHERE file_group_id IS NOT NULL AND is_deleted = 'N' ORDER BY created_at DESC;
`;
