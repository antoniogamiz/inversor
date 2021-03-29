import { ValidationResult } from "validators/mod.ts";
export interface IEnergyMeterValidator {
  validate(entity: unknown): Promise<ValidationResult>;
}
