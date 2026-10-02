const express = require('express');
const app = express();
//database
const db = require('./utils/db_connection');
//database

//Routes
const studentRouters = require('./routers/student')
//Routes

app.use(express.json());

app.use('/students',studentRouters);


app.listen(3000,()=>{
    console.log("server is Running");
})