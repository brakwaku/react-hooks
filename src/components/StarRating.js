import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({ totalStars = 5 }) => {
  const creatArray = (length) => [...Array(length)];
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      {creatArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} / {totalStars}
      </p>
    </>
  );
};

export default StarRating;
