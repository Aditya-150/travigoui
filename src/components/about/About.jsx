import React, { useState, useEffect, useRef } from "react";
import "./about.css";
import paypal from "./../../assets/paypal.svg";
import monday from "./../../assets/monday.svg";
import slack from "./../../assets/slack.svg";
import tokopedia from "./../../assets/tokopedia.svg";
import traveloka from "./../../assets/traveloka.svg";
import aboutImage from "./../../assets/aboutImage.png";
import AnimatedComponent from "../AnimatedComponent";

const About = () => {
  const [years, setYears] = useState(0);
  const [places, setPlaces] = useState(0);
  const ref = useRef(null);
  const yearsRef = useRef(years);
  const placesRef = useRef(places);
  useEffect(() => {
    yearsRef.current = years;
    placesRef.current = places;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const animateYears = () => {
            if (yearsRef.current < 10) {
              setYears((prevYears) => prevYears + 1);
              setTimeout(animateYears, 1000);
            }
          };

          if (yearsRef.current < 10) {
            animateYears();
          }

          const animatePlaces = () => {
            if (placesRef.current < 400) {
              setPlaces((prevPlaces) => prevPlaces + 1);
              setTimeout(animatePlaces, 100);
            }
          };

          if (placesRef.current < 400) {
            animatePlaces();
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [years, places]);

  return (
    <div className="about" id="about">
      <div className="about-logos">
        <img src={monday} alt="monday" />
        <img src={paypal} alt="paypal" />
        <img src={traveloka} alt="traveloka" />
        <img src={slack} alt="slack" />
        <img src={tokopedia} alt="tokopedia" />
      </div>
      <div className="about-container">
        <AnimatedComponent>
          <div className="about-container-image">
            <img src={aboutImage} alt="aboutImage" />
          </div>
        </AnimatedComponent>
        <div className="about-container-content">
          <h1>Sweet Memories Come to Life again</h1>
          <p>
            What we have always taken care of for 10 years is always
            prioritizing the comfort of our users. So don't doubt our quality.
          </p>
          <div className="about-container-content-data" ref={ref}>
            <div className="about-container-content-data-first">
              <h1>{years}</h1>
              <p>Years Experience</p>
            </div>
            <div className="about-container-content-data-second">
              <h1>{places}</h1>
              <p>Destination Collaboration</p>
            </div>
            <div className="about-container-content-data-third">
              <h1>{3}K+</h1>
              <p>Happy Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
