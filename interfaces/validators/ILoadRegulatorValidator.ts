export interface ILoadRegulatorValidator {
  validate(entity: unknown): Promise<unknown>;
}
