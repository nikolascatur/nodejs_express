import { PoolManager } from "./connection_db";
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
