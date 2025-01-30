const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    number : String,
    gender : String,
    age: String 
})

const PatientModel = new mongoose.model("patient", PatientSchema);

module.exports = PatientModel;