import React from "react";

export default function Hero() {
  return (
    <div
      className="h-[60vh] flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <h1 className="text-5xl font-bold drop-shadow-lg">Hotel Booking Platform</h1>
      <p className="mt-4 text-lg drop-shadow-md">
        Find luxury hotels & book your dream stay in minutes
      </p>
    </div>
  );
}
