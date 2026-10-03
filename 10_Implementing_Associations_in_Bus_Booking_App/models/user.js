const {Sequelize,DataTypes} = require('sequelize');
const sequelize =  require('../utils/db_with_sequelize');
 
const User = sequelize.define('users',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
    
}); 
module.exports = User;