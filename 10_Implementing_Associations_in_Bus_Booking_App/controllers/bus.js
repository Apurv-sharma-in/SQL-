const { Sequelize, Op } = require("sequelize");
const {User,Booking,Bus} = require("../models");
const busEntry = async (req, res) => {
  try {
      const { Bus } = require("../models/index");
    const { busName, busSeat } = req.body;
    const bus = await Bus.create({
 busNumber: busName,        
      totalSeats: busSeat,    
      availableSeats: busSeat,
    });
    res.status(201).send("Bus added Successfully");
  } catch (error) {
    res.status(500).send("Unable to added Bus ");
    console.log(error);
  }
};

const findBusSeat = async (req, res) => {
  try {
      const { Bus } = require("../models/index");
    const { seats } = req.params;

    const findBus = await Bus.findAll({
      where: {
        totalSeats: {
          [Op.gt]: seats,
        },
      },
    });
    res.status(200).json(findBus);
  } catch (error) {
    res.status(500).send("Unable to Find Bus ");
    console.log(error);
  }
};

const bookingEntry = async (req, res) => {
  try {
      const { Booking } = require("../models/index");
    const { userId, busId, seatNumber } = req.body;
    const newBooking = await Booking.create({
      userId: userId,
      busId: busId,
      seatNumber: seatNumber
    });
    res.status(201).send("Booking completed Successfully");
  } catch (error) {
    res.status(500).send("Unable to create Booking");
    console.log(error);
  }
};

const getBusBookings = async (req, res) => {
  try {
     const { Booking, User } = require("../models/index");
    const { id } = req.params;
    const bookings = await Booking.findAll({
      where: { busId: id },
      attributes: ['id', 'seatNumber'],
      include: [{
        model: User,
        attributes: ['name', 'email']
      }]
    });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).send("Unable to Find Bus Bookings");
    console.log(error);
  }
};
module.exports = {
  busEntry,
  findBusSeat,
  bookingEntry,
  getBusBookings
};
