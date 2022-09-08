/**
 *
 * Navbar Component
 * v1.0.0
 * by Bryan Lemus (brian.lemus@outlook.com)
 */

// Imports
import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

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
          <Link href="/">
            <a className="Navbar__logo">
              {props.logoSource ? (
                <Image
                  src={props.logoSource}
                  alt="logo"
                  layout="responsive"
                  objectFit="contain"
                />
              ) : (
                "Logo"
              )}
            </a>
          </Link>
        </div>
        <div className="Navbar__search">
          <input
            type="search"
            name="search"
            id="searchBox"
            placeholder={props.placeholder ? props.placeholder : "Buscar"}
          />
        </div>
        <div className="Navbar__controls">{props.children}</div>
      </div>
    </div>
  );
}
