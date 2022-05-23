/**
 *
 * Navbar Component
 * v1.0.0
 * by Bryan Lemus (brian.lemus@outlook.com)
 */

// Imports
import React, { MouseEventHandler, ReactNode } from "react";
import Image from "next/image";

// PropTypes
interface Props {
  logoSource?: string;
  placeholder?: string;
  children?: ReactNode;
}

// Component
export default function Navbar(props: Props): JSX.Element {
  // Return component
  return (
    <div className="Navbar">
      <div className="Navbar__layout">
        <div className="Navbar__logo">
          {props.logoSource ? (
            <Image
              className="Navbar__logo"
              src={props.logoSource}
              alt="logo"
              layout="responsive"
              objectFit="contain"
            />
          ) : (
            "Logo"
          )}
        </div>
        <div className="Navbar__search">
          <input
            type="search"
            name="search"
            id="searchBox"
            placeholder={
              props.placeholder ? props.placeholder : "Buscar"
            }
          />
        </div>
        <div className="Navbar__controls">{props.children}</div>
      </div>
    </div>
  );
}
