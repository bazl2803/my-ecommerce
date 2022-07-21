/**
 * Dependencies
 */
import React from "react";

/**
 * Types
 */

interface Props {
  className?: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "title"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "overline";
  font?: string;
  color?: string;
  weight?: string;
  size?: string;
  children: string;
}

/**
 * Definition
 */
const TextBlock = ({
  className,
  variant,
  font,
  color,
  weight,
  size,
  children,
}: Props) => {
  const style = {
    fontFamily: font,
    fontWeight: weight,
    fontSize: size,
    color: color,
  };
  return (
    <div
      className={`TextBlock
      ${variant ? `Typography--${variant}` : ""}
      ${className ? className : ""}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default TextBlock;
