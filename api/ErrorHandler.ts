import { Context } from "oak/mod.ts";
import { ValidationError } from "errors/mod.ts";

export async function handleErrors(
  context: Context,
  next: () => Promise<void>
) {
  try {
    await next();
  } catch (error) {
    if (error instanceof ValidationError) {
      context.response.status = 400;
      context.response.body = { message: error.errors, type: error.name };
    } else {
      context.response.status = 500;
      context.response.body = { message: error.message, type: error.name };
    }
  }
  return;
}
