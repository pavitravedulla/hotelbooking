import React, { useState } from "react";

const BookingForm = ({ hotel }) => {
  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Booking confirmed at ${hotel.name} for ${name}`);
  };

  return (
    <form
      onSubmit={handleBooking}
      className="p-4 border rounded shadow-md max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-2">Book: {hotel.name}</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mb-2"
        required
      />
      <input
        type="date"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
        className="border p-2 w-full mb-2"
        required
      />
      <input
        type="date"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
        className="border p-2 w-full mb-2"
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Confirm Booking
      </button>
    </form>
  );
};

export default BookingForm;
