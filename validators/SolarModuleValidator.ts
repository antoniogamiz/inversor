import {
  isNumber,
  isInt,
  isString,
  numberBetween,
  lengthBetween,
} from "validasaur/mod.ts";

import { Validator } from "validators/Validator.ts";

export class SolarModuleValidator extends Validator {
  rules = {
    id: [isInt],
    brand: [isString, lengthBetween(0, 20)],
    model: [isString, lengthBetween(0, 50)],
    description: [isString, lengthBetween(0, 500)],
    voc: [isNumber],
    isc: [isNumber],
    vmp: [isNumber],
    imp: [isNumber],
    efficiency: [isNumber],
    cp: [isNumber],
    cvoc: [isNumber],
    cisc: [isNumber],
    provider: [isString, lengthBetween(0, 50)],
    discount: [isNumber, numberBetween(0, 1)],
    pvp: [isNumber],
    price: [isNumber],
  };
}
