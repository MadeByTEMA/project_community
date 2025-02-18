export const insertCommonCode = `
  INSERT INTO common_code (
    code_type, code_type_name, code, display_code_name, is_active, 
    code_order, extra_1, extra_2, created_at, created_by
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, SYSDATE, ?);
`;

export const getAllCommonCodes = `
  SELECT * FROM common_code;
`;

export const getCommonCodeByType = `
  SELECT * FROM common_code WHERE code_type = ? ORDER BY code_order;
`;

export const getCommonCodeByTypeAndCode = `
  SELECT * FROM common_code WHERE code_type = ? AND code = ?;
`;

export const updateCommonCode = `
  UPDATE common_code 
  SET display_code_name = ?, is_active = ?, code_order = ?, 
      extra_1 = ?, extra_2 = ?, updated_at = SYSDATE, updated_by = ?
  WHERE code_type = ? AND code = ?;
`;

export const deleteCommonCode = `
  DELETE FROM common_code WHERE code_type = ? AND code = ?;
`;

export const getActiveCommonCodes = `
  SELECT * FROM common_code WHERE is_active = 'Y' ORDER BY code_order;
`;

export const getCommonCodesByCreator = `
  SELECT * FROM common_code WHERE created_by = ? ORDER BY created_at DESC;
`;
