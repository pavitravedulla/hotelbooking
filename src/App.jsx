import React from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">DreamStay</h1>
        <nav>
          <ul>
            <li><a href="#">Hotels</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Find Your Dream Stay</h2>
        <p>Discover amazing hotels at the best prices</p>
        <div className="search-bar">
          <input type="text" placeholder="Search hotels, destinations..." />
          <button>Search</button>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="featured-hotels">
        <h2>Featured Hotels</h2>
        <div className="hotel-container">
          
          <div className="hotel-card">
            <img src="https://images.unsplash.com/photo-1501117716987-c8e1ecb2101c?auto=format&fit=crop&w=400&q=60" alt="Ocean View Resort" />
            <h3>Ocean View Resort</h3>
            <p>Maldives</p>
            <button>Book Now</button>
          </div>
          
          <div className="hotel-card">
            <img src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=400&q=60" alt="Mountain Escape" />
            <h3>Mountain Escape</h3>
            <p>Switzerland</p>
            <button>Book Now</button>
          </div>
          
          <div className="hotel-card">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=60" alt="City Lights Hotel" />
            <h3>City Lights Hotel</h3>
            <p>New York</p>
            <button>Book Now</button>
          </div>

        </div>
      </section>
    </>
  );
}

export default App;
