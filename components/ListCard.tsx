import { ReactElement } from "react";
import Card from "./Card";
import List from "./List";
import ListItem from "./ListItem";
import TextBlock from "./TextBlock";

interface props {
  title: string;
  subtitle?: string;
  children: ReactElement<typeof ListItem> | ReactElement<typeof ListItem>[];
}

const ListCard = ({ title, subtitle, children }: props) => {
  return (
    <Card className="ListCard">
      <TextBlock className="ListCard__title" variant="title">
        {title}
      </TextBlock>
      {subtitle && (
        <TextBlock className="ListCard__title" variant="subtitle2">
          {subtitle}
        </TextBlock>
      )}
      <List>{children}</List>
    </Card>
  );
};

export default ListCard;
