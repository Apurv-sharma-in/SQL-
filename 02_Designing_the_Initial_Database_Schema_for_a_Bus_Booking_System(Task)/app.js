    const express = require("express");
    const mysql = require("mysql2");
    const app = express();

    const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "test_db",
    });

    connection.connect(async(err) => {
    if (err) {
        console.log(err);
        connection.end;
        return;
    }
    console.log("Connectin Connected to DaTa Base");

    const userTable = `create table Users(
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255)
            )`;

    const busTable = `create table Buses (
                id INT AUTO_INCREMENT PRIMARY KEY,
                busNumber INT, 
                totalSeats INT,
                availableSeats  INT  
                )`;
    const bookingTable = `create table Bookings (
                id INT AUTO_INCREMENT PRIMARY KEY,
                seatNumber INT       
                )`;
    const paymentsTable = `create table Payments (
                    
                id INT AUTO_INCREMENT PRIMARY KEY,
                amountPaid INT,
                paymentStatus VARCHAR(255)
            )`;
    try{
        await connection.promise().execute(userTable);
        await connection.promise().execute(busTable);
        await connection.promise().execute(bookingTable);
        await connection.promise().execute(paymentsTable);
        console.log('Tables created Successfully')
    }catch(error){
        console.log(error)
    }

    });

    app.listen(3000, (err) => {
    console.log("Server is Running");
    });
