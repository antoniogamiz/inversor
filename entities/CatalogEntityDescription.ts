export enum ALLOWED_TYPES {
  NUMBER = "number",
  STRING = "string",
}

export type FieldRules = {
  type: ALLOWED_TYPES;
};

export type CatalogEntityDescription = { [key: string]: FieldRules };
