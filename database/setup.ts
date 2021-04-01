import * as log from "https://deno.land/std@0.91.0/log/mod.ts";

import { PostgresConnector, Database } from "denodb/mod.ts";

import {
  InverterModel,
  EnergyMeterModel,
  LoadRegulatorModel,
  SolarModuleModel,
  SolarStructureModel,
} from "./mod.ts";

export const setupDataBase = async () => {
  const connection = new PostgresConnector({
    host: Deno.env.get("DB_HOST") || "",
    username: Deno.env.get("DB_USERNAME") || "",
    password: Deno.env.get("DB_PASSWORD") || "",
    database: Deno.env.get("DB_NAME") || "",
    port: parseInt((Deno.env.get("DB_PORT") as unknown) as string) || 5432,
  });

  const db = new Database(connection);

  linkModels(db);
  await syncDataBase(db);

  return db;
};

const linkModels = (db: Database) => {
  db.link([
    EnergyMeterModel,
    InverterModel,
    EnergyMeterModel,
    LoadRegulatorModel,
    SolarModuleModel,
    SolarStructureModel,
  ]);
};

const syncDataBase = async (db: Database) => {
  try {
    await db.sync();
  } catch (error) {
    log.warning(error.message);
  }
};
