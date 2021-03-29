import { ValidationResult } from "validators/mod.ts";

export interface ISolarModuleValidator {
  validate(entity: unknown): Promise<ValidationResult>;
}
