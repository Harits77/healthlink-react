import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ViewAppointments() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/login");
      return;
    }

    // Load the user's appointments from localStorage
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const userAppointments = storedAppointments.filter(
      (appointment) => appointment.userId === userId
    );
    setAppointments(userAppointments);
  }, [navigate]);

  if (appointments.length === 0) {
    return <p>No appointments booked yet.</p>;
  }

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
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          View Appointments
        </h2>

        <ul>
          {appointments.map((appointment, index) => (
            <li key={index} className="mb-4 p-4 border-b border-gray-300">
              <p className="text-xl">
                <strong>Doctor:</strong> {appointment.doctor}
              </p>
              <p className="text-lg">
                <strong>Slot:</strong> {appointment.slot}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ViewAppointments;
