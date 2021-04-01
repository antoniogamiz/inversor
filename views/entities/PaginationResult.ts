export type PaginationResult<Entity> = {
  _links: {
    base: string;
    prev?: string;
    next?: string;
  };
  limit: number;
  offset: number;
  results: Entity[];
};
