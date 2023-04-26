import React from "react";
import "./review.css";
import { Rating } from "../rating/Rating";

export const Revies = () => {
  return (
    <div className="review d-flex justify-content-between gap-4 border rounded p-4 shadow-lg mb-3">
      <div className="avatar">
        <div className="name-log">PA</div>
        <div className="name">Prem Acharya</div>
      </div>
      <div className="review-content">
        <h3>Best Book</h3>
        <Rating />
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          officia mollitia? Reiciendis adipisci reprehenderit accusantium rerum
          corrupti dolor suscipit facere sed! Inventore expedita necessitatibus
          impedit! Rerum eius mollitia ex aperiam.
        </p>
      </div>
    </div>
  );
};
