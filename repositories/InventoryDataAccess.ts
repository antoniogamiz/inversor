import { Model } from "denodb/mod.ts";

import { Validator } from "validators/Validator.ts";
import { IInventoryDataAccess } from "interfaces/mod.ts";
import { PaginationOptions } from "views/Paginator.ts";
import { ValidationError } from "errors/mod.ts";
import { Values } from "./mod.ts";

export abstract class InventoryDataAccess<Entity>
  implements IInventoryDataAccess<Entity> {
  constructor(protected model: typeof Model, protected validator: Validator) {}

  async create(values: Values) {
    const validationResult = await this.validator.validate(values, {
      withId: false,
    });
    if (!validationResult.passes) {
      throw new ValidationError(validationResult.errors);
    }
    await this.model.create(values);
  }

  async get(id: number) {
    const result = await this.model.where("id", id).all();
    if (result.length === 0) throw new Error("Element could not be found.");
    return (result[0] as unknown) as Entity;
  }

  async getAll(paginationOptions: PaginationOptions) {
    const { offset, limit } = paginationOptions;
    return ((await this.model
      .offset(offset)
      .limit(limit)
      .get()) as unknown) as Entity[];
  }

  async update(values: Values) {
    const validationResult = await this.validator.validate(values, {
      withId: true,
      partial: true,
    });
    if (!validationResult.passes) {
      throw new ValidationError(validationResult.errors);
    }
    await this.model.where("id", values["id"]).update(values);
  }

  async delete(id: number) {
    await this.model.deleteById(id);
  }

  async count() {
    // weird workaround. See https://github.com/eveningkid/denodb/issues/215
    return parseInt((((await this.model.count()) as unknown) as string) || "0");
  }
}
