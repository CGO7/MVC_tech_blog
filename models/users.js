const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    // need to set up password check for all users
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// need to make a table for users define table columns and configuration
User.init(
    {
        // id column
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        //  username 
        username: {
          type: DataTypes.STRING,
          allowNull: false
        },
        //twitter
        twitter: {
            type: DataTypes.STRING,
            allowNull: true
        },
        //github
        github: {
            type: DataTypes.STRING,
            allowNull: true
        },
        //email 
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        },
        //password
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [4]
          }
        }
      },
  {
      // need to use bcrypt
      hooks: {
        
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
          
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
      },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'users'
  }
);

module.exports = User;