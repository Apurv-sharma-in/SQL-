const {Sequelize, DataTypes}= require('sequelize');
const sequelize = require('../utils/db_with_sequelize');

const Bus = sequelize.define('bus',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    busName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    busSeat:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

});
module.exports = Bus;