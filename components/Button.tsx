/**
 *
 * Button Component
 *
 */

/**
 * Imports
 */
import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

/**
 * Types
 */
interface Props {
  children?: ReactNode;
  className?: string;
  icon?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

/**
 * Definition
 */
export default function Button({
  icon,
  children,
  onClick,
  className,
}: Props): JSX.Element {
  const iconName: IconName = icon ? (icon as IconName) : ("" as IconName);

  return (
    <div
      role="button"
      className={"Button" + ` ${className ?? ""}`}
      onClick={onClick}
    >
      {iconName ? (
        <FontAwesomeIcon className="Button-icon" icon={iconName} />
      ) : null}

      <div className="Button-text">{children}</div>
    </div>
  );
}
