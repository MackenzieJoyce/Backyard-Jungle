const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');


class User extends Model {}
//method to run on every instance to check password - using bcrypt
//hooks works with bcrypt???

User.init(

  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2,10]  
          }
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);



module.exports = User;
