import {
  CatalogEntityDescription,
  ALLOWED_TYPES,
} from "./CatalogEntityDescription.ts";
export interface EnergyMeter {
  id: bigint;
  brand: string;
  model: string;
  description: string;
  provider: string;
  discount: number;
  pvp: number;
  price: number;
}

export const EnergyMeterDescription: CatalogEntityDescription = {
  brand: { type: ALLOWED_TYPES.STRING },
  model: { type: ALLOWED_TYPES.STRING },
  description: { type: ALLOWED_TYPES.STRING },
  provider: { type: ALLOWED_TYPES.STRING },
  discount: { type: ALLOWED_TYPES.NUMBER },
  pvp: { type: ALLOWED_TYPES.NUMBER },
  price: { type: ALLOWED_TYPES.NUMBER },
};
