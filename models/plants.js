const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plants extends Model {}

Plants.init(
  {
    Scientific_Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Common_Name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  },
  {
    sequelize,
    modelName: 'plants',
    timestamps: false
  }
);

module.exports = Plants;
