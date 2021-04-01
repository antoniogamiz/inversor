import { IInventoryView, IInventoryDataAccess } from "interfaces/mod.ts";
import { Paginator, PaginationOptions } from "./Paginator.ts";
import { Values } from "repositories/mod.ts";
import { Context } from "oak/mod.ts";

export class InventoryView<Entity> implements IInventoryView {
  MAX_PAGINATION_LIMIT = 25;
  baseURL: string;

  constructor(
    public resourceName: string,
    protected inventoryRepository: IInventoryDataAccess<Entity>
  ) {
    const HOSTNAME = Deno.env.get("HOSTNAME");
    this.baseURL = `${HOSTNAME}/${resourceName}`;
  }

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
    const paginationOptions = this._buildPaginationOptions(
      ctx.request.url.searchParams
    );
    const numberOfEntities = await this.inventoryRepository.count();
    const entities = await this.inventoryRepository.getAll(paginationOptions);

    const paginator = new Paginator<Entity>(
      paginationOptions,
      numberOfEntities,
      this.baseURL,
      entities
    );
    ctx.response.body = paginator.build();
    ctx.response.status = 200;
  };

  _buildPaginationOptions = (searchParams: URLSearchParams) => {
    return {
      offset: parseInt(searchParams.get("offset") || "0"),
      limit: parseInt(
        searchParams.get("limit") || `${this.MAX_PAGINATION_LIMIT}`
      ),
    } as PaginationOptions;
  };

  async update(ctx: Context) {}
  async delete(ctx: Context) {}
}
