export const insertCommonFile = `
  INSERT INTO common_file (
    file_id, file_group_id, file_order, file_extension, file_size, 
    file_name, file_path, is_deleted, created_at, created_by
  ) VALUES (?, ?, ?, ?, ?, ?, ?, 'N', SYSDATE, ?);
`;

export const getAllCommonFiles = `
  SELECT * FROM common_file WHERE is_deleted = 'N';
`;

export const getCommonFileById = `
  SELECT * FROM common_file WHERE file_id = ? AND is_deleted = 'N';
`;

export const getCommonFilesByGroupId = `
  SELECT * FROM common_file WHERE file_group_id = ? AND is_deleted = 'N' ORDER BY file_order;
`;

export const updateCommonFile = `
  UPDATE common_file 
  SET file_order = ?, file_name = ?, file_path = ?, updated_at = SYSDATE, updated_by = ?
  WHERE file_id = ?;
`;

export const deleteCommonFile = `
  UPDATE common_file 
  SET is_deleted = 'Y'
  WHERE file_id = ?;
`;

export const permanentlyDeleteCommonFile = `
  DELETE FROM common_file WHERE file_id = ?;
`;

export const getFilesByUploader = `
  SELECT * FROM common_file WHERE created_by = ? AND is_deleted = 'N' ORDER BY created_at DESC;
`;

export const getFilesBySizeLimit = `
  SELECT * FROM common_file WHERE file_size <= ? AND is_deleted = 'N';
`;
