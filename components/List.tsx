/**
 *
 * List Component
 *
 * @version 1.0.0
 * @author [Bryan Lemus](https://github.com/bryanlemus)
 */

/**
 * Imports
 */
import React, { ReactElement } from "react";
import ListItem from "./ListItem";

/**
 * Types
 */
interface Props {
  className?: string;
  children: ReactElement<typeof ListItem> | ReactElement<typeof ListItem>[];
}

/**
 * Definition
 */
const List = ({ className, children }: Props) => {
  return <ul className={`List ${className}`}>{children}</ul>;
};

export default List;
