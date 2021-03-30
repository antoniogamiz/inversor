export interface Inversor {
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
