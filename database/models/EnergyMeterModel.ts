import { Model, DataTypes } from "denodb/mod.ts";

export class EnergyMeterModel extends Model {
  static table = "energy_meter";

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    description: DataTypes.STRING,
    provider: DataTypes.STRING,
    discount: DataTypes.FLOAT,
    pvp: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
  };
}
