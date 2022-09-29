/**
 * Dependencies
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement, useEffect } from "react";

/**
 * Types
 */

export interface props {
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
  weight?: string;
  size?: string;
  align?: string;
  color?: string;
  background?: string;
  children:
    | string
    | ReactElement<typeof FontAwesomeIcon>
    | ReactElement<typeof FontAwesomeIcon>[];
}

/**
 * Definition
 */
const TextBlock = ({
  className,
  variant,
  font,
  weight,
  size,
  align,
  color,
  background,
  children,
}: props) => {
  const style = {
    fontFamily: font,
    fontWeight: weight,
    fontSize: size,
    TextAlign: align,
    color,
    background,
  };

  return (
    <div
      className={
        "TextBlock" +
        `${variant ? " Typography--" + variant : ""}` +
        `${className ? ` ${className}` : ""}`
      }
      style={style}
    >
      {children}
    </div>
  );
};

export default TextBlock;
