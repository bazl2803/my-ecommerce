/**
 * Imports
 */
import React from "react";

/**
 * Types
 */
interface Props {
  title: string;
  subtitle: string;
}

/**
 * Definition
 */
const Subheader = ({ title, subtitle }: Props) => {
  return (
    <div className="Subheader">
      <div className="Subheader__title">{title}</div>
      <div className="Subheader__subtitle">{subtitle}</div>
    </div>
  );
};

export default Subheader;
