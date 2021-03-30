import { setupDataBase } from "database/mod.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";
import { InversorView } from "api/routes/CatalogRoute.ts";
import { handleErrors } from "api/ErrorHandler.ts";

const app = new Application();

const PORT = parseInt((Deno.env.get("PORT") as unknown) as string) || 8000;

await setupDataBase();

app.use(handleErrors);
app.use(InversorView.routes());
app.use(InversorView.allowedMethods());

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

await app.listen({ port: PORT });
