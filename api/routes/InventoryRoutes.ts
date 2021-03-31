import { Router } from "oak/mod.ts";
import { InversorDataAccess } from "repositories/mod.ts";
import { InversorValidator } from "validators/mod.ts";
import { InventoryView } from "views/mod.ts";
import { Inversor } from "entities/mod.ts";

const InventoryRouter = new Router();

const inversorValidator = new InversorValidator();
const inversorDataAccess = new InversorDataAccess(inversorValidator);
export const inversorView = new InventoryView<Inversor>(inversorDataAccess);

InventoryRouter.post("/inversors", inversorView.create);
InventoryRouter.get("/inversors", inversorView.getAll);
InventoryRouter.get("/inversors/:id", inversorView.get);

export { InventoryRouter };
