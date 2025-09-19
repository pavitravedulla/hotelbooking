import React, { useState } from "react";

const Home = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Ananya Sharma",
      review:
        "Amazing experience! The hotel was beautiful and the booking process was seamless. Highly recommend TravelEase!",
      location: "Mumbai, India",
    },
    {
      name: "Rahul Verma",
      review:
        "Best vacation ever. The hotel suggestions were perfect, and I loved the easy payment system.",
      location: "Delhi, India",
    },
    {
      name: "Sophia Williams",
      review:
        "Great customer support and smooth booking. Definitely using this platform again for my next trip.",
      location: "London, UK",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed w-full z-10">
        <h1 className="text-2xl font-bold text-blue-600">TravelEase</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Destinations</li>
          <li className="hover:text-blue-600 cursor-pointer">Hotels</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header
        className="h-[65vh] flex flex-col justify-center items-center text-center bg-cover bg-center relative mt-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white px-4">
          <h2 className="text-4xl font-bold mb-3">Find Your Dream Stay</h2>
          <p className="text-md mb-5">Discover amazing hotels at the best prices</p>

          {/* Search Bar */}
          <div className="flex bg-white rounded-lg overflow-hidden shadow-lg w-80 mx-auto">
            <input
              type="text"
              placeholder="Search hotels, destinations..."
              className="px-3 py-2 w-full text-gray-700 outline-none text-sm"
            />
            <button className="px-4 bg-blue-600 text-white text-sm hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
      </header>

      {/* Featured Hotels */}
      <section className="py-12 px-6 bg-gray-50">
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
          Featured Hotels
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "Ocean View Resort",
              location: "Maldives",
              img: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2109a?auto=format&fit=crop&w=400&q=60",
            },
            {
              name: "Mountain Retreat",
              location: "Switzerland",
              img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=60",
            },
            {
              name: "City Lights Hotel",
              location: "New York",
              img: "https://images.unsplash.com/photo-1542317854-f9596ae570b4?auto=format&fit=crop&w=400&q=60",
            },
          ].map((hotel, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform"
            >
              <img src={hotel.img} alt={hotel.name} className="h-36 w-full object-cover" />
              <div className="p-4 text-center">
                <h4 className="text-lg font-bold">{hotel.name}</h4>
                <p className="text-gray-600 text-sm">{hotel.location}</p>
                <button className="mt-3 px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Destinations */}
      <section className="py-12 px-6">
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
          Trending Destinations
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "Paris",
              img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=60",
            },
            {
              name: "Bali",
              img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=60",
            },
            {
              name: "Dubai",
              img: "https://images.unsplash.com/photo-1526481280695-3c720685208b?auto=format&fit=crop&w=400&q=60",
            },
          ].map((dest, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform"
            >
              <img src={dest.img} alt={dest.name} className="h-40 w-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h4 className="text-lg font-bold text-white">{dest.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-12 px-6 bg-gray-50">
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
          What Our Customers Say
        </h3>
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 text-center relative">
          <p className="text-gray-600 italic mb-4">
            "{reviews[currentReview].review}"
          </p>
          <h4 className="text-lg font-bold text-blue-600">
            {reviews[currentReview].name}
          </h4>
          <p className="text-gray-500 text-sm">{reviews[currentReview].location}</p>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-4">
            <button
              onClick={prevReview}
              className="px-4 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              ← Prev
            </button>
            <button
              onClick={nextReview}
              className="px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Next →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4 mt-auto">
        <p className="text-sm">&copy; 2025 TravelEase. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
