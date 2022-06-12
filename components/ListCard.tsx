import React from "react";
import List from "./List";
import ListItem from "./ListItem";

interface props {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function ListCard({ children, title, subtitle }: props) {
  return (
    <div className="ListCard">
      <div className="ListCard__header">
        <div className="ListCard__title">{title}</div>
        <div className="ListCard__subtitle">{subtitle}</div>
      </div>
      <List>
        <ListItem>{children}</ListItem>
      </List>
    </div>
  );
}
