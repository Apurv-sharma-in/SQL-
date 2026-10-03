const express = require('express');
const app = express();

//database
const db = require('./utils/db_connection');
//database

//Routes 
const studentRoutes = require('./routes/student')
const courcesRoutes = require('./routes/courcesRoutes')
//Routes 

//Models
require('./models')
//Models
app.use
app.use(express.json())


app.use('/students',studentRoutes);
app.use('/cources',courcesRoutes);



db.sync({force:true}).then(()=>{
    app.listen(3000,()=>{
        console.log('Server is Running')
    })
    
}).catch((err)=>{
    console.log(err);
})
