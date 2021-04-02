import {
  CatalogEntityDescription,
  ALLOWED_TYPES,
} from "./CatalogEntityDescription.ts";
export interface Inverter {
  id: bigint;
  brand: string;
  model: string;
  description: string;
  ratedPower: string;
  currentType: string;
  efficiency: number;
  provider: string;
  discount: number;
  pvp: number;
  price: number;
}

export const InverterDescription: CatalogEntityDescription = {
  brand: { type: ALLOWED_TYPES.STRING },
  model: { type: ALLOWED_TYPES.STRING },
  description: { type: ALLOWED_TYPES.STRING },

  ratedPower: { type: ALLOWED_TYPES.STRING },
  currentType: { type: ALLOWED_TYPES.STRING },
  efficiency: { type: ALLOWED_TYPES.NUMBER },

  provider: { type: ALLOWED_TYPES.STRING },
  discount: { type: ALLOWED_TYPES.NUMBER },
  pvp: { type: ALLOWED_TYPES.NUMBER },
  price: { type: ALLOWED_TYPES.NUMBER },
};
