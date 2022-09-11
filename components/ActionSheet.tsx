import { ReactNode } from "react";
import Backdrop from "./Backdrop";
import TextBlock from "./TextBlock";

interface props {
  title: string;
  open?: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ActionSheet = ({ title, open = false, children, onClose }: props) => {
  return open ? (
    <div className="ActionSheet" onTouchMove={onClose}>
      <Backdrop open={open} onClick={onClose} />
      <div className="ActionSheet__layout">
        <div className="ActionSheet__header">
          <TextBlock className="ActionSheet__title" variant="title">
            {title}
          </TextBlock>
        </div>
        <div className="ActionSheet__body">{children}</div>
      </div>
    </div>
  ) : null;
};

export default ActionSheet;
