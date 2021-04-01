import { Model, DataTypes } from "denodb/mod.ts";

export class InverterModel extends Model {
  static table = "inverter";

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    description: DataTypes.STRING,
    ratedPower: DataTypes.STRING,
    currentType: DataTypes.STRING,
    efficiency: DataTypes.FLOAT,
    provider: DataTypes.STRING,
    discount: DataTypes.FLOAT,
    pvp: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
  };
}
