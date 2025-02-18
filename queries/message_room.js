export const insertMessageRoom = `
  INSERT INTO message_room (
    message_room_id, user_1_id, user_2_id, is_deleted_by_user_1, 
    is_deleted_by_user_2, created_at
  ) VALUES (?, ?, ?, 'N', 'N', SYSDATE);
`;

export const getMessageRoomById = `
  SELECT * FROM message_room WHERE message_room_id = ?;
`;

export const getMessageRoomsByUserId = `
  SELECT * FROM message_room 
  WHERE (user_1_id = ? AND is_deleted_by_user_1 = 'N') 
     OR (user_2_id = ? AND is_deleted_by_user_2 = 'N')
  ORDER BY created_at DESC;
`;

export const getMessageRoomByUsers = `
  SELECT * FROM message_room 
  WHERE (user_1_id = ? AND user_2_id = ?) OR (user_1_id = ? AND user_2_id = ?);
`;

export const markMessageRoomDeletedByUser = `
  UPDATE message_room 
  SET is_deleted_by_user_1 = CASE WHEN user_1_id = ? THEN 'Y' ELSE is_deleted_by_user_1 END,
      is_deleted_by_user_2 = CASE WHEN user_2_id = ? THEN 'Y' ELSE is_deleted_by_user_2 END
  WHERE message_room_id = ?;
`;

export const permanentlyDeleteMessageRoom = `
  DELETE FROM message_room 
  WHERE message_room_id = ? AND is_deleted_by_user_1 = 'Y' AND is_deleted_by_user_2 = 'Y';
`;

export const getRecentMessageRooms = `
  SELECT * FROM message_room ORDER BY created_at DESC LIMIT ?;
`;

export const getMessageRoomsInDateRange = `
  SELECT * FROM message_room WHERE created_at BETWEEN ? AND ? ORDER BY created_at DESC;
`;
