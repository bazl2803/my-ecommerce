import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";
import TextBlock from "./TextBlock";

interface props {
  className?: string;
  value: number;
}

const Rating = ({ className, value }: props) => {
  /**
   * renderStars
   * @description Determines stars number to render.
   * @returns ReactNode[]
   */
  const renderStars = () => {
    let stars: ReactNode[] = []; // Stars array
    let starCount: number = 1; // Stars counter
    let ratingValue: number = parseFloat(value.toFixed(1)); // Fixed rating value

    // Determines full stars
    while (ratingValue / starCount >= 1) {
      stars.push(<FontAwesomeIcon key={starCount} icon="star" />);
      starCount++;
    }

    // Determines half stars
    if (ratingValue.toString()[2] >= "3" && ratingValue.toString()[2] <= "7")
      stars.push(<FontAwesomeIcon key={starCount + 1} icon="star-half" />);
    else if (ratingValue.toString()[2] >= "7")
      stars.push(<FontAwesomeIcon key={starCount + 1} icon="star" />);

    // Return stars
    return stars;
  };

  return (
    <div className={`Rating ${className}`}>
      <div className="Rating__stars">{renderStars()}</div>
      <TextBlock className="Rating__value" color="black" size="10pt">
        {value.toFixed(1)}
      </TextBlock>
    </div>
  );
};

export default Rating;
