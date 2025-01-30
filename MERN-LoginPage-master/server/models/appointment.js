const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  doctor: String,
  date: String,
  time: String,
  userId: String,
})

const BookingModel = new mongoose.model("appointments" , BookingSchema)
module.exports = BookingModel