import { Router, Context } from "oak/mod.ts";
import {
  EnergyMeterValidator,
  InverterValidator,
  LoadRegulatorValidator,
  SolarModuleValidator,
  SolarStructureValidator,
} from "validators/mod.ts";
import {
  EnergyMeterDataAccess,
  InverterDataAccess,
  LoadRegulatorDataAccess,
  SolarModuleDataAccess,
  SolarStructureDataAccess,
} from "repositories/mod.ts";
import { InventoryView } from "views/mod.ts";
import {
  EnergyMeter,
  Inverter,
  LoadRegulator,
  SolarModule,
  SolarStructure,
} from "entities/mod.ts";

const InventoryRouter = new Router();

const fillRouter = <Entity>(
  routeName: string,
  router: Router,
  view: InventoryView<Entity>
) => {
  router.post(`/${routeName}`, view.create);
  router.get(`/${routeName}`, view.getAll);
  router.get(`/${routeName}/:id`, view.get);
  return router;
};

const energyMeterValidator = new EnergyMeterValidator();
const inverterValidator = new InverterValidator();
const loadRegulatorValidator = new LoadRegulatorValidator();
const solarModuleValidator = new SolarModuleValidator();
const solarStructureValidator = new SolarStructureValidator();

const energyMeterDataAccess = new EnergyMeterDataAccess(energyMeterValidator);
const inverterDataAccess = new InverterDataAccess(inverterValidator);
const loadRegulatorDataAccess = new LoadRegulatorDataAccess(
  loadRegulatorValidator
);
const solarModuleDataAccess = new SolarModuleDataAccess(solarModuleValidator);
const solarStructureDataAccess = new SolarStructureDataAccess(
  solarStructureValidator
);

const energyMeterView = new InventoryView<EnergyMeter>(
  "energy-meters",
  energyMeterDataAccess
);
const inverterView = new InventoryView<Inverter>(
  "inverters",
  inverterDataAccess
);
const loadRegulatorView = new InventoryView<LoadRegulator>(
  "load-regulators",
  loadRegulatorDataAccess
);
const solarModuleView = new InventoryView<SolarModule>(
  "solar-modules",
  solarModuleDataAccess
);
const solarStructureView = new InventoryView<SolarStructure>(
  "solar-structures",
  solarStructureDataAccess
);

fillRouter<EnergyMeter>("energy-meters", InventoryRouter, energyMeterView);
fillRouter<Inverter>("inverters", InventoryRouter, inverterView);
fillRouter<LoadRegulator>(
  "load-regulators",
  InventoryRouter,
  loadRegulatorView
);
fillRouter<SolarModule>("solar-modules", InventoryRouter, solarModuleView);
fillRouter<SolarStructure>(
  "solar-structures",
  InventoryRouter,
  solarStructureView
);

export { InventoryRouter };
