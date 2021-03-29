import { setupDataBase } from "database/mod.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const PORT = parseInt((Deno.env.get("PORT") as unknown) as string) || 8000;

await setupDataBase();

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

console.log(PORT);

await app.listen({ port: PORT });
