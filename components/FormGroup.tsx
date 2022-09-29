import { ReactNode } from "react";
import TextBlock from "./TextBlock";

interface props {
  children: ReactNode;
  title: string;
}

const FormGroup = ({ children, title }: props) => {
  return (
    <div className="FormGroup">
      <TextBlock variant="title">{title}</TextBlock>
      <div className="FormGroup__content">{children}</div>
    </div>
  );
};

export default FormGroup;
