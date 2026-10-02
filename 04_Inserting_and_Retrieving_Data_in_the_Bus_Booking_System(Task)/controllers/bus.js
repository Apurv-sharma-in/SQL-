const db = require("../utils/db-connection");

const busEntry = (req, res) => {
  const busEntryQuery = `INSERT INTO bus (busName,seat) VALUES (?,?)`;
  const { busName, seats } = req.body;

  db.execute(busEntryQuery, [busName, seats],(err,result)=>{

                if(err){
                    console.log(err);
                    res.status(500).send(err.message);
                    db.end();
                    return;
                }
                console.log("Bus Added Successfully");
                res.status(200).send(`Bus add with bus Name ${busName} with seat ${seats}`);
  });
};


const findBusSeat = (req,res)=>{
    const {seats} = req.params;
    const findBusSeatQuery = `SELECT * FROM bus WHERE seat > ? `;

    db.execute(findBusSeatQuery,[seats],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send("Bus Queery not working");
            db.end();
            return;   
        } 
        if(result.length===0){
            console.log(err);
            res.status(500).send("NO BUS FOUND");
        }
        res.status(200).json(result);
    
    });




};

module.exports = {
    busEntry,
    findBusSeat
}