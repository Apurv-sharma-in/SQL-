const express = require('express');
const app = express()

//Database
const db = require('./utils/db-connection');
//Database

//Connecting Routers
const userRouters = require('./routers/user');
const busRouters = require('./routers/bus');
//Connecting Routers

app.use(express.json());

app.use('/users',userRouters)
app.use('/buses',busRouters);



app.listen(3000,()=>{
    console.log('server is running');
})