"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Promotion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Promotion.belongsTo(models.Event);
    }
  }
  Promotion.init(
    {
      start_date: DataTypes.STRING,
      end_date: DataTypes.STRING,
      quota: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Promotion",
    }
  );
  return Promotion;
};
