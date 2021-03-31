import { Values } from "repositories/mod.ts";

export interface IInventoryDataAccess<Entity> {
  create(values: Values): Promise<void>;
  get(id: number): Promise<Entity>;
  getAll(): Promise<Entity[]>;
  update(values: Values): Promise<void>;
  delete(id: number): Promise<void>;
}
