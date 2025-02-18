export const insertUserInteraction = `
  INSERT INTO user_interaction (
    interaction_id, recipient_user_id, sender_user_id, sender_nickname, 
    post_id, comment_id, content, interaction_type, is_read, is_deleted, 
    created_at
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'N', 'N', SYSDATE);
`;

export const getAllUserInteractions = `
  SELECT * FROM user_interaction WHERE is_deleted = 'N' ORDER BY created_at DESC;
`;

export const getUserInteractionsByRecipient = `
  SELECT * FROM user_interaction 
  WHERE recipient_user_id = ? AND is_deleted = 'N' 
  ORDER BY created_at DESC;
`;

export const getUserInteractionById = `
  SELECT * FROM user_interaction WHERE interaction_id = ? AND is_deleted = 'N';
`;

export const markUserInteractionAsRead = `
  UPDATE user_interaction 
  SET is_read = 'Y', read_at = SYSDATE
  WHERE interaction_id = ?;
`;

export const markUserInteractionAsDeleted = `
  UPDATE user_interaction 
  SET is_deleted = 'Y'
  WHERE interaction_id = ?;
`;

export const permanentlyDeleteUserInteraction = `
  DELETE FROM user_interaction WHERE interaction_id = ?;
`;

export const getUnreadUserInteractions = `
  SELECT * FROM user_interaction 
  WHERE recipient_user_id = ? AND is_read = 'N' AND is_deleted = 'N'
  ORDER BY created_at DESC;
`;

export const getUserInteractionsByType = `
  SELECT * FROM user_interaction 
  WHERE interaction_type = ? AND is_deleted = 'N'
  ORDER BY created_at DESC;
`;

export const getUserInteractionsInDateRange = `
  SELECT * FROM user_interaction 
  WHERE created_at BETWEEN ? AND ? AND is_deleted = 'N'
  ORDER BY created_at DESC;
`;
