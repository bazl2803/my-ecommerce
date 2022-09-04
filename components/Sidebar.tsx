/**
 *
 * Sidebar Component
 * v1.0.0
 * by Bryan Lemus (brian.lemus@outlook.com)
 */

// Imports
import React, { ReactNode } from "react";

// PropTypes
type props = {
  children?: ReactNode;
  mode?: string;
};

// Components
export default function sidebar({ children, mode }: props) {
  return (
    <div className={`Sidebar ${mode && "Sidebar-" + mode}`}>{children}</div>
  );
}
