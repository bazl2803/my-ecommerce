/**
 *
 * ListItem Component
 *
 * @version 1.0.0
 * @author [Bryan Lemus](https://github.com/bryanlemus)
 */

/**
 * Dependencies
 */
import React, { ReactNode, FunctionComponent, MouseEvent } from "react";

/**
 * Types
 */
interface Props {
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLLIElement>) => void;
  selected?: boolean;
}

/**
 * Definition
 */
const ListItem: FunctionComponent<Props> = ({
  children,
  className,
  onClick,
  selected,
}) => {
  return (
    <li
      className={`ListItem
        ${selected ? "ListItem--selected" : ""}
        ${className}`}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export default ListItem;
