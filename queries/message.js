export const insertMessage = `
  INSERT INTO message (
    message_id, message_room_id, content, sender_id, sender_nickname, 
    receiver_id, receiver_nickname, is_deleted_by_sender, is_deleted_by_receiver, 
    sent_at
  ) VALUES (?, ?, ?, ?, ?, ?, ?, 'N', 'N', SYSDATE);
`;

export const getMessagesByRoomId = `
  SELECT * FROM message 
  WHERE message_room_id = ? 
    AND is_deleted_by_sender = 'N' 
    AND is_deleted_by_receiver = 'N'
  ORDER BY sent_at ASC;
`;

export const getMessagesByUserId = `
  SELECT * FROM message 
  WHERE (sender_id = ? AND is_deleted_by_sender = 'N') 
     OR (receiver_id = ? AND is_deleted_by_receiver = 'N')
  ORDER BY sent_at DESC;
`;

export const markMessageAsRead = `
  UPDATE message 
  SET received_at = SYSDATE 
  WHERE message_id = ? AND received_at IS NULL;
`;

export const markMessageDeletedByUser = `
  UPDATE message 
  SET is_deleted_by_sender = CASE WHEN sender_id = ? THEN 'Y' ELSE is_deleted_by_sender END,
      is_deleted_by_receiver = CASE WHEN receiver_id = ? THEN 'Y' ELSE is_deleted_by_receiver END
  WHERE message_id = ?;
`;

export const permanentlyDeleteMessage = `
  DELETE FROM message 
  WHERE message_id = ? AND is_deleted_by_sender = 'Y' AND is_deleted_by_receiver = 'Y';
`;

export const getUnreadMessagesByUserId = `
  SELECT * FROM message 
  WHERE receiver_id = ? AND received_at IS NULL AND is_deleted_by_receiver = 'N'
  ORDER BY sent_at DESC;
`;

export const getRecentMessages = `
  SELECT * FROM message ORDER BY sent_at DESC LIMIT ?;
`;

export const getMessagesInDateRange = `
  SELECT * FROM message 
  WHERE sent_at BETWEEN ? AND ? 
  ORDER BY sent_at DESC;
`;
