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
    <Card className="ListCard">
        <TextBlock className="ListCard__title" variant="title">{title}</TextBlock>
        <List>{children}</List>
    </Card>
  );
};

export default ListCard;
