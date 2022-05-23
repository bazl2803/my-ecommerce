import React, { ReactNode } from "react";

interface props {
  children?: ReactNode;
  style?: object;
  className?: string;
}

export default function Card({ children, style, className }: props) {
  return (
    <div className={`Card ${className}`} style={style}>
      {children}
    </div>
  );
}
