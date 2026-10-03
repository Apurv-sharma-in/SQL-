const express = require('express');
const router = express.Router();

//connecting controller
const busControllers = require('../controllers/bus');
//connecting controller


router.post("/",busControllers.busEntry);
router.get("/available/:seats",busControllers.findBusSeat);


router.post("/bookings", busControllers.bookingEntry);
router.get("/:id/bookings", busControllers.getBusBookings);

module.exports= router;


