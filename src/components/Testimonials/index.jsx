import React from "react";
import TestimonialCard from "../TestimonialCard";

const Testimonials = ({ allReviews }) => {
  if (allReviews?.length === 0) {
    // TODO Remove This Condition Once HomePage Integration Done
    // THIS IS FOR DUMMY RESPONSE
    return (
      <div className="testimonialSection">
        <div className="testimonialSection_lowerBorder"></div>
        <div className="testimonialSection_heading">
          What our <span>Students Say</span> about us
        </div>
        <div className="testimonialSection_cardContainer">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
        <div className="testimonialSection_lowerBorder"></div>
      </div>
    );
  }
  return (
    <div className="testimonialSection">
      <div className="testimonialSection_lowerBorder"></div>
      <div className="testimonialSection_heading">
        What our <span>Students Say</span> about us
      </div>
      <div className="testimonialSection_cardContainer">
        {allReviews?.map((ele) => {
          return (
            < TestimonialCard items={ele} />
          )
        })}
        {/* <TestimonialCard />
        <TestimonialCard /> */}
      </div>
      <div className="testimonialSection_lowerBorder"></div>
    </div>
  )
};

export default Testimonials;
