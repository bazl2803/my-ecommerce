import { MouseEvent } from "react";

interface props {
  children: string | number;
  selected?: boolean;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

const OptionItem = ({ children, selected, onClick }: props) => {
  return (
    <div
      onClick={onClick}
      className={"OptionItem" + `${selected ? ` OptionItem--selected` : ""}`}
    >
      {children}
    </div>
  );
};

export default OptionItem;
