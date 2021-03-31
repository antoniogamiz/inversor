import { SolarModule } from "entities/mod.ts";
import { InventoryDataAccess } from "./InventoryDataAccess.ts";
import { Validator } from "validators/Validator.ts";
import { SolarModuleModel } from "database/mod.ts";

export class SolarModuleDataAccess extends InventoryDataAccess<SolarModule> {
  constructor(protected validator: Validator) {
    super(SolarModuleModel, validator);
  }
}
