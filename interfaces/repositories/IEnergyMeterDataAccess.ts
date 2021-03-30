import { IEnergyMeterValidator } from "interfaces/mod.ts";
import { EnergyMeter } from "entities/mod.ts";
import { Values } from "repositories/mod.ts";

export interface IEnergyMeterDataAccess {
  validator: IEnergyMeterValidator;
  create(values: Values): Promise<void>;
  get(id: number): Promise<EnergyMeter>;
  getAll(): Promise<EnergyMeter[]>;
  update(values: Values): Promise<void>;
  delete(id: number): Promise<void>;
}
