import { SolarStructure } from "entities/mod.ts";
import { InventoryDataAccess } from "./InventoryDataAccess.ts";
import { Validator } from "validators/Validator.ts";
import { SolarStructureModel } from "database/mod.ts";

export class SolarStructureDataAccess extends InventoryDataAccess<SolarStructure> {
  constructor(protected validator: Validator) {
    super(SolarStructureModel, validator);
  }
}
