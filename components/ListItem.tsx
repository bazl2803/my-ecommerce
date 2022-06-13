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
import React from "react";

/**
 * Types
 */
interface Props {
  children: React.ReactNode;
  className: string;
  onClick: (event: React.MouseEvent<HTMLLIElement>) => void;
  selected?: boolean;
}

/**
 * Definition
 */
const ListItem = ({ children, className, onClick, selected }: Props) => {
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
