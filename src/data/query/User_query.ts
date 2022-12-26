export const UserQuery = {
  CreateUser: `INSERT INTO Users (Name, Balance) VALUES (?,0)`,
  FindUser: `SELECT UserId,Name, Balance FROM Users WHERE Name Like?`,
  AddBalance: `UPDATE Users SET Balance=? WHERE Name LIKE ?`,
  GetBalance: `SELECT Balance FROM Users WHERE Name=?`,
};
