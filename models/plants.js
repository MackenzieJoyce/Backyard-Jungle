const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plants extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Scientific_Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Common_Name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    Family: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Plants',
  }
);

module.exports = Plants;
