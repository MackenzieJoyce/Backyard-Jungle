const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection.js')

class Collection extends Model {}

Collection.init(
  //body, type string, allow null false
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    plant_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    modelName: 'collection'
  }
)

module.exports = Collection
