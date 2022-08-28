import React, { ReactElement } from "react";
import GridItem from "./GridItem";

interface props {
  className?: string;
  children?: ReactElement<typeof GridItem> | ReactElement<typeof GridItem>[];
}

const Grid = ({ className, children }: props) => {
  return <div className={`Grid ${className}`}>{children}</div>;
};

export default Grid;
