const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Collection extends Model {}

Collection.init(
//body, type string, allow null false
{
  plant_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'collection',
      key: 'id',
    },
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    modelName: 'collection',
  }
);



module.exports = Collection;