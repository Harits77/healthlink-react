import React from "react";

const PatientDashboard = () => {
  // Temporary patient details
  const patientDetails = {
    name: "John Doe",
    email: "johndoe@example.com",
    age: 29,
    phoneNumber: "+1 234 567 8901",
    address: "123 Elm Street, Springfield, USA",
    photo: "https://via.placeholder.com/150", // Placeholder photo URL
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Patient Dashboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 mb-8 items-center">
          {/* User Photo */}
          <div className="flex justify-center">
            <img
              src={patientDetails.photo}
              alt="User"
              className="w-60 h-60 rounded-full shadow-md"
            />
          </div>
          {/* Patient Details */}
          <div>
            <p className="text-lg font-medium">Name:</p>
            <p className="text-lg ">{patientDetails.name}</p>
            <p className="text-lg font-medium mt-2">Email:</p>
            <p className="text-lg">{patientDetails.email}</p>
            <p className="text-lg font-medium mt-2">Age:</p>
            <p className="text-lg">{patientDetails.age}</p>
            <p className="text-lg font-medium mt-2">Phone:</p>
            <p className="text-lg">{patientDetails.phoneNumber}</p>
            <p className="text-lg font-medium mt-2">Address:</p>
            <p className="text-lg">{patientDetails.address}</p>
          </div>
        </div>
        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row justify-around space-y-4 md:space-y-0">
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition">
            Book Appointment
          </button>
          <button className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition">
            View Appointments
          </button>
          <button className="bg-purple-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-purple-600 transition">
            View Prescriptions
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
