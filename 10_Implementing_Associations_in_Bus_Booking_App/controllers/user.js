const { Sequelize } = require("sequelize");
const {User,Booking,Bus} = require("../models");

const getUsers = async (req, res) => {
  try {
    const { User } = require("../models/index");
    const user = await User.findAll();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("Somting Wrong");
    console.log(error);
  }
};

const makeEntryUsers = async (req, res) => {
  try {
    const { User } = require("../models/index");
    const { name, email } = req.body;
    const userEntry = await User.create({
      name: name,
      email: email,
    });
    res.status(201).send("User added Successfully");
  } catch (error) {
    res.status(500).send("Somting Wrong");
    console.log(error);
  }
};

const getUsersBookings = async (req, res) => {
  try {
       const { Booking, Bus } = require("../models/index");
    const { id } = req.params;
    const bookings = await Booking.findAll({
      where: { userId: id },
      attributes: ['id', 'seatNumber'],
      include: [{
        model: Bus,
        attributes: ['busNumber']
      }]
    });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).send("Somting Wrong");
    console.log(error);
  }
};

module.exports = {
  getUsers,
  makeEntryUsers,
  getUsersBookings
};
