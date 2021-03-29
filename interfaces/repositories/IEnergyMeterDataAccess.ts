import { IEnergyMeterValidator } from "interfaces/mod.ts";
import { EnergyMeter } from "entities/mod.ts";
import { Values } from "repositories/mod.ts";

export interface IEnergyMeterDataAccess {
  validator: IEnergyMeterValidator;
  create(values: Values): void;
  // get(): EnergyMeter[];
  // update(entity: EnergyMeter): void;
  // delete(id: bigint): void;
}
