const express = require('express');
const app = express();

//database
const db = require('./utils/db_connection');
//database

//Routes 
const studentRoutes = require('./routes/student')
//Routes 

//Models
const studentModels = require('./models/student')
//Models

app.use(express.json())


app.use('/students',studentRoutes);



db.sync({force:true}).then(()=>{
    app.listen(3000,()=>{
        console.log('Server is Running')
    })
    
}).catch((err)=>{
    console.log(err);
})
