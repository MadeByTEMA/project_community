export const insertUserAuth = `
  INSERT INTO user_auth (
    auth_id, user_id, result_code, request_unique_id, encrypted_at, 
    site_code, response_unique_id, name, name_utf8, birth_date, 
    gender, nationality, carrier, phone_number, ci, di, receive_data
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
`;

export const getAllUserAuthRecords = `
  SELECT * FROM user_auth ORDER BY encrypted_at DESC;
`;

export const getUserAuthById = `
  SELECT * FROM user_auth WHERE auth_id = ?;
`;

export const getUserAuthByUserId = `
  SELECT * FROM user_auth WHERE user_id = ? ORDER BY encrypted_at DESC;
`;

export const getUserAuthByPhoneNumber = `
  SELECT * FROM user_auth WHERE phone_number = ? ORDER BY encrypted_at DESC;
`;

export const getUserAuthByCI = `
  SELECT * FROM user_auth WHERE ci = ? ORDER BY encrypted_at DESC;
`;

export const getUserAuthByDI = `
  SELECT * FROM user_auth WHERE di = ? ORDER BY encrypted_at DESC;
`;

export const updateUserAuthResult = `
  UPDATE user_auth 
  SET result_code = ?, encrypted_at = ?, response_unique_id = ?
  WHERE auth_id = ?;
`;

export const deleteUserAuth = `
  DELETE FROM user_auth WHERE auth_id = ?;
`;

export const getUserAuthInDateRange = `
  SELECT * FROM user_auth WHERE encrypted_at BETWEEN ? AND ? ORDER BY encrypted_at DESC;
`;
