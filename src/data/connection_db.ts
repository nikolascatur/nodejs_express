import { createPool, Pool } from "mysql";
import { DATA_SOURCE } from "../config/vars.config";

const dataSource = DATA_SOURCE.mysqlDataSource;

let pool: Pool;
export class PoolManager {
  init() {
    try {
      pool = createPool({
        connectionLimit: dataSource.DB_CONNECTION_LIMIT,
        host: dataSource.DB_HOST,
        user: dataSource.DB_USER,
        password: dataSource.DB_PASSWORD,
        database: dataSource.DB_DATABASE,
        port: 3306,
      });
      console.debug("Mysql generator pool succesfull");
    } catch (error) {
      console.error("[mysq.connector][init][error] ", error);
      throw new Error("failed initialize error");
    }
  }

  execute = <T>(query: string, params: string[] | Object): Promise<T> => {
    try {
      if (!pool)
        throw new Error(
          "Pool was not create. please ensure pool created before runnning"
        );

      return new Promise<T>((resolve, reject) => {
        pool.query(query, params, (error, results) => {
          console.info(results);
          if (error) reject(error);
          else resolve(results);
        });
      });
    } catch (error) {
      console.error("[mysql.connector][execute][Error]: ", error);
      throw new Error("failed execute mysql query");
    }
  };
}
