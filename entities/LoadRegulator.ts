import {
  CatalogEntityDescription,
  ALLOWED_TYPES,
} from "./CatalogEntityDescription.ts";
export interface LoadRegulator {
  id: bigint;
  brand: string;
  model: string;
  description: string;
  voc: number;
  isc: number;
  ibat: number;
  maxFVPotency12V: number;
  maxFVPotency24V: number;
  maxFVPotency48V: number;
  efficiency: number;
  provider: string;
  discount: number;
  pvp: number;
  price: number;
}

export const LoadRegulatorDescription: CatalogEntityDescription = {
  brand: { type: ALLOWED_TYPES.STRING },
  model: { type: ALLOWED_TYPES.STRING },
  description: { type: ALLOWED_TYPES.STRING },

  voc: { type: ALLOWED_TYPES.NUMBER },
  isc: { type: ALLOWED_TYPES.NUMBER },
  ibat: { type: ALLOWED_TYPES.NUMBER },
  maxFVPotency12V: { type: ALLOWED_TYPES.NUMBER },
  maxFVPotency24V: { type: ALLOWED_TYPES.NUMBER },
  maxFVPotency48V: { type: ALLOWED_TYPES.NUMBER },
  efficiency: { type: ALLOWED_TYPES.NUMBER },

  provider: { type: ALLOWED_TYPES.STRING },
  discount: { type: ALLOWED_TYPES.NUMBER },
  pvp: { type: ALLOWED_TYPES.NUMBER },
  price: { type: ALLOWED_TYPES.NUMBER },
};
