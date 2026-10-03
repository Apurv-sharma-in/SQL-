const {Sequelize,Op} = require('sequelize');
const Bus = require('../models/bus');


const busEntry = async (req, res) => {

    try {
            const{busName , busSeat} = req.body;
            const bus = await Bus.create({
                busName:busName,
                busSeat:busSeat
            });
         res.status(201).send('Bus added Successfully');           
         
        } catch (error) {
        res.status(500).send('Unable to added Bus ');           
        console.log(error);
    }

}

const findBusSeat = async(req,res)=>{
    try {
         const { seats } = req.params;

        const findBus = await Bus.findAll({
            where:{
                    busSeat:{
                        [Op.gt]:seats
                    }
            }
        })
        res.status(200).json(findBus);         
    } catch (error) {
    res.status(500).send('Unable to Find Bus ');           
            console.log(error)
    }
}
module.exports = {
    busEntry,
    findBusSeat
}