const {Sequelize, DataTypes}= require('sequelize');
const sequelize = require('../utils/db_with_sequelize');

const Bus = sequelize.define('bus',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    busNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    availableSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

});
module.exports = Bus;

