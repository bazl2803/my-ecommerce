import React, { ReactNode } from "react";

type props = {
  children: ReactNode;
  selected?: boolean;
};

export default function ListItem({ children, selected = false }: props) {
  return (
    <div className={"ListItem" + (selected ? "ListItem-selected" : "")}>
      {children}
    </div>
  );
}
