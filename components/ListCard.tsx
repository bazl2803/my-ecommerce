/**
 * Imports
 */
import React, { ReactElement } from "react";
import List from "./List";
import ListItem from "./ListItem";
import Subheader from "./Subheader";

/**
 * Types
 */
interface Props {
  title: string;
  subtitle: string;
  children: ReactElement<typeof ListItem> | ReactElement<typeof ListItem[]>;
}

/**
 * Definition
 */
const ListCard = ({ children, title, subtitle }: Props) => {
  let listItems = React.Children.toArray(children);
  return (
    <div className="ListCard">
      <Subheader title={title} subtitle={subtitle} />
      <List>
        {listItems.map((item, index) => {
          return <ListItem key={index}>{item}</ListItem>;
        })}
      </List>
    </div>
  );
};

export default ListCard;
