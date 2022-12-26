import { PoolManager } from "./connection_db";
import { user } from "./model/user";
import { UserQuery } from "./query/User_query";

const poolManager = new PoolManager();
poolManager.init();

export const createUser = async (userName: string, password: string) => {
  const results = await poolManager.execute<{ affectedRows: number }>(
    UserQuery.CreateUser,
    [userName]
  );
  return results.affectedRows > 0;
};

export const findUser = async (userName: string) => {
  const result = await poolManager.execute<Array<user>>(UserQuery.FindUser, [
    userName,
  ]);
  return result;
};

export const addBalance = async (userName: string, balance: number) => {};
