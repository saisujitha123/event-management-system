import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (user) {
      navigate("/profile");
    }
  }, [navigate]);
  const handleLogin = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ name }));
    navigate("/profile");
  };
  return (
    <div className="container mt-5 fade-in d-flex justify-content-center">
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h2 className="text-center mb-3">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter your name"
            className="form-control mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn btn-primary w-100">
            Login
          </button>
        </form>

      </div>
    </div>
  );
}
export default Login;