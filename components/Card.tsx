import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  style?: object;
  className?: string;
}

export default function Card({ children, style, className }: Props) {
  return (
    <div className={`Card ${className}`} style={style}>
      {children}
    </div>
  );
}
