import {
  CatalogEntityDescription,
  ALLOWED_TYPES,
} from "./CatalogEntityDescription.ts";
export interface SolarModule {
  id: bigint;
  brand: string;
  model: string;
  description: string;
  ratedPower: number;
  voc: number;
  isc: number;
  vmp: number;
  imp: number;
  efficiency: number;
  cp: number;
  cvoc: number;
  cisc: number;
  provider: string;
  discount: number;
  pvp: number;
  price: number;
}

export const SolarModuleDescription: CatalogEntityDescription = {
  brand: { type: ALLOWED_TYPES.STRING },
  model: { type: ALLOWED_TYPES.STRING },
  description: { type: ALLOWED_TYPES.STRING },

  ratedPower: { type: ALLOWED_TYPES.NUMBER },
  voc: { type: ALLOWED_TYPES.NUMBER },
  isc: { type: ALLOWED_TYPES.NUMBER },
  vmp: { type: ALLOWED_TYPES.NUMBER },
  imp: { type: ALLOWED_TYPES.NUMBER },
  efficiency: { type: ALLOWED_TYPES.NUMBER },
  cp: { type: ALLOWED_TYPES.NUMBER },
  cvoc: { type: ALLOWED_TYPES.NUMBER },
  cisc: { type: ALLOWED_TYPES.NUMBER },

  provider: { type: ALLOWED_TYPES.STRING },
  discount: { type: ALLOWED_TYPES.NUMBER },
  pvp: { type: ALLOWED_TYPES.NUMBER },
  price: { type: ALLOWED_TYPES.NUMBER },
};
