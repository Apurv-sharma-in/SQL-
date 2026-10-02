const db = require('../utils/db-connection');

const getUsers = (req,res)=>{
    const getuserQuery = 'Select * FROM users '

    db.execute(getuserQuery,(err,results)=>{

        if(err){
            console.log(err);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        
        res.status(200).json(results);

    })

};
const makeEntryUsers = (req,res)=>{
    const {name ,email} = req.body;
    const userEntryQuery = `INSERT INTO users (name,email) VALUES (?,?)`;

    db.execute(userEntryQuery,[name,email],(err)=>{
            if(err){
                console.log(err);
                res.status(500).send(err.message);
                db.end();
                return;
            }
      console.log("User created scuccessfull");
      res.status(200).send(`user Created with naem ${name} & email ${email}`);    

    });

};


module.exports =  {
    getUsers,
    makeEntryUsers
}