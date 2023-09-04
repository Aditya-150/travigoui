import React from "react";
import "./reviews.css";
import Review from "./../../fragments/review/Review";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { ReviewerData } from "./ReviewerData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import person1 from "./../../assets/person1.png";
import person2 from "./../../assets/person2.png";
import person3 from "./../../assets/person3.png";
import person4 from "./../../assets/person4.png";
import person5 from "./../../assets/person5.png";
import person6 from "./../../assets/person6.png";
import AnimatedComponent from "../AnimatedComponent";

const Reviews = () => {
  var settings = {
    arrow: true,
    dots: false,
    infinite: true,
    speed: 200,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1235,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="reviews">
      <h1>What Our Customers Say?</h1>
      <p>Some testimonials from those who go traveling using our services</p>
      <AnimatedComponent>
        <div className="reviews-container">
          <Slider {...settings}>
            <Review
              imageUrl={person1}
              name="Joe Frost"
              designation="Software Developer"
              thought="Thanks travigo! I can now make my dream of traveling around the world a reality."
              stars={4}
              className="review-card"
            />
            <Review
              imageUrl={person2}
              name="Chris Snow"
              designation="Photographer"
              thought="I think this the best traveler, service I have ever tried and I recommend to everyone."
              stars={5}
              className="review-card"
            />
            <Review
              imageUrl={person3}
              name="Theresa Jordan"
              designation="Product Designer"
              thought="The services provided by travigo are unique and worth every penny."
              stars={4}
              className="review-card"
            />
            <Review
              imageUrl={person4}
              name="Vivek Das"
              designation="Artist"
              thought="Travigo helps me to find interesting tourist locations."
              stars={5}
              className="review-card"
            />
            <Review
              imageUrl={person5}
              name="Emma Watson"
              designation="Social Activist"
              thought="Travigo helped me to find best hotels at affordable price ranges."
              stars={4}
              className="review-card"
            />
            <Review
              imageUrl={person6}
              name="Joe Frost"
              designation="Software Developer"
              thought="Thanks travigo! I can now make my dream of traveling around the world a reality."
              stars={5}
              className="review-card"
            />
          </Slider>
        </div>
      </AnimatedComponent>
    </div>
  );
};

export default Reviews;
