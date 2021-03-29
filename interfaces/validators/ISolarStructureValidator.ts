import { ValidationResult } from "validators/mod.ts";

export interface ISolarStructureValidator {
  validate(entity: unknown): Promise<ValidationResult>;
}
