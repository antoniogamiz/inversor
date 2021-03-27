export default interface SolarModule {
  brand: string;
  model: string;
  description: string;
  ratedPower: string;
  voc: bigint;
  isc: bigint;
  vmp: bigint;
  imp: bigint;
  efficiency: number;
  cvoc: bigint;
  cisc: bigint;
  provider: string;
  discount: number;
  pvp: number;
  price: number;
}
