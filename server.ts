import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const PORT = ((Deno.env.get("PORT") as unknown) as number) || 8000;

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

await app.listen({ port: PORT });
