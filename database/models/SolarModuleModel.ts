import { Model, DataTypes } from "denodb/mod.ts";

export class SolarModuleModel extends Model {
  static table = "solar_module";

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    description: DataTypes.STRING,
    ratedPower: DataTypes.FLOAT,
    voc: DataTypes.FLOAT,
    isc: DataTypes.FLOAT,
    vmp: DataTypes.FLOAT,
    imp: DataTypes.FLOAT,
    efficiency: DataTypes.FLOAT,
    cp: DataTypes.FLOAT,
    cvoc: DataTypes.FLOAT,
    cisc: DataTypes.FLOAT,
    provider: DataTypes.STRING,
    discount: DataTypes.FLOAT,
    pvp: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
  };
}
