export const insertAdminUser = `
  INSERT INTO admin_user (
    user_id, nickname, user_role, password, is_password_reset, email, user_auth_id,
    extra_1, extra_2, extra_3, extra_4, extra_5,
    last_login_at, ban_start_at, ban_end_at, is_withdrawn, remarks,
    registered_at, registered_by
  ) VALUES (?, ?, 'USER', ?, 'N', ?, ?, ?, ?, ?, ?, ?, NULL, NULL, NULL, 'N', ?, SYSDATE, ?);
`;

export const getAdminUserById = `
  SELECT * FROM admin_user WHERE user_id = ? AND is_withdrawn = 'N';
`;

export const getAllAdminUsers = `
  SELECT * FROM admin_user WHERE is_withdrawn = 'N' ORDER BY registered_at DESC;
`;

export const getAdminUsersByRole = `
  SELECT * FROM admin_user WHERE user_role = ? AND is_withdrawn = 'N' ORDER BY registered_at DESC;
`;

export const updateAdminUser = `
  UPDATE admin_user 
  SET nickname = ?, email = ?, user_role = ?, updated_at = SYSDATE, updated_by = ? 
  WHERE user_id = ? AND is_withdrawn = 'N';
`;

export const updateAdminUserPassword = `
  UPDATE admin_user 
  SET password = ?, is_password_reset = 'N', updated_at = SYSDATE, updated_by = ?
  WHERE user_id = ? AND is_withdrawn = 'N';
`;

export const markAdminUserAsWithdrawn = `
  UPDATE admin_user 
  SET is_withdrawn = 'Y', updated_at = SYSDATE, updated_by = ?
  WHERE user_id = ?;
`;

export const banAdminUser = `
  UPDATE admin_user 
  SET ban_start_at = ?, ban_end_at = ?, updated_at = SYSDATE, updated_by = ?
  WHERE user_id = ? AND is_withdrawn = 'N';
`;

export const unbanAdminUser = `
  UPDATE admin_user 
  SET ban_start_at = NULL, ban_end_at = NULL, updated_at = SYSDATE, updated_by = ?
  WHERE user_id = ? AND is_withdrawn = 'N';
`;

export const getBannedAdminUsers = `
  SELECT * FROM admin_user 
  WHERE ban_start_at IS NOT NULL AND (ban_end_at IS NULL OR ban_end_at > SYSDATE) 
  AND is_withdrawn = 'N' ORDER BY ban_start_at DESC;
`;

export const getAdminUsersInDateRange = `
  SELECT * FROM admin_user 
  WHERE registered_at BETWEEN ? AND ? AND is_withdrawn = 'N' 
  ORDER BY registered_at DESC;
`;

export const getAdminUsersByLastLogin = `
  SELECT * FROM admin_user 
  WHERE last_login_at BETWEEN ? AND ? AND is_withdrawn = 'N' 
  ORDER BY last_login_at DESC;
`;
