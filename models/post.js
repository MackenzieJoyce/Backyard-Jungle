//sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Post extends Model { }

Post.init(
  //title, type string, allow null false
  //body, type string, allow null false
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, 
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);



module.exports = Post;
