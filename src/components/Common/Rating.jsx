import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value, text, color = "#f59e0b" }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {value >= star ? (
            <FaStar className="inline" style={{ color }} />
          ) : value >= star - 0.5 ? (
            <FaStarHalfAlt className="inline" style={{ color }} />
          ) : (
            <FaRegStar className="inline" style={{ color }} />
          )}
        </span>
      ))}
      <span className="ml-2">{text}</span>
    </div>
  );
};

export default Rating;
