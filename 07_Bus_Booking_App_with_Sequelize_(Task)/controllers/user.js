const {Sequelize} = require('sequelize');
const Users = require('../models/user');


const getUsers = async (req,res)=>{
        try {
            const user = await Users.findAll();
            res.status(200).json(user);
    
        } catch (error) {
            res.status(500).send("Somting Wrong");
            console.log(error);
        }        
    };
    
    

    const makeEntryUsers = async (req,res)=>{

try {
    const {name ,email} = req.body;
    const userEntry = await Users.create({
        name:name,
        email:email
    })
    res.status(201).send('User added Successfully');
} catch (error) {
    res.status(500).send("Somting Wrong");
    console.log(error);
    
}

};


module.exports =  {
    getUsers,
    makeEntryUsers
}