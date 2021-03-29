import {
  IEnergyMeterValidator,
  IEnergyMeterDataAccess,
} from "interfaces/mod.ts";
import { EnergyMeterValidator } from "validators/mod.ts";
import { EnergyMeterModel } from "database/mod.ts";
import { ValidationError } from "errors/mod.ts";
import { Values } from "./mod.ts";

export class EnergyMeterDataAccess implements IEnergyMeterDataAccess {
  validator: IEnergyMeterValidator;
  constructor(validator?: IEnergyMeterValidator) {
    this.validator = validator || new EnergyMeterValidator();
  }

  async create(values: Values) {
    const validationResult = await this.validator.validate(values);
    if (!validationResult.passes) {
      throw new ValidationError(validationResult.errors);
    }
    await EnergyMeterModel.create(values);
  }
}
