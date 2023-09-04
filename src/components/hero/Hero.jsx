import React from "react";
import "./hero.css";
import heroImage from "./../../assets/heroImage.png";
import AnimatedComponent from "../AnimatedComponent.js";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <AnimatedComponent>
        <div className="hero-heading">
          <h1>It's a Big World Out</h1>
          <h1>There, Go Explore</h1>
        </div>
      </AnimatedComponent>
      <p>We always make our customers happy by providing many choices.</p>
      <div className="hero-button">
        <button type="button" className="hero-button-started">
          Get Started
        </button>
        <button type="button" className="hero-button-demo">
          Get a Demo
        </button>
      </div>
      <div className="hero-image">
        <AnimatedComponent>
          <img src={heroImage} alt="hero" />
        </AnimatedComponent>
      </div>
    </div>
  );
};

export default Hero;
