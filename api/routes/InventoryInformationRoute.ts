import { Router, Context } from "oak/mod.ts";

import {
  EnergyMeterDescription,
  InverterDescription,
  LoadRegulatorDescription,
  SolarModuleDescription,
  SolarStructureDescription,
} from "entities/mod.ts";

const InventoryInformationRouter = new Router();

InventoryInformationRouter.get(`/inventory`, (ctx: Context) => {
  ctx.response.body = {
    "energy-meter": EnergyMeterDescription,
    inverter: InverterDescription,
    "load-regulator": LoadRegulatorDescription,
    "solar-module": SolarModuleDescription,
    "solar-structure": SolarStructureDescription,
  };
});

export { InventoryInformationRouter };
