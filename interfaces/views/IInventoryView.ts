import { Context } from "oak/mod.ts";

export interface IInventoryView {
  create(context: Partial<Context>): unknown;
  get(context: Partial<Context>): unknown;
  getAll(context: Partial<Context>): unknown;
  update(context: Partial<Context>): unknown;
  delete(context: Partial<Context>): unknown;
}
