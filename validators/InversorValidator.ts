import {
  validate,
  required,
  isNumber,
  isInt,
  isString,
  numberBetween,
  lengthBetween,
  InputData,
} from "validasaur/mod.ts";
import { ValidationResult } from "validators/mod.ts";

import { IInversorValidator } from "interfaces/validators/mod.ts";

export class InversorValidator implements IInversorValidator {
  async validate(entity: unknown) {
    const [passes, errors] = await validate(entity as InputData, {
      id: [required, isInt],
      brand: [required, isString, lengthBetween(0, 20)],
      model: [required, isString, lengthBetween(0, 50)],
      description: [required, isString, lengthBetween(0, 500)],
      ratedPower: [required, isNumber],
      currentType: [required, isString, lengthBetween(0, 20)],
      efficiency: [required, isNumber],
      provider: [required, isString, lengthBetween(0, 50)],
      discount: [required, isNumber, numberBetween(0, 1)],
      pvp: [required, isNumber],
      price: [required, isNumber],
    });
    return ({ passes, errors } as unknown) as ValidationResult;
  }
}
