import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home-container fade-in">
      <div className="text-center">
        <h1 className="title">Welcome to Velvet Horizon Events</h1>
        <p className="subtitle">
          Discover and register for amazing events!
        </p>
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80"
          alt="event"
          className="hero-img"
        />
      </div>
      <div className="container mt-5">
        <h2 className="text-center mb-4">🔥 Featured Events</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card event-card p-3 text-center">
              <h5>🎤 Music Night</h5>
              <p>Enjoy live concerts and performances</p>
              <Link to="/event/2" className="btn btn-primary mt-2">
                View Details
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card event-card p-3 text-center">
              <h5>💻 Tech Fest</h5>
              <p>Explore latest innovations in tech</p>
              <Link to="/event/1" className="btn btn-primary mt-2">
                View Details
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card event-card p-3 text-center">
              <h5>🎨 Art Exhibition</h5>
              <p>Experience creativity and design</p>
              <Link to="/event/4" className="btn btn-primary mt-2">
                View Details
              </Link>
            </div>
          </div>
          </div>
      </div>
      </div>
  );
}
export default Home;