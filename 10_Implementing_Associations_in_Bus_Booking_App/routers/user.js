const express = require('express');
const router = express.Router();

//Connecting controller
const userControler = require('../controllers/user');
//Connecting controller


router.get('/',userControler.getUsers);
router.post('/',userControler.makeEntryUsers);

router.get('/:id/bookings',userControler.getUsersBookings);


module.exports = router;