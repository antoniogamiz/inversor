import { PostgresConnector, Database } from "denodb/mod.ts";
import { InversorModel } from "./mod.ts";

const MODELS = [InversorModel];

export const setupDataBase = async () => {
  const connection = new PostgresConnector({
    host: "localhost",
    username: "postgres",
    password: "antonio",
    database: "inversor",
    port: 5432,
  });

  const db = new Database(connection);

  db.link(MODELS);
  await db.sync();

  return db;
};
