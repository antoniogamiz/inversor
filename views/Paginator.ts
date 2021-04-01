export type PaginationResult<Entity> = {
  links: {
    base: string;
    prev?: string;
    next?: string;
  };
  limit: number;
  offset: number;
  total: number;
  results: Entity[];
};

export type PaginationOptions = {
  offset: number;
  limit: number;
};

export class Paginator<Entity> {
  constructor(
    public paginationOptions: PaginationOptions,
    public total: number,
    public base: string,
    public entities: Entity[]
  ) {}

  build = (): PaginationResult<Entity> => {
    const { offset, limit } = this.paginationOptions;
    const prevPaginationOptions = this._calculatePrevOffsetAndLimit();
    const nextPaginationOptions = this._calculateNextOffsetAndLimit();

    return {
      links: {
        base: this.base,
        prev: prevPaginationOptions
          ? `${this.base}${this._buildPaginationQuery(prevPaginationOptions)}`
          : undefined,
        next: nextPaginationOptions
          ? `${this.base}${this._buildPaginationQuery(nextPaginationOptions)}`
          : undefined,
      },
      limit,
      offset,
      total: this.total,
      results: this.entities,
    };
  };

  _calculatePrevOffsetAndLimit = (): PaginationOptions | null => {
    const { offset, limit } = this.paginationOptions;
    const prevOffset = offset - limit;
    if (prevOffset >= 0) return { limit, offset: prevOffset };
    return null; // fix: i think there's an edge case here with negative offsets
  };

  _calculateNextOffsetAndLimit = (): PaginationOptions | null => {
    const { offset, limit } = this.paginationOptions;
    const newOffset = offset + limit;
    if (newOffset >= this.total) return null;
    if (limit > this.total) return null;

    return { offset: newOffset, limit };
  };

  _buildPaginationQuery = (paginationOptions: PaginationOptions) =>
    `?limit=${paginationOptions.limit}&offset=${paginationOptions.offset}`;
}
