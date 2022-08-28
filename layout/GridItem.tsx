import React from "react";

interface props {
  children?: React.ReactNode;
  rowSpan?: number;
  columnSpan?: number;
}

const GridItem = ({ children, rowSpan, columnSpan }: props) => {
  const styles = {
    gridRow: `span ${rowSpan}`,
    gridColumn: `span ${columnSpan}`,
  };
  return (
    <div className="GridItem" style={styles}>
      {children}
    </div>
  );
};

export default GridItem;
