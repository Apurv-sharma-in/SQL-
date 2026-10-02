const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test_db",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connection scuccessfully conected to DB");

  const createStudnetTable = `create table IF NOT EXISTS students(
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255)
    ) `;
  connection.execute(createStudnetTable, (err) => {
    if (err) {
      console.log(err);
      connection.end();
      return;
    }
    console.log("Table created ");
  });
});
module.exports = connection;
