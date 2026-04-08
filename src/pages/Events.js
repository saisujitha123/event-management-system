import React, { useState } from "react";
import eventsData from "../data/events";
import { Link } from "react-router-dom";
function Events() {
  const registerEvent = (event) => {
  let stored = JSON.parse(localStorage.getItem("registeredEvents")) || [];
  const exists = stored.find(e => e.id === event.id);
  if (exists) {
    alert("Already registered");
    return;
  }
  stored.push(event);
  localStorage.setItem("registeredEvents", JSON.stringify(stored));
  alert("Registered successfully");
};
  const [search, setSearch] = useState("");
  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="container mt-4 fade-in">
      <h2 className="mb-3">Events</h2>
      <input
        type="text"
        placeholder="Search events..."
        className="form-control mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="row">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div className="col-md-4" key={event.id}>
              <div className="card event-card mb-4 shadow">
                <img src={event.image} className="card-img-top" alt={event.title} />
                <div className="card-body">
                  <h5 className="fw-bold">{event.title}</h5>
                  <p>{event.date} - {event.location}</p>
                  <Link to={`/event/${event.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                  <button
                    className="btn btn-success mt-2"
                    onClick={() => registerEvent(event)}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No events found!</p>
        )}
      </div>
    </div>
  );
}
export default Events;