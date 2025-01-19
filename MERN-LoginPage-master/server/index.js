const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/employee.js");


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/Login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
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
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
    //res.status(200);
});

app.post("/getUser", (req, res) => {
  const { id } = req.body;
  EmployeeModel.findById(id)
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json("User not found");
      }
    })
    .catch((err) => res.status(500).json(err));
});


app.listen(5001, () => {
    console.log("Server is running");
});
