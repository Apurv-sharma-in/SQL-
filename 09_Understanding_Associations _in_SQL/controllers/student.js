//Connecting dB
const connection = require("../utils/db_connection");
const db = require("../utils/db_connection");
const Student = require('../models/student');
const IdentityCard = require('../models/identityCrad');
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
  



};


const addingValuesToStudentAndIdentityCard = async (req,res)=>{
 try {
    const student = Student.create(req.body.Student);
    const idCard = IdentityCard.create({
      ...req.body.IdentityCard,
        StudentId : student.id 
    })
    res.status(201).json({student,idCard});

 } catch (error) {
  res.status(500).json({error:error.message});
  
 }


}

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
  deleteEntry,
  addingValuesToStudentAndIdentityCard
};
