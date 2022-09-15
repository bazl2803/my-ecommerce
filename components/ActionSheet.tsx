import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
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
    <div className="ActionSheet">
      <Backdrop open={open} onClick={onClose} />
      <div className="ActionSheet__layout">
        <div className="ActionSheet__header">
          <FontAwesomeIcon
            icon={"fa-solid fa-minus" as IconProp}
            onTouchMove={onClose}
          />
          <TextBlock className="ActionSheet__title" variant="h6">
            {title}
          </TextBlock>
        </div>
        <div className="ActionSheet__body">{children}</div>
      </div>
    </div>
  ) : null;
};

export default ActionSheet;
