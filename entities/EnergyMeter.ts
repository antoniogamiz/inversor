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
