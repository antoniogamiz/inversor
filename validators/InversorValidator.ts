import {
  isNumber,
  isInt,
  isString,
  numberBetween,
  lengthBetween,
} from "validasaur/mod.ts";

import { IInversorValidator } from "interfaces/validators/mod.ts";

export class InversorValidator extends IInversorValidator {
  rules = {
    id: [isInt],
    brand: [isString, lengthBetween(0, 20)],
    model: [isString, lengthBetween(0, 50)],
    description: [isString, lengthBetween(0, 500)],
    ratedPower: [isNumber],
    currentType: [isString, lengthBetween(0, 20)],
    efficiency: [isNumber],
    provider: [isString, lengthBetween(0, 50)],
    discount: [isNumber, numberBetween(0, 1)],
    pvp: [isNumber],
    price: [isNumber],
  };
}
