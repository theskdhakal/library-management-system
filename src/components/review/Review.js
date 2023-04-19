import React from "react";
import "./review.css";
import { Rating } from "../custom-card/rating/Rating";

export const Review = () => {
  return (
    <div className="review d-flex">
      <div className="avatar">
        <div className="name-log">Sk</div>
        <div className="name">Shiva K . Dhakal</div>
      </div>

      <div className="review-content">
        <h3>Best book</h3>
        <Rating />
      </div>
    </div>
  );
};
