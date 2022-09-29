import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
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
      stars.push(<FontAwesomeIcon key={starCount} icon={faStar} />);
      starCount++;
    }

    // Determines half stars
    if (ratingValue.toString()[2] >= "3" && ratingValue.toString()[2] <= "7")
      stars.push(<FontAwesomeIcon key={starCount + 1} icon={faStarHalf} />);
    else if (ratingValue.toString()[2] >= "7")
      stars.push(<FontAwesomeIcon key={starCount + 1} icon={faStar} />);

    // Return stars
    return stars;
  };

  return (
    <div className={`Rating ${className}`}>
      <div className="Rating__stars">{renderStars()}</div>
      <TextBlock className="Rating__value" color="black" FontSize="10pt">
        {value.toFixed(1)}
      </TextBlock>
    </div>
  );
};

export default Rating;
