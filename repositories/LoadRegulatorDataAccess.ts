import { LoadRegulator } from "entities/mod.ts";
import { InventoryDataAccess } from "./InventoryDataAccess.ts";
import { Validator } from "validators/Validator.ts";
import { LoadRegulatorModel } from "database/mod.ts";

export class LoadRegulatorDataAccess extends InventoryDataAccess<LoadRegulator> {
  constructor(protected validator: Validator) {
    super(LoadRegulatorModel, validator);
  }
}
