export const getUserByIdAndPassword = `
  SELECT * FROM users WHERE id = ? AND password = ?
`;