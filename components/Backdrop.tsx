import { MouseEvent, ReactNode } from "react";

interface props {
  children?: ReactNode;
  open?: boolean;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const Backdrop = ({ children, open, onClick }: props) => {
  return open ? (
    <div
      className="Backdrop"
      onClick={onClick}
      onScroll={(e) => {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      }}
    >
      {children}
    </div>
  ) : null;
};

export default Backdrop;
