export interface ISolarModuleValidator {
  validate(entity: unknown): Promise<unknown>;
}
