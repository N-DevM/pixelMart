import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <h3>About PixelMart</h3>
          <p>
            PixelMart is an e-commerce platform that allows vendors to create customizable stores and reach global customers.
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <p><a href="#features">Features</a></p>
          <p><a href="#vendors">For Vendors</a></p>
          <p><a href="#customers">For Customers</a></p>
          <p><a href="#contact">Contact Us</a></p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Email: <a href="mailto:najeebajmera7071@gmail.com">najeebajmera7071@gmail.com</a></p>
          <p>Phone: +923065550452</p>
        </div>
      </div>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <div className="newsletter">
        <input type="email" placeholder="Subscribe for updates..." />
        <button>Subscribe</button>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2024 PixelMart. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
