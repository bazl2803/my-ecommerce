/**
 *
 * SidebarItem Component
 * v1.0.0
 * by Bryan Lemus (brian.lemus@outlook.com)
 */

// Imports
import { ReactNode } from "react";
import TextBlock from "./TextBlock";

// PropTypes
type props = {
  text: string;
  children?: ReactNode;
};

// Components
export default function SidebarItem({ text, children }: props): JSX.Element {
  return (
    <div className="SidebarItem">
      <TextBlock className="SidebarItem__text" variant="subtitle1">
        {text}
      </TextBlock>
      <div className="SidebarItem__body">{children}</div>
    </div>
  );
}
