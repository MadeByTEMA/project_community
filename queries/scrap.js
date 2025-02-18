export const insertScrap = `
  INSERT INTO scrap (
    scrap_id, post_id, created_at, created_by
  ) VALUES (?, ?, SYSDATE, ?);
`;

export const getScrapsByUserId = `
  SELECT * FROM scrap 
  WHERE created_by = ? 
  ORDER BY created_at DESC;
`;

export const getScrapsByPostId = `
  SELECT * FROM scrap 
  WHERE post_id = ? 
  ORDER BY created_at DESC;
`;

export const deleteScrap = `
  DELETE FROM scrap WHERE scrap_id = ? AND created_by = ?;
`;

export const getScrapCountByPostId = `
  SELECT COUNT(*) AS scrap_count FROM scrap WHERE post_id = ?;
`;

export const getScrapCountByUser = `
  SELECT COUNT(*) AS scrap_count FROM scrap WHERE created_by = ?;
`;

export const getScrapsInDateRange = `
  SELECT * FROM scrap 
  WHERE created_at BETWEEN ? AND ? 
  ORDER BY created_at DESC;
`;
