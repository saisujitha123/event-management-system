import React from "react";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  if (!user) {
    navigate("/login");
    return null;
  }
  return (
    <div className="container mt-5 fade-in text-center">
      <div className="card p-4 shadow-lg">
        <div
          className="rounded-circle bg-info text-dark d-flex align-items-center justify-content-center mx-auto mb-3 fw-bold"
          style={{ width: "80px", height: "80px", fontSize: "30px" }}
        >
          {user.name.charAt(0).toUpperCase()}
        </div>
        <h2>Welcome, {user.name}</h2>
        <p className="mt-2">Manage your profile and events</p>
        <button className="btn btn-danger mt-3" onClick={handleLogout}>
          Logout
        </button>
        </div>
    </div>
  );
}
export default Profile;