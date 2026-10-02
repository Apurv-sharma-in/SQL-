const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "student_management_db",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Application Connected Successfull with DB");

  const creteTableStudents = `CREATE TABLE IF NOT EXISTS students(
                id INT AUTO_INCREMENT PRIMARY KEY,
                Name VARCHAR(255),
                Email VARCHAR(255) ,
                Age INT
        )`;

        connection.execute(creteTableStudents,(err)=>{
            if(err){
            console.log(err)
            return;
            }
            console.log('Table Created Successfully');
        })
});

module.exports = connection;