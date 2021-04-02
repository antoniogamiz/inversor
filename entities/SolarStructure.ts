import {
  CatalogEntityDescription,
  ALLOWED_TYPES,
} from "./CatalogEntityDescription.ts";
export interface SolarStructure {
  id: bigint;
  brand: string;
  model: string;
  description: string;
  numberOfModules: bigint;
  installationSurface: string;
  weight: number;
  unionKit: string;
  provider: string;
  discount: number;
  pvp: number;
  price: number;
}

export const SolarStructureDescription: CatalogEntityDescription = {
  brand: { type: ALLOWED_TYPES.STRING },
  model: { type: ALLOWED_TYPES.STRING },
  description: { type: ALLOWED_TYPES.STRING },

  numberOfModules: { type: ALLOWED_TYPES.NUMBER },
  installationSurface: { type: ALLOWED_TYPES.STRING },
  weight: { type: ALLOWED_TYPES.NUMBER },
  unionKit: { type: ALLOWED_TYPES.STRING },

  provider: { type: ALLOWED_TYPES.STRING },
  discount: { type: ALLOWED_TYPES.NUMBER },
  pvp: { type: ALLOWED_TYPES.NUMBER },
  price: { type: ALLOWED_TYPES.NUMBER },
};
