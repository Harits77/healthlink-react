const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PatientModel = require("./models/patient.js");
const BookingModel = require("./models/appointment.js");
const DoctorModel = require("./models/Doctor.js");


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/DoctorPatient");

app.post("/Login", (req, res) => {
    const { email, password } = req.body;
    PatientModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({
                        message: "Login Successfull",
                        userId: user._id  
                    });
                } else {
                    res.json("Password is incorrect");
                }
            } else {
                res.json("No user found");
            }
        })
        .catch(err => res.json(err));
});

app.post("/register", (req, res) => {
    PatientModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
});

app.post("/DoctorLogin", (req, res) => {
  const { email, password } = req.body;
  DoctorModel.findOne({ email: email })
      .then(user => {
          if (user) {
              if (user.password === password) {
                  res.json({
                      message: "Login Successfull",
                      userId: user._id  
                  });
              } else {
                  res.json("Password is incorrect");
              }
          } else {
              res.json("No user found");
          }
      })
      .catch(err => res.json(err));
});


app.post("/DoctorRegister" ,(req,res) => {
   DoctorModel.create(req.body)
  .then(booking=> res.json(booking))
  .catch(err => res.json(err))
})


app.post("/getUser", (req, res) => {
  const { id } = req.body;
  PatientModel.findById(id)
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json("User not found");
      }
    })
    .catch((err) => res.status(500).json(err));
});

app.get("/getDoctor", (req, res) => {
  DoctorModel.find()
  .then(user=>res.json(user))
  .catch(err=>res.json(err))  
});


app.post("/booking", (req, res) => {
  BookingModel.create(req.body)
  .then(details => res.json(details))
  .catch(err => res.json(err))
});


app.post("/getAppointments", (req, res) => {
  const { userId } = req.body;
  
  BookingModel.find({ userId })
    .then(appointments => res.json(appointments))
    .catch(err => res.status(500).json({ error: err.message }));
});


app.listen(5001, () => {
    console.log("Server is running");
});