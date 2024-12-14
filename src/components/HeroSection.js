import React from "react";
import pixelmartHeroImage from "../assets/pixelmartHero.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-slogan">
        <h1 className="highlight">A Platform That Grows With You</h1>
        <p className="hero-description">
          Start your online store with ease, grow your business, and reach customers worldwide.
        </p>
        <div className="hero-buttons">
          <button className="btn explore">Explore Now</button>
          <button className="btn learn-more">Learn More</button>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <img src={pixelmartHeroImage} alt="PixelMart Hero" className="hero-image" />
      </div>
    </section>
  );
};

export default HeroSection;
