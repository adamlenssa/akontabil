import React from "react";
import { TTestomonial } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

function TestimonialCard({
  testamonial,
  className,
}: {
  testamonial: TTestomonial;
  className?: string;
}) {
  const ratingsLength = [1, 2, 3, 4, 5];
  return (
    <div
      className={`max-w-72 p-4 m-4 bg-dark-accent rounded-2xl shadow-[#4d4d4d] shadow-lg dark:bg-light-accent ${className}`}
    >
      <p className="sm:text-xl text-md font-bold text-center text-white">
        {testamonial.userName}
      </p>
      <div className="flex items-center justify-center mb-6 mt-2">
        {ratingsLength.map((rating) => {
          if (rating <= testamonial.rating)
            return (
              <FontAwesomeIcon
                key={rating}
                icon={faStar}
                className="text-white max-w-6"
              />
            );
          return (
            <FontAwesomeIcon
              key={rating}
              icon={emptyStar}
              className="text-white max-w-6"
            />
          );
        })}
      </div>
      <p className="text-md text-wrap text-center text-white mb-4">
        {testamonial.reviewText}
      </p>
    </div>
  );
}

export default TestimonialCard;
