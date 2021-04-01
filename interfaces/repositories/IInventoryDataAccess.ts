import { Values } from "repositories/mod.ts";
import { PaginationOptions } from "views/Paginator.ts";
export interface IInventoryDataAccess<Entity> {
  create(values: Values): Promise<void>;
  get(id: number): Promise<Entity>;
  getAll(paginationOptions: PaginationOptions): Promise<Entity[]>;
  update(values: Values): Promise<void>;
  delete(id: number): Promise<void>;
  count(): Promise<number>;
}
