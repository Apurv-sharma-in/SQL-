const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('bus_booking_db','root','root',{
    host:"localhost",
    dialect:"mysql"
});

const checkConnection = async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection Connected To DB');
    } catch (error) {
        console.log(error);
    }
};
checkConnection();

module.exports= sequelize;