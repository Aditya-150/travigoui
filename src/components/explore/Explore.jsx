import "./explore.css";
import React, { useState, useEffect } from "react";
import exploreImage from "./../../assets/exploreImage.png";
import { CgCalendarDates } from "react-icons/cg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import AnimatedComponent from "../AnimatedComponent";
const Explore = () => {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);
  const searchIcon =
    screenSize.dynamicWidth > 540
      ? 25
      : screenSize.dynamicWidth > 500
      ? 20
      : screenSize.dynamicWidth > 500
      ? 16
      : 12;
  const subIcon =
    screenSize.dynamicWidth > 540
      ? 20
      : screenSize.dynamicWidth > 500
      ? 16
      : screenSize.dynamicWidth > 400
      ? 12
      : 8;
  return (
    <div className="explore">
      <h1>Explore The Beauty of The World</h1>
      <div className="explore-container">
        <div className="explore-container-field-first">
          <div className="explore-container-field-first-icon">
            <HiOutlineLocationMarker
              color="var(--tertiary-color)"
              size={subIcon}
            />
          </div>
          <div className="explore-container-field-first-text">
            <h1>Location</h1>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Where are you going?"
            />
          </div>
        </div>
        <div className="explore-container-field-second">
          <div className="explore-container-field-second-icon">
            <CgCalendarDates color="var(--tertiary-color)" size={subIcon} />
          </div>
          <div className="explore-container-field-second-text">
            <h1>Check In</h1>
            <input
              type="date"
              name="date"
              id="check-in-date"
              placeholder="Add date"
            />
          </div>
        </div>
        <div className="explore-container-field-third">
          <div className="explore-container-field-third-icon">
            <CgCalendarDates color="var(--tertiary-color)" size={subIcon} />
          </div>
          <div className="explore-container-field-third-text">
            <h1>Check Out</h1>
            <input
              type="date"
              name="date"
              id="check-out-date"
              placeholder="Add date"
            />
          </div>
        </div>
        <div className="explore-container-search">
          <FiSearch color="white" size={searchIcon} className="search" />
        </div>
      </div>
      <AnimatedComponent>
        <div className="explore-image">
          <img src={exploreImage} alt="exploreImage" />
        </div>
      </AnimatedComponent>
    </div>
  );
};

export default Explore;
