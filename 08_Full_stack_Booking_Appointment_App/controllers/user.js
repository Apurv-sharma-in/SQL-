const User = require("../models/user");

const creatUser = async (req, res) => {
  try {
    const { name, phone, email } = req.body;
    const UserCreation = await User.create({
      name: name,
      phone: phone,
      email: email,
    });
    res.status(201).json("User create Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json("Unable to Create User");
  }
};

const getUser = async (req, res) => {
  try {
    const allUser =await User.findAll();
    res.status(200).json(allUser);
  } catch (error) {
    console.log(error);
    res.status(500).json("Unable to Find User");
}
};


const editUser = async (req,res) =>{
    try {
            const {id} = req.params;
            const {name ,phone,email} = req.body;
            const [updatUser] = await User.update(name,phone,email,{
                where:{
                    id:id
                }
            })
            if(id===0){
            res.status(404).json("User not found or no changes made");
            }
             res.status(200).json("User updated successfully");

    } catch (error) {
        console.log(error);
        res.status(500).json("Unable to Create User");
        
    }
}


const deleteUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const userDeletion =await User.destroy({
            where:{
                id:id
            }
        });
        if (userDeletion === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json("Unable to Delete User");
    }    

};

module.exports = {
    creatUser,
    getUser,
    editUser,
    deleteUser
};