import {
  IEnergyMeterValidator,
  IEnergyMeterDataAccess,
} from "interfaces/mod.ts";
import { EnergyMeter } from "entities/mod.ts";
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
    const validationResult = await this.validator.validate(values, {
      withId: true,
    });
    if (!validationResult.passes) {
      throw new ValidationError(validationResult.errors);
    }
    await EnergyMeterModel.create(values);
  }

  async get(id: number) {
    return ((
      await EnergyMeterModel.where("id", id).all()
    )[0] as unknown) as EnergyMeter;
  }

  async getAll() {
    return ((await EnergyMeterModel.all()) as unknown) as EnergyMeter[];
  }

  async update(values: Values) {
    const validationResult = await this.validator.validate(values, {
      withId: true,
      partial: true,
    });
    if (!validationResult.passes) {
      throw new ValidationError(validationResult.errors);
    }
    await EnergyMeterModel.where("id", values["id"]).update(values);
  }

  async delete(id: number) {
    await EnergyMeterModel.where("id", id).delete();
  }
}
