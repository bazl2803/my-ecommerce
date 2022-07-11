/**
 * Dependencies
 */
import React from "react";

/**
 * Types
 */

interface Props {
  variant?:
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "heading5"
    | "heading6"
    | "title"
    | "subtitle"
    | "body"
    | "caption";
  font?: string;
  color?: string;
  weight?: string;
  size?: string;
  children: string;
}

/**
 * Definition
 */
const TextBlock = ({ variant, font, color, weight, size, children }: Props) => {
  const style = {
    fontFamily: font,
    fontWeight: weight,
    fontSize: size,
    color: color,
  };
  return (
    <div className={`TextBlock Typography--${variant}`} style={style}>
      {children}
    </div>
  );
};

export default TextBlock;
