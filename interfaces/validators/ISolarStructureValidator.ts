export interface ISolarStructureValidator {
  validate(entity: unknown): Promise<unknown>;
}
