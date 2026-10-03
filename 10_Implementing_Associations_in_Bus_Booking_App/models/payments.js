const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db_with_sequelize");

const Payment = sequelize.define("Payment", {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
},
  amount: { 
    type: DataTypes.DECIMAL(10, 2), 
    allowNull: false 
},
  paymentStatus: { 
    type: DataTypes.STRING
},
});

module.exports = Payment;
