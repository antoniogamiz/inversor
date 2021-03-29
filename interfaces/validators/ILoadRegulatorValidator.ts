import { ValidationResult } from "validators/mod.ts";

export interface ILoadRegulatorValidator {
  validate(entity: unknown): Promise<ValidationResult>;
}
