const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      autoIncrementStartingValue: 2
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'categories',
  }
);

module.exports = Category;
