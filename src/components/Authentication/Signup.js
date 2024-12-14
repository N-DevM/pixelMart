import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Sign-Up Data:", formData);
    alert("Signup Successful!");
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label>Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
        <button type="submit" className="btn signup-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
