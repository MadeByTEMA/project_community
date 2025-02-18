export const insertUserMemoBlock = `
  INSERT INTO user_memo_block (
    user_id, target_user_id, is_message_blocked, is_post_blocked, memo_content, 
    created_at, created_by
  ) VALUES (?, ?, 'N', 'N', ?, SYSDATE, ?);
`;

export const getUserMemoBlockByUserId = `
  SELECT * FROM user_memo_block WHERE user_id = ? ORDER BY created_at DESC;
`;

export const getUserMemoBlockByTargetId = `
  SELECT * FROM user_memo_block WHERE target_user_id = ? ORDER BY created_at DESC;
`;

export const getUserMemoBlockByUserAndTarget = `
  SELECT * FROM user_memo_block WHERE user_id = ? AND target_user_id = ?;
`;

export const updateUserMemoBlock = `
  UPDATE user_memo_block 
  SET is_message_blocked = ?, is_post_blocked = ?, memo_content = ?, 
      updated_at = SYSDATE, updated_by = ?
  WHERE user_id = ? AND target_user_id = ?;
`;

export const deleteUserMemoBlock = `
  DELETE FROM user_memo_block WHERE user_id = ? AND target_user_id = ?;
`;

export const getBlockedUsersByMessage = `
  SELECT * FROM user_memo_block WHERE is_message_blocked = 'Y' ORDER BY created_at DESC;
`;

export const getBlockedUsersByPost = `
  SELECT * FROM user_memo_block WHERE is_post_blocked = 'Y' ORDER BY created_at DESC;
`;

export const getUserMemoBlockInDateRange = `
  SELECT * FROM user_memo_block WHERE updated_at BETWEEN ? AND ? ORDER BY updated_at DESC;
`;
