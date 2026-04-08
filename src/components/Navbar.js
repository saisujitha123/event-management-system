import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <nav
      className="navbar shadow"
      style={{
        background: "linear-gradient(90deg, #ff512f, #dd2476)"
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <Link
        className="navbar-brand fw-bold text-white"
        to="/"
        style={{ fontSize: "28px", letterSpacing: "1px" }}
        >
        Velvet Horizon events
        </Link>
        <div className="d-flex gap-3 align-items-center">
          <Link className="nav-link text-white nav-item-custom" to="/">Home</Link>
          <Link className="nav-link text-white nav-item-custom" to="/events">Events</Link>
          <Link className="nav-link text-white nav-item-custom" to="/contact">Contact</Link>
          {user && (
            <Link className="nav-link text-white nav-item-custom" to="/myevents">
              My Events
            </Link>
          )}
          {!user ? (
            <Link className="nav-link text-warning" to="/login">
              Login
            </Link>
          ) : (
            <>
              <div
                className="rounded-circle bg-light text-dark d-flex align-items-center justify-content-center fw-bold"
                style={{ width: "35px", height: "35px" }}
              >
                {user.name.charAt(0).toUpperCase()}
              </div>
              <button
                className="btn btn-dark btn-sm"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
          </div>
      </div>
    </nav>
  );
}
export default Navbar;