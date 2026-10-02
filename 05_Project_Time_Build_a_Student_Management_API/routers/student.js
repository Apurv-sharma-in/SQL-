const express = require('express');
const router = express.Router();

//connecting controllers 
const studentControllers = require('../controllers/students');
//connecting controllers 

router.get('/',studentControllers.getStudent);

router.post('/',studentControllers.postStudent);

router.get('/:id/',studentControllers.getStudentById);

router.put('/:id/',studentControllers.updatetUserById);

router.delete('/:id/',studentControllers.deleteUserById);





module.exports = router;