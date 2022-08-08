const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Category extends Model {}

Category.init(
  //body, type string, allow null false
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Category',
    timestamps: false
  }
)

module.exports = Category
