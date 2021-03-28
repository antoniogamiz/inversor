export interface IInversorValidator {
  validate(entity: unknown): Promise<unknown>;
}
