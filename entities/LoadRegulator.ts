export interface LoadRegulator {
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
