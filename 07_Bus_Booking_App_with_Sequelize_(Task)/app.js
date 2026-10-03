const express = require('express');
const app = express()

//Database
const db = require('./utils/db_with_sequelize');
//Database

//Connecting Routers
const userRouters = require('./routers/user');
const busRouters = require('./routers/bus');
//Connecting Routers

app.use(express.json());

app.use('/users',userRouters)
app.use('/buses',busRouters);


db.sync({force:true}).then(()=>{
    app.listen(3000,()=>{
        console.log('server is running');
    })

}).catch((err)=>{
    console.log(err);
})