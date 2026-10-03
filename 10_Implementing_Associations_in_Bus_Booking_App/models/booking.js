const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db_with_sequelize');

const Booking = sequelize.define('Booking', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    seatNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    busId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Booking;
