import { ErrorDescriptor } from "validators/mod.ts";
export class ValidationError extends Error {
  name = "ValidationError";
  constructor(public errors: ErrorDescriptor[]) {
    super();
    this.message = `Validation error: ${JSON.stringify(errors)}`;
  }
}
