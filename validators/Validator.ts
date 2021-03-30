import { validate, required, InputData, Rule } from "validasaur/mod.ts";

export type Rules = Record<string, Rule[]>;

export type ValidateOptions = {
  withId: boolean;
  partial: boolean;
};

export type ErrorDescriptor = {
  [key: string]: { [key: string]: string };
};

export type ValidationResult = {
  passes: string;
  errors: ErrorDescriptor[];
};

export class Validator {
  rules: Rules = {};

  async validate(
    entity: unknown,
    options: ValidateOptions = { withId: true, partial: false }
  ): Promise<ValidationResult> {
    const rules = this._buildValidationRules(options);
    return await this._validateWithRules(entity, rules);
  }

  _buildValidationRules(options: ValidateOptions) {
    let rules = { ...this.rules };
    if (!options.partial) rules = this._addRequiredRules(rules);

    if (!options.withId) rules.id = [];
    return rules;
  }

  async _validateWithRules(entity: unknown, rules: Rules) {
    const [passes, errors] = await validate(entity as InputData, rules);
    return ({ passes, errors } as unknown) as ValidationResult;
  }

  _addRequiredRules(rules: Rules) {
    for (const property in rules) rules[property].push(required);
    return rules;
  }
}
