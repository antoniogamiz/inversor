import { EnergyMeter } from "entities/mod.ts";
import { InventoryDataAccess } from "./InventoryDataAccess.ts";
import { Validator } from "validators/Validator.ts";
import { EnergyMeterModel } from "database/mod.ts";

export class EnergyMeterDataAccess extends InventoryDataAccess<EnergyMeter> {
  constructor(protected validator: Validator) {
    super(EnergyMeterModel, validator);
  }
}
