const express = require('express');
const app = express();

//database
const db = require('./utils/db_connection');
//database

//Routes 
const studentRoutes = require('./routes/student')
//Routes 

app.use(express.json())


app.use('/students',studentRoutes);


app.listen(3000,()=>{
    console.log('Server is Running')
})