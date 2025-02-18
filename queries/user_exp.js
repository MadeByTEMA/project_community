export const insertUserExp = `
  INSERT INTO user_exp (
    user_id, user_exp, created_at, created_by
  ) VALUES (?, ?, SYSDATE, ?);
`;

export const getAllUserExp = `
  SELECT * FROM user_exp ORDER BY user_exp DESC;
`;

export const getUserExpById = `
  SELECT * FROM user_exp WHERE user_id = ?;
`;

export const updateUserExp = `
  UPDATE user_exp 
  SET user_exp = ?, created_at = SYSDATE, created_by = ?
  WHERE user_id = ?;
`;

export const increaseUserExp = `
  UPDATE user_exp 
  SET user_exp = user_exp + ?, created_at = SYSDATE, created_by = ?
  WHERE user_id = ?;
`;

export const decreaseUserExp = `
  UPDATE user_exp 
  SET user_exp = GREATEST(user_exp - ?, 0), created_at = SYSDATE, created_by = ?
  WHERE user_id = ?;
`;

export const deleteUserExp = `
  DELETE FROM user_exp WHERE user_id = ?;
`;

export const getTopUsersByExp = `
  SELECT * FROM user_exp ORDER BY user_exp DESC LIMIT ?;
`;

export const getUserExpInDateRange = `
  SELECT * FROM user_exp WHERE created_at BETWEEN ? AND ? ORDER BY created_at DESC;
`;
