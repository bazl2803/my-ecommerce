import React, { ReactNode } from "react";

interface props {
  className?: string;
  children: ReactNode;
}

const Grid = ({ className, children }: props) => {
  return <div className={`Grid ${className}`}>{children}</div>;
};

export default Grid;
