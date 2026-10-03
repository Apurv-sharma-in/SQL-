const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Booking = sequelize.define('Booking', {
    id: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
    },
    bookingDate: { 
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW 
    },
    status: { 
        type: DataTypes.STRING }
});

module.exports = Booking;
