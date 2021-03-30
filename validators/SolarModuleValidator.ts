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

import { ISolarModuleValidator } from "interfaces/validators/mod.ts";

export class SolarModuleValidator implements ISolarModuleValidator {
  async validate(entity: unknown) {
    const [passes, errors] = await validate(entity as InputData, {
      id: [required, isInt],
      brand: [required, isString, lengthBetween(0, 20)],
      model: [required, isString, lengthBetween(0, 50)],
      description: [required, isString, lengthBetween(0, 500)],
      voc: [required, isNumber],
      isc: [required, isNumber],
      vmp: [required, isNumber],
      imp: [required, isNumber],
      efficiency: [required, isNumber],
      cp: [required, isNumber],
      cvoc: [required, isNumber],
      cisc: [required, isNumber],
      provider: [required, isString, lengthBetween(0, 50)],
      discount: [required, isNumber, numberBetween(0, 1)],
      pvp: [required, isNumber],
      price: [required, isNumber],
    });
    return ({ passes, errors } as unknown) as ValidationResult;
  }
}
