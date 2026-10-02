//Connecting dB
const connection = require("../utils/db_connection");
const db = require("../utils/db_connection");
const Student = require('../models/student');
const addEntries =(req, res) => {
    const { email, name } = req.body;

  const inserQuery = `INSERT INTO students (email,name) VALUES(?,?)`;

  db.execute(inserQuery, [email, name], (err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
      connection.end();
      return;
    }
    console.log("Valuse has been Inserted ");
    res.status(200).send(`Student with name ${name} sucessfully added`);
  });
};

const updateEntries = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const updateQuery = `UPDATE students set name = ? where id =?`;

  db.execute(updateQuery, [name, id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
      db.end();
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send("Student Not Found");
      db.end();
      return;
    }
    res.status(200).send("Student Updated sucessfully");
  });
};

const deleteEntry = (req,res)=>{
    const {id} = req.params;
    const deleteQuery= `DELETE FROM students WHERE id = ?`;
    
    db.execute(deleteQuery,[id],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message)
            db.end();
            return;
        }
        if(result.affectedRows ===0){
            res.status(404).send("Student ID Not Found");
            db.end();
            return;
            
        }
        res.status(200).send("Student Delected Scuccessfully");

    })
};

module.exports = {
  addEntries,
  updateEntries,
  deleteEntry
};
