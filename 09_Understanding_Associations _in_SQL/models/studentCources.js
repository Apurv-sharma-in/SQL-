const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../utils/db_connection');

const studentCources = sequelize.define('studentcources',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        }
})

module.exports = studentCources;


