export const insertUserSetting = `
  INSERT INTO user_setting (
    user_id, login_alert_enabled, email_subscription_enabled, 
    message_enabled, font_size, dark_mode_enabled, updated_at, updated_by
  ) VALUES (?, 'N', 'N', 'N', NULL, 'N', SYSDATE, ?);
`;

export const getUserSettingByUserId = `
  SELECT * FROM user_setting WHERE user_id = ?;
`;

export const getAllUserSettings = `
  SELECT * FROM user_setting ORDER BY updated_at DESC;
`;

export const updateUserSetting = `
  UPDATE user_setting 
  SET login_alert_enabled = ?, email_subscription_enabled = ?, 
      message_enabled = ?, font_size = ?, dark_mode_enabled = ?, 
      updated_at = SYSDATE, updated_by = ?
  WHERE user_id = ?;
`;

export const updateUserDarkMode = `
  UPDATE user_setting 
  SET dark_mode_enabled = ?, updated_at = SYSDATE, updated_by = ?
  WHERE user_id = ?;
`;

export const updateUserFontSize = `
  UPDATE user_setting 
  SET font_size = ?, updated_at = SYSDATE, updated_by = ?
  WHERE user_id = ?;
`;

export const getUsersWithDarkModeEnabled = `
  SELECT * FROM user_setting WHERE dark_mode_enabled = 'Y';
`;

export const getUsersWithMessageEnabled = `
  SELECT * FROM user_setting WHERE message_enabled = 'Y';
`;

export const getUserSettingsUpdatedInDateRange = `
  SELECT * FROM user_setting WHERE updated_at BETWEEN ? AND ? ORDER BY updated_at DESC;
`;
