export * from "./EnergyMeterDataAccess.ts";

export type FieldValue = number | string | boolean | Date | null;
export type Values = { [key: string]: FieldValue };
