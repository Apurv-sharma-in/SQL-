const Course= require(' .. /models/courses');
const Student = require('../models/student')
const addcourse= async (req,res)=>{
try {
const {name}=req.body;
const course= await Course.create({'name' :name});

res.status(201).json(course);

}catch (error) {
res.status(500).json({'error':error.message});
}

};


const addstudentsToCourses= async (req,res)=>{


try {
    const {studentId, courseIds}= req.body;

    const student= await student.findByPk(studentId);
    const course= await Course.findAll({
    where:{
    id:courseIds
    }
    })
    await student.addcourses(course);

        const updatedstudent= await student.findByPk(studentId,{include:Course}) ;
        res.status(200).json(updatedstudent);

} catch (error) {

}
}

modules.exports=  {
    addcourse,
    addstudentsToCourses
}