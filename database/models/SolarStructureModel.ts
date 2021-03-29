import { Model, DataTypes } from "denodb/mod.ts";

export class SolarStructureModel extends Model {
  static table = "solar_structure";

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    description: DataTypes.STRING,
    numberOfModules: DataTypes.INTEGER,
    installationSurface: DataTypes.STRING,
    weight: DataTypes.FLOAT,
    unionKit: DataTypes.STRING,
    provider: DataTypes.STRING,
    discount: DataTypes.FLOAT,
    pvp: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
  };
}
