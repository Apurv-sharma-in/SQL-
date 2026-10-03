const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"bus_booking_db"
});

connection.connect(async(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Connection Connected with DATABASE");
    
    const createTbleUsers = `create table IF NOT EXISTS   users(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255)
        )`;
        
        const createTableBus = `create table IF NOT EXISTS bus(
            
        id INT AUTO_INCREMENT PRIMARY KEY,
        busName VARCHAR(255),
        seat INT 
)`;

    try{
        await connection.promise().execute(createTbleUsers);
        await connection.promise().execute(createTableBus);
        console.log("Tables for USERS & BUS are created");
    }catch(err){
        console.log(err);
    }

});

module.exports = connection;