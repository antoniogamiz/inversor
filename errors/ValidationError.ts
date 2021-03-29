import { ErrorDescriptor } from "validators/mod.ts";
export class ValidationError extends Error {
  name = "ValidationError";
  constructor(errors: ErrorDescriptor[]) {
    super();
    this.message = `Validation error: ${JSON.stringify(errors)}`;
  }
}
