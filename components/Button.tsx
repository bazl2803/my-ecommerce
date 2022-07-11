/**
 *
 * Button Component
 *
 */

/**
 * Imports
 */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

/**
 * Types
 */
interface Props {
  icon?: string;
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Definition
 */
export default function Button({ icon, text, onClick }: Props): JSX.Element {
  const iconName: IconName = icon ? (icon as IconName) : ("" as IconName);

  return (
    <button className="Button" onClick={onClick}>
      {iconName ? (
        <FontAwesomeIcon className="Button-icon" icon={iconName} />
      ) : null}
      <div className="Button-text">{text}</div>
    </button>
  );
}
