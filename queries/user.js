export const insertUser = `
  INSERT INTO user (
    user_id, nickname, password, password_reset_flag, email, auth_id, 
    extra_1, extra_2, last_login_at, ban_start_at, ban_end_at, 
    is_deleted, created_at, created_by
  ) VALUES (?, ?, ?, 'N', ?, ?, ?, ?, NULL, NULL, NULL, 'N', SYSDATE, ?);
`;

export const getAllUsers = `
  SELECT * FROM user WHERE is_deleted = 'N' ORDER BY created_at DESC;
`;

export const getUserById = `
  SELECT * FROM user WHERE user_id = ? AND is_deleted = 'N';
`;

export const getUserByEmail = `
  SELECT * FROM user WHERE email = ? AND is_deleted = 'N';
`;

export const getUserByAuthId = `
  SELECT * FROM user WHERE auth_id = ? AND is_deleted = 'N';
`;

export const updateUser = `
  UPDATE user 
  SET nickname = ?, email = ?, extra_1 = ?, extra_2 = ?, 
      updated_at = SYSDATE, updated_by = ?
  WHERE user_id = ? AND is_deleted = 'N';
`;

export const updateUserPassword = `
  UPDATE user 
  SET password = ?, password_reset_flag = 'N', updated_at = SYSDATE, updated_by = ?
  WHERE user_id = ? AND is_deleted = 'N';
`;

export const updateUserLastLogin = `
  UPDATE user 
  SET last_login_at = SYSDATE
  WHERE user_id = ? AND is_deleted = 'N';
`;

export const banUser = `
  UPDATE user 
  SET ban_start_at = ?, ban_end_at = ?, updated_at = SYSDATE, updated_by = ?
  WHERE user_id = ? AND is_deleted = 'N';
`;

export const unbanUser = `
  UPDATE user 
  SET ban_start_at = NULL, ban_end_at = NULL, updated_at = SYSDATE, updated_by = ?
  WHERE user_id = ? AND is_deleted = 'N';
`;

export const markUserAsDeleted = `
  UPDATE user 
  SET is_deleted = 'Y', updated_at = SYSDATE, updated_by = ?
  WHERE user_id = ?;
`;

export const getBannedUsers = `
  SELECT * FROM user 
  WHERE is_deleted = 'N' AND ban_start_at IS NOT NULL AND ban_end_at > SYSDATE
  ORDER BY ban_end_at DESC;
`;

export const getUsersBySignupDate = `
  SELECT * FROM user 
  WHERE created_at BETWEEN ? AND ? AND is_deleted = 'N'
  ORDER BY created_at DESC;
`;

export const getUsersWithPasswordResetFlag = `
  SELECT * FROM user WHERE password_reset_flag = 'Y' AND is_deleted = 'N';
`;
