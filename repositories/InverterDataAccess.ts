import { Inverter } from "entities/mod.ts";
import { InventoryDataAccess } from "./InventoryDataAccess.ts";
import { Validator } from "validators/Validator.ts";
import { InverterModel } from "database/mod.ts";

export class InverterDataAccess extends InventoryDataAccess<Inverter> {
  constructor(protected validator: Validator) {
    super(InverterModel, validator);
  }
}
