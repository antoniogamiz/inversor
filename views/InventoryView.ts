import {
  IInventoryView,
  IInventoryDataAccess,
  PaginationOptions,
} from "interfaces/mod.ts";
import { Values } from "repositories/mod.ts";
import { Context } from "oak/mod.ts";

export class InventoryView<Entity> implements IInventoryView {
  constructor(protected inventoryRepository: IInventoryDataAccess<Entity>) {}

  create = async (ctx: Context) => {
    const payload = await ctx.request.body().value;
    await this.inventoryRepository.create((payload as unknown) as Values);
    ctx.response.status = 201;
  };

  get = async ({
    params,
    response,
  }: {
    params: { id: string };
    response: any;
  }) => {
    response.body = await this.inventoryRepository.get(parseInt(params.id));
    response.status = 200;
  };

  getAll = async (ctx: Context) => {
    const paginationOptions = {
      offset: ctx.request.url.searchParams.get("offset") || 0,
      limit: ctx.request.url.searchParams.get("limit") || 20,
    };
    ctx.response.body = await this.inventoryRepository.getAll(
      paginationOptions
    );
    ctx.response.status = 200;
  };

  async update(ctx: Context) {}
  async delete(ctx: Context) {}

  _buildPaginationEntity = (paginationOptions: PaginationOptions) => {};
}
