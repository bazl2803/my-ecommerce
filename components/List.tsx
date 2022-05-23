import React, { ReactNode, useState } from "react";

type props = {
  children: ReactNode;
  multiple?: boolean;
};

export default function List({ children, multiple = false }: props) {
  return <div className="List">{children}</div>;
}
