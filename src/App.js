import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import pixelmartHeroImage from "./pixelmartHero.png";
import forCustomers from "./forCustomers.jpg";
import forVendors from "./forVendors.jpg";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import FeaturesSection from "./components/FeaturesSection"; // Import the FeaturesSection component

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sloganOpacity = Math.max(1 - scrollY / 500, 0);
  const imageOpacity = Math.min(0.5 + scrollY / 1000, 1);

  return (
    <Router>
      <div className="app">
        {/* Header Section */}
        <header className="header">
          <div className="logo">PixelMart</div>
          <nav className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#vendors">For Vendors</a></li>
              <li><a href="#customers">For Customers</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <Link to="/login" className="btn login">Login</Link>
            <Link to="/signup" className="btn signup">Sign Up</Link>
          </div>
        </header>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <section className="hero">
                  <div className="hero-slogan" style={{ opacity: sloganOpacity }}>
                    <h1 className="highlight">A Platform That Grows With You</h1>
                    <p className="hero-description">
                      Start your online store with ease, grow your business, and reach customers worldwide.
                    </p>
                    <div className="hero-buttons">
                      <button className="btn explore">Explore Now</button>
                      <button className="btn learn-more">Learn More</button>
                    </div>
                  </div>
                  <div className="hero-image-wrapper" style={{ opacity: imageOpacity }}>
                    <img src={pixelmartHeroImage} alt="PixelMart Hero" className="hero-image" />
                  </div>
                </section>

                {/* Features Section */}
                <FeaturesSection /> {/* Render the FeaturesSection component here */}

                {/* Vendors Section */}
                <section id="vendors" className="vendors">
                  <div className="vendors-content">
                    <h2>Empowering Vendors</h2>
                    <p>Start, grow, and scale your business with ease on PixelMart.</p>
                    <button className="btn vendor-start">Get Started</button>
                  </div>
                  <div className="vendors-image">
                    <img src={forVendors} alt="Empowering Vendors" />
                  </div>
                </section>

                {/* Customers Section */}
                <section id="customers" className="customers">
                  <div className="customers-content">
                    <h2>For Customers</h2>
                    <p>Browse a world of products and experience personalized shopping.</p>
                    <button className="btn customer-explore">Start Shopping</button>
                  </div>
                  <div className="customers-image">
                    <img src={forCustomers} alt="Empowering Customers" />
                  </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="contact">
                  <h2>Get in Touch</h2>
                  <p>
                    Have questions or need support? Contact us at{" "}
                    <a href="mailto:contact@pixelmart.com">contact@pixelmart.com</a>.
                  </p>
                </section>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        {/* Footer Section */}
        <footer className="footer">
          <div className="footer-top">
            <div>
              <h3>About PixelMart</h3>
              <p>PixelMart is an e-commerce platform that allows vendors to create customizable stores and reach global customers.</p>
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
            <p>&copy; 2024 PixelMart. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a></p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
