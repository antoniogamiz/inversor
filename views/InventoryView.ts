import { IInventoryView, IInventoryDataAccess } from "interfaces/mod.ts";
import { Values } from "repositories/mod.ts";
import { Context } from "oak/mod.ts";

export class InventoryView<Entity> implements IInventoryView {
  constructor(protected inventoryRepository: IInventoryDataAccess<Entity>) {}

  create = async (context: Context) => {
    const payload = await context.request.body().value;
    await this.inventoryRepository.create((payload as unknown) as Values);
    context.response.status = 201;
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

  getAll = async (context: Context) => {
    context.response.body = await this.inventoryRepository.getAll();
    context.response.status = 200;
  };

  async update(context: Context) {}
  async delete(context: Context) {}
}
