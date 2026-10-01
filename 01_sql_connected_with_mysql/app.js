const express= require('express');
const app = express();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:"test_db"
})

connection.connect((err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("Connection has been created")

    const cereateQuery =`create table student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(20)
     )`

    connection.execute(cereateQuery,(err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log('table Created')
    })
})
 
app.get('/',(req,res)=>{
    res.send('Hii application is connected  ')
})





app.listen(3000,(err)=>{
    console.log('server is running ')
})
