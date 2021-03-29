import { PostgresConnector, Database } from "denodb/mod.ts";
import { InversorModel } from "./mod.ts";

export const setupDataBase = async () => {
  const connection = new PostgresConnector({
    host: Deno.env.get("DB_HOST") || "",
    username: Deno.env.get("DB_USERNAME") || "",
    password: Deno.env.get("DB_PASSWORD") || "",
    database: Deno.env.get("DB_NAME") || "",
    port: parseInt((Deno.env.get("DB_PORT") as unknown) as string) || 5432,
  });

  const db = new Database(connection);

  db.link([InversorModel]);
  await db.sync();

  return db;
};
