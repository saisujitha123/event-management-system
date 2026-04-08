import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import eventsData from "../data/events";
function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [events, setEvents] = useState(eventsData);
  const event = events.find(e => e.id === Number(id));
  if (!event) return <h2 className="text-center mt-4">Event not found</h2>;
  const stored = JSON.parse(localStorage.getItem("registeredEvents")) || [];
  const alreadyRegistered = stored.find(e => e.id === event.id);
  const registerEvent = () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }
    if (alreadyRegistered) {
      alert("Already registered");
      return;
    }
    if (event.seats <= 0) {
      alert("No seats available");
      return;
    }
    const ref = "EVT" + Math.floor(100000 + Math.random() * 900000);
    const updatedEvents = events.map(e =>
      e.id === event.id ? { ...e, seats: e.seats - 1 } : e
    );
    setEvents(updatedEvents);
    const updatedRegistered = [...stored, { ...event, ref }];
    localStorage.setItem("registeredEvents", JSON.stringify(updatedRegistered));
    alert("Registered Successfully!\nReference No: " + ref);
  };
  return (
    <div className="container mt-4 fade-in">
      <div className="card shadow-lg p-4">
        <img src={event.image} className="img-fluid rounded mb-4" alt={event.title} />
        <h1 className="fw-bold mb-3">{event.title}</h1>
        <p className="text-muted">
          <strong>Date:</strong> {event.date} | <strong>Location:</strong> {event.location}
        </p>
        <div className="d-flex justify-content-between p-3 mt-3 rounded"
             style={{ background: "#2c2c2c" }}>
              <div>
            <p className="text-info fw-bold">🎟 Seats</p>
            <h5>{event.seats}</h5>
          </div>
          <div>
            <p className="text-warning fw-bold">💰 Price</p>
            <h5>₹{event.price}</h5>
          </div>
          </div>
        <button
          className={`btn mt-3 ${alreadyRegistered ? "btn-secondary" : "btn-success"}`}
          onClick={registerEvent}
          disabled={alreadyRegistered}
        >
          {alreadyRegistered ? "Already Registered" : "Register Now"}
        </button>
        </div>
    </div>
  );
}
export default EventDetails;