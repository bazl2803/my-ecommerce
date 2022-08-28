import { ReactElement } from "react";
import Card from "./Card";
import List from "./List";
import ListItem from "./ListItem";
import TextBlock from "./TextBlock";

interface props {
  title: string;
  children: ReactElement<typeof ListItem> | ReactElement<typeof ListItem>[];
}

const ListCard = ({ title, children }: props) => {
  return (
    <Card>
      <div className="ListCard">
        <TextBlock>{title}</TextBlock>
        <List>{children}</List>
      </div>
    </Card>
  );
};

export default ListCard;
