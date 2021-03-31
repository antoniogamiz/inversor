import { Application } from "oak/mod.ts";
import { handleErrors } from "api/ErrorHandler.ts";
import { InventoryRouter } from "api/routes/InventoryRoutes.ts";

export const app = new Application();

app.use(handleErrors);
app.use(InventoryRouter.routes());
app.use(InventoryRouter.allowedMethods());
