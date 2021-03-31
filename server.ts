import { setupDataBase } from "database/mod.ts";
import { app } from "api/app.ts";

const PORT = parseInt((Deno.env.get("PORT") as unknown) as string) || 8000;

await setupDataBase();
await app.listen({ port: PORT });
