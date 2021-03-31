import { setupDataBase } from "database/mod.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";
import { handleErrors } from "api/ErrorHandler.ts";
import { InventoryRouter } from "api/routes/InventoryRoutes.ts";

const app = new Application();

const PORT = parseInt((Deno.env.get("PORT") as unknown) as string) || 8000;

await setupDataBase();

app.use(handleErrors);
app.use(InventoryRouter.routes());
app.use(InventoryRouter.allowedMethods());

await app.listen({ port: PORT });
