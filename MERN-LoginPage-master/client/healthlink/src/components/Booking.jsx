import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Booking() {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");

    if (!userId || !doctor || !date || !time) {
      alert("Please fill in all fields");
      return;
    }

  
      axios.post("http://localhost:5001/booking", {doctor,date,time,userId})
        .then(result => {
          console.log(result);
          navigate("/dash");
          alert("Successfully Booked")
        })
        .catch(err => console.log(err));
  };
  const handleBack = () => {
    navigate("/dash"); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center p-4">
    <button
      onClick={handleBack}
      className="absolute top-4 left-4 text-xl text-blue-600 hover:text-blue-800"
    >
      &#8592; Back
    </button>
      
      <div className="bg-white p-6 rounded w-1/4">
        <h2 className="text-2xl font-semibold text-center mb-4">Book Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="doctor" className="block mb-2">
              <strong>Doctor</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Doctor's Name"
              name="doctor"
              className="form-control rounded-none w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setDoctor(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block mb-2">
              <strong>Date</strong>
            </label>
            <input
              type="date"
              name="date"
              className="form-control rounded-none w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block mb-2">
              <strong>Time</strong>
            </label>
            <input
              type="time"
              name="time"
              className="form-control rounded-none w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-full py-2 mt-4 rounded-none bg-green-500 text-white hover:bg-green-600">
            Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
