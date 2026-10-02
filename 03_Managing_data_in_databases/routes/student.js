const express = require('express')
const studentController = require('../controllers/student')
const route = express.Router();


route.post('/add',studentController.addEntries);
route.put('/update/:id',studentController.updateEntries);
route.delete('/delete/:id',studentController.deleteEntry);



module.exports= route;