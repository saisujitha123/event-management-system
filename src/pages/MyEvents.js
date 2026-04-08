import React, { useEffect, useState } from "react";
function MyEvents() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("registeredEvents") || "[]");
    setEvents(stored);
  }, []);
  const deleteEvent = (id) => {
    const updated = events.filter((e) => e.id !== id);
    setEvents(updated);
    localStorage.setItem("registeredEvents", JSON.stringify(updated));
  };
  return (
    <div className="container mt-4 slide-up">
      <h2>My Registered Events</h2>
      {events.length === 0 ? (
        <p>No registered events</p>
      ) : (
        <div className="row">
          {events.map((event) => (
            <div className="col-md-4" key={event.id}>
              <div className="card mb-4">
                <img src={event.image} className="card-img-top" alt={event.title} />
                <div className="card-body">
                  <h5>{event.title}</h5>
                  <p>{event.date} - {event.location}</p>

                  <button
                    className="btn btn-danger mt-2"
                    onClick={() => deleteEvent(event.id)}
                  >
                    Delete
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default MyEvents;