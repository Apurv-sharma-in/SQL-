const express = require('express');
const router = express.Router();

//Connecting controller
const userControler = require('../controllers/user');
//Connecting controller


router.get('/',userControler.getUsers);
router.post('/add',userControler.makeEntryUsers);



module.exports = router;