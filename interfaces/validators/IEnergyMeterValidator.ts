export interface IEnergyMeterValidator {
  validate(entity: unknown): Promise<unknown>;
}
