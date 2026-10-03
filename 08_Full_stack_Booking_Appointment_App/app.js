const express = require('express');
const cors = require('cors');
const db = require('./utils/db_connection');
const userRoutes = require('./routes/userRoutes');

const app = express();


app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);



db.sync({force:true}).then(()=>{
    
    app.listen(3000,()=>{
    console.log('Server is running');
 })
    
}).catch((err)=>{
    console.log(err);
})


