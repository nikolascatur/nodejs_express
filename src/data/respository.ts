import { PoolManager } from "./connection_db";
import { user } from "./model/user";
import { TransactionQuery, UserQuery } from "./query/User_query";

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

export const addBalance = async (userName: string, balance: number) => {
  const result = await poolManager.execute<
    Array<Array<{ "@id:=UserId": number }>>
  >(TransactionQuery.AddBalance, [`${balance}`, userName]);
  let hasil: number = 0;
  result.map((res) => {
    if (res !== undefined && res.length > 0) {
      hasil = res.length;
    }
  });
  return hasil > 0;
};
