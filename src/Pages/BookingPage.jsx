import React from "react";
import BookingForm from "../Components/BookingForm";

const BookingPage = ({ hotel }) => {
  if (!hotel) {
    return <p className="text-center mt-10">No hotel selected for booking.</p>;
  }

  return (
    <div className="p-4">
      <BookingForm hotel={hotel} />
    </div>
  );
};

export default BookingPage;
