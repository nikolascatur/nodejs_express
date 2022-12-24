export const UserQuery = {
  CreateUser: `INSERT INTO Users (Name, Balance) VALUES (?,0)`,
  FindUser: `SELECT * FROM Users WHERE Name=?`,
  AddBalance: `UPDATE Users SET Balance=? WHERE Name LIKE ?`,
  GetBalance: `SELECT Balance FROM Users WHERE Name=?`,
};
