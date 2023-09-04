import React, { useState, useEffect } from "react";
import "./review.css";
import { GiRoundStar } from "react-icons/gi";
import { FaQuoteRight } from "react-icons/fa";

const Review = ({ imageUrl, name, designation, thought, stars }) => {
  const [screenSize, getScreenSize] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setScreenSize = () => {
    getScreenSize({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", setScreenSize);
    return () => {
      window.removeEventListener("resize", setScreenSize);
    };
  }, [screenSize]);
  const quoteIcon =
    ((screenSize.dynamicWidth > 750) ? 60 : screenSize.dynamicWidth > 450) ? 50 : 40;
  const starIcon = screenSize.dynamicWidth > 650 ? 24 : 20;
  const ratedStars = stars === 4;
  return (
    <div className="review">
      <div className="review-quote">
        <FaQuoteRight color="var(--primary-color)" size={quoteIcon} />
      </div>
      <div className="review-avatar">
        <img src={imageUrl} alt="imageUrl" />
      </div>
      <div className="review-name">
        <h1>{name}</h1>
      </div>
      <div className="review-designation">
        <p>{designation}</p>
      </div>
      <div className="review-stars">
        {ratedStars ? (
          <>
            <GiRoundStar color="var(--tertiary-color)" size={starIcon} />
            <GiRoundStar color="var(--tertiary-color)" size={starIcon} />
            <GiRoundStar color="var(--tertiary-color)" size={starIcon} />
            <GiRoundStar color="var(--tertiary-color)" size={starIcon} />
            <GiRoundStar color="#d4d4d4" size={starIcon} />
          </>
        ) : (
          <>
            <GiRoundStar color="var(--tertiary-color)" size={starIcon} />
            <GiRoundStar color="var(--tertiary-color)" size={starIcon} />
            <GiRoundStar color="var(--tertiary-color)" size={starIcon} />
            <GiRoundStar color="var(--tertiary-color)" size={starIcon} />
            <GiRoundStar color="var(--tertiary-color)" size={starIcon} />
          </>
        )}
      </div>
      <div className="review-thought">
        <p>"{thought}"</p>
      </div>
    </div>
  );
};

export default Review;
