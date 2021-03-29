import { ValidationResult } from "validators/mod.ts";

export interface IInversorValidator {
  validate(entity: unknown): Promise<ValidationResult>;
}
