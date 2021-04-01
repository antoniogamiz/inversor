export * from "./EnergyMeterDataAccess.ts";
export * from "./InventoryDataAccess.ts";
export * from "./InverterDataAccess.ts";
export * from "./LoadRegulatorDataAccess.ts";
export * from "./SolarModuleDataAccess.ts";
export * from "./SolarStructureDataAccess.ts";

export type FieldValue = number | string | boolean | Date | null;
export type Values = { [key: string]: FieldValue };
