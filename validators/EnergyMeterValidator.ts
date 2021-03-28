import {
  validate,
  required,
  isNumber,
  isString,
  numberBetween,
  lengthBetween,
  InputData,
} from "validasaur/mod.ts";

import { IEnergyMeterValidator } from "interfaces/validators/mod.ts";

export class EnergyMeterValidator implements IEnergyMeterValidator {
  async validate(entity: unknown) {
    const [passes, errors] = await validate(entity as InputData, {
      brand: [required, isString, lengthBetween(0, 20)],
      model: [required, isString, lengthBetween(0, 20)],
      description: [required, isString, lengthBetween(0, 500)],
      provider: [required, isString, lengthBetween(0, 50)],
      discount: [required, isNumber, numberBetween(0, 1)],
      pvp: [required, isNumber],
      price: [required, isNumber],
    });
    return { passes, ...errors };
  }
}
