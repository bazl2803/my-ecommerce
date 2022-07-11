/**
 * Dependencies
 */
import React from "react";

/**
 * Types
 */

interface Props {
  variant:
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
  children: string;
}

/**
 * Definition
 */
const TextBlock = ({ variant, children }: Props) => {
  return <div className={`TextBlock Typography--${variant}`}>{children}</div>;
};

export default TextBlock;
