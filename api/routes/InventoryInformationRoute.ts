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
    "energy-meters": EnergyMeterDescription,
    inverters: InverterDescription,
    "load-regulators": LoadRegulatorDescription,
    "solar-modules": SolarModuleDescription,
    "solar-structures": SolarStructureDescription,
  };
});

export { InventoryInformationRouter };
