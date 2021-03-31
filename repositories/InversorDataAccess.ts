import { Inversor } from "entities/mod.ts";
import { InventoryDataAccess } from "./InventoryDataAccess.ts";
import { Validator } from "validators/Validator.ts";
import { InversorModel } from "database/mod.ts";

export class InversorDataAccess extends InventoryDataAccess<Inversor> {
  constructor(protected validator: Validator) {
    super(InversorModel, validator);
  }
}
