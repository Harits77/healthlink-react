import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const doctorsData = [
  {
    id: "1",
    Name: "Dr. John",
    specialization: "Cardiologist",
    availableSlots: [
      { day: "Monday", time: "9:00 AM - 12:00 PM" },
      { day: "Wednesday", time: "2:00 PM - 5:00 PM" }
    ]
  },
  {
    id: "2",
    Name: "Dr. Jane",
    specialization: "Dermatologist",
    availableSlots: [
      { day: "Tuesday", time: "10:00 AM - 1:00 PM" },
      { day: "Thursday", time: "3:00 PM - 6:00 PM" }
    ]
  }
];

function Booking() {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load previous appointments from localStorage
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  const handleBookAppointment = () => {
    if (!selectedDoctor || !selectedSlot) {
      alert("Please select both a doctor and a time slot.");
      return;
    }

    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/login");
      return;
    }

    const newAppointment = {
      userId,
      doctor: selectedDoctor,
      slot: selectedSlot
    };

    // Save the new appointment to localStorage
    const updatedAppointments = [...appointments, newAppointment];
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    setAppointments(updatedAppointments);

    alert("Appointment booked successfully!");
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
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Book Appointment
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700">Select Doctor</label>
          <select
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="">-- Select Doctor --</option>
            {doctorsData.map((doctor) => (
              <option key={doctor.id} value={doctor.Name}>
                {doctor.Name} - {doctor.specialization}
              </option>
            ))}
          </select>
        </div>

        {selectedDoctor && (
          <div className="mb-4">
            <label className="block text-gray-700">Select Slot</label>
            <select
              className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
              value={selectedSlot}
              onChange={(e) => setSelectedSlot(e.target.value)}
            >
              <option value="">-- Select Slot --</option>
              {doctorsData
                .find((doctor) => doctor.Name === selectedDoctor)
                .availableSlots.map((slot, index) => (
                  <option key={index} value={`${slot.day} - ${slot.time}`}>
                    {slot.day} - {slot.time}
                  </option>
                ))}
            </select>
          </div>
        )}

        <button
          onClick={handleBookAppointment}
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default Booking;
