import { Router, Context } from "oak/mod.ts";
import {
  EnergyMeterValidator,
  InversorValidator,
  LoadRegulatorValidator,
  SolarModuleValidator,
  SolarStructureValidator,
} from "validators/mod.ts";
import {
  EnergyMeterDataAccess,
  InversorDataAccess,
  LoadRegulatorDataAccess,
  SolarModuleDataAccess,
  SolarStructureDataAccess,
} from "repositories/mod.ts";
import { InventoryView } from "views/mod.ts";
import {
  EnergyMeter,
  Inversor,
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
const inversorValidator = new InversorValidator();
const loadRegulatorValidator = new LoadRegulatorValidator();
const solarModuleValidator = new SolarModuleValidator();
const solarStructureValidator = new SolarStructureValidator();

const energyMeterDataAccess = new EnergyMeterDataAccess(energyMeterValidator);
const inversorDataAccess = new InversorDataAccess(inversorValidator);
const loadRegulatorDataAccess = new LoadRegulatorDataAccess(
  loadRegulatorValidator
);
const solarModuleDataAccess = new SolarModuleDataAccess(solarModuleValidator);
const solarStructureDataAccess = new SolarStructureDataAccess(
  solarStructureValidator
);

const energyMeterView = new InventoryView<EnergyMeter>(energyMeterDataAccess);
const inversorView = new InventoryView<Inversor>(inversorDataAccess);
const loadRegulatorView = new InventoryView<LoadRegulator>(
  loadRegulatorDataAccess
);
const solarModuleView = new InventoryView<SolarModule>(solarModuleDataAccess);
const solarStructureView = new InventoryView<SolarStructure>(
  solarStructureDataAccess
);

fillRouter<EnergyMeter>("energy-meters", InventoryRouter, energyMeterView);
fillRouter<Inversor>("inversors", InventoryRouter, inversorView);
fillRouter<LoadRegulator>(
  "load-regulators",
  InventoryRouter,
  loadRegulatorView
);
fillRouter<SolarModule>("solar-modules", InventoryRouter, solarModuleView);
fillRouter<SolarStructure>(
  "solar-structure",
  InventoryRouter,
  solarStructureView
);

export { InventoryRouter };
