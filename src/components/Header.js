import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">PixelMart</div>
      <nav className="navbar">
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#vendors">For Vendors</a></li>
          <li><a href="#customers">For Customers</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="btn login">Login</button>
        <button className="btn signup">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
