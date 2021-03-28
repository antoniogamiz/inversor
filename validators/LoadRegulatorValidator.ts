import {
  validate,
  required,
  isNumber,
  isString,
  numberBetween,
  lengthBetween,
  InputData,
} from "validasaur/mod.ts";

import { ILoadRegulatorValidator } from "interfaces/validators/mod.ts";

export class LoadRegulatorValidator implements ILoadRegulatorValidator {
  async validate(entity: unknown) {
    const [passes, errors] = await validate(entity as InputData, {
      brand: [required, isString, lengthBetween(0, 20)],
      model: [required, isString, lengthBetween(0, 50)],
      description: [required, isString, lengthBetween(0, 500)],
      voc: [required, isNumber],
      isc: [required, isNumber],
      ibat: [required, isNumber],
      maxFVPotency12V: [required, isNumber],
      maxFVPotency24V: [required, isNumber],
      maxFVPotency48V: [required, isNumber],
      efficiency: [required, isNumber],
      provider: [required, isString, lengthBetween(0, 50)],
      discount: [required, isNumber, numberBetween(0, 1)],
      pvp: [required, isNumber],
      price: [required, isNumber],
    });
    return { passes, ...errors };
  }
}
