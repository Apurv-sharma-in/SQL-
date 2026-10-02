//Connecting dB
const connection = require("../utils/db_connection");
const db = require("../utils/db_connection");
const Student = require('../models/student');

const addEntries =async (req, res) => {
  try{
    const { email, name } = req.body;
    const student = await Student.create({
        email:email,
        name:name
  });
  res.status(201).send(`User With name ${name} is created`);

  }catch(err){
    res.status(500).send('Unable to Make entry');
    console.log(err);
  }
  

  // const inserQuery = `INSERT INTO students (email,name) VALUES(?,?)`;

  // db.execute(inserQuery, [email, name], (err) => {
  //   if (err) {
  //     console.log(err);
  //     res.status(500).send(err.message);
  //     connection.end();
  //     return;
  //   }
  //   console.log("Valuse has been Inserted ");
  //   res.status(200).send(`Student with name ${name} sucessfully added`);
  // });
};

const updateEntries = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const student = await Student.findByPk(id);
    if(!student){
      res.status(404).send("User is not Found");
    }
    student.name = name;
    await student.save();
    res.status(200).send("User has been created");
    

  }catch(err){
    res.status(500).send('Unable to Make entry');
    
  }

  // db.execute(updateQuery, [name, id], (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     res.status(500).send(err.message);
  //     db.end();
  //     return;
  //   }
  //   if (result.affectedRows === 0) {
  //     res.status(404).send("Student Not Found");
  //     db.end();
  //     return;
  //   }
  //   res.status(200).send("Student Updated sucessfully");
  // });
};

const deleteEntry = async (req,res)=>{
  try {
    const {id} = req.params;
    const student = await Student.destroy({
      where:{
        id:id
      }
    })
    if(!student){
      res.status(404).send('User Not Found');
    }
    res.status(201).send('User Deleted');
    
    
  } catch (error) {
    console.log(error)
    res.status(500).send('Query not working');

    
  }
  
 
 
  // const deleteQuery= `DELETE FROM students WHERE id = ?`;
    
    // db.execute(deleteQuery,[id],(err,result)=>{
    //     if(err){
    //         console.log(err);
    //         res.status(500).send(err.message)
    //         db.end();
    //         return;
    //     }
    //     if(result.affectedRows ===0){
    //         res.status(404).send("Student ID Not Found");
    //         db.end();
    //         return;
            
    //     }
    //     res.status(200).send("Student Delected Scuccessfully");

    // })
};

module.exports = {
  addEntries,
  updateEntries,
  deleteEntry
};
