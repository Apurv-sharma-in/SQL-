const db = require('../utils/db_connection');


const getStudent = (req,res)=>{
        const getStudentQuery = `SELECT * FROM students`;

        db.execute(getStudentQuery,(err,result)=>{
                if(err){
                    console.log(err);
                    res.status(500).send(err.message)
                    return;
                }
                console.log("Students Fetch Scuccessfully");
                res.status(200).json(result);
            });

};

const postStudent = (req,res)=>{
    const {Name,Email,Age} = req.body;
    const postStudentQuery = `INSERT INTO students (Name,Email,Age) VALUES (?,?,?)`;


    db.execute(postStudentQuery,[Name,Email,Age],(err)=>{
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            return;
        }
        console.log(`Student created Scuccessfully`);
        res.status(200).send( `student created with details ${Name} ${Email}${Age}`)

    })
}


const getStudentById =  (req,res)=>{
        const {id} = req.params;
        const getStudentByIdQuery = `SELECT * FROM students  WHERE id = ?`;

        db.execute(getStudentByIdQuery,[id],(err,result)=>{
            if(err){
                console.log(err)
                res.status(500).send('Get User By Id query Not working');
            }
            if(result.length===0){
                console.log('User Not Found')
                res.status(404).send('User not Found');
            }
            res.status(200).json(result[0]);
        })

};

const updatetUserById =  (req,res)=>{
        const {id} = req.params;
        const {Name,Email,Age} = req.body;
        const updateUserByIdQuery = `UPDATE students SET Name = ?,Email = ?,Age = ?  WHERE id = ?`;

        db.execute(updateUserByIdQuery,[Name,Email,Age,id],(err,result)=>{
            if(err){
                console.log(err)
                res.status(500).send('Get User By Id query Not working');
            }
            if(result.affectedRows===0){
                console.log('User Not Found')
                res.status(404).send('User not Found');
            }
            res.status(200).send('Student updated Successfully');
        })
        
    };
    
    const deleteUserById =  (req,res)=>{
            const {id} = req.params;
            const deleteUserByIdQuery = `DELETE FROM students  WHERE id = ?`;
    
            db.execute(deleteUserByIdQuery,[id],(err,result)=>{
                if(err){
                    console.log(err)
                    res.status(500).send('Delete query Not working',err.message);
                }
                if(result.affectedRows===0){
                    console.log('User Not Found')
                    res.status(404).send('User not Found');
                }
                res.status(200).send(`Student with ${id} successfully deleted`);
            })
    
    };

module.exports={
    getStudent,
    postStudent,
    getStudentById,
    updatetUserById,
    deleteUserById
}