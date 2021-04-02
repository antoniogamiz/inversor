import { Application } from "oak/mod.ts";
import { handleErrors } from "api/ErrorHandler.ts";
import { InventoryRouter } from "api/routes/InventoryRoutes.ts";
import { InventoryInformationRouter } from "api/routes/InventoryInformationRoute.ts";

export const app = new Application();

app.use(handleErrors);
app.use(InventoryRouter.routes());
app.use(InventoryInformationRouter.routes());
app.use(InventoryRouter.allowedMethods());

app.use(InventoryInformationRouter.allowedMethods());
