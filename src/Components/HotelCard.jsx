import React from "react";

export default function HotelCard({ hotel }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300">
      <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{hotel.name}</h3>
        <p className="text-gray-600">{hotel.location}</p>
        <p className="text-lg font-semibold text-blue-600 mt-2">
          ₹{hotel.price}/night
        </p>
        <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Book Now
        </button>
      </div>
    </div>
  );
}
