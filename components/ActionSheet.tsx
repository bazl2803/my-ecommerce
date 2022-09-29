import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Backdrop from "./Backdrop";
import TextBlock from "./TextBlock";

interface props {
  children: ReactNode;
  title: string;
  open?: boolean;
  onClose: () => void;
}

const ActionSheet = ({ title, open = false, children, onClose }: props) => {
  return open ? (
    <div className="ActionSheet">
      <Backdrop open={open} onClick={onClose} />

      <div className="ActionSheet__layout">
        <div className="ActionSheet__header" onTouchMove={onClose}>
          <FontAwesomeIcon icon={faMinus} />
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
