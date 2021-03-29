import { Model, DataTypes } from "denodb/mod.ts";

export class LoadRegulatorModel extends Model {
  static table = "load_regulator";

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    description: DataTypes.STRING,
    voc: DataTypes.FLOAT,
    isc: DataTypes.FLOAT,
    ibat: DataTypes.FLOAT,
    maxFVPotency12V: DataTypes.FLOAT,
    maxFVPotency24V: DataTypes.FLOAT,
    maxFVPotency48V: DataTypes.FLOAT,
    efficiency: DataTypes.FLOAT,
    provider: DataTypes.STRING,
    discount: DataTypes.FLOAT,
    pvp: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
  };
}
