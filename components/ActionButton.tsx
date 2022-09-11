import React, { ReactNode, useState } from "react";
import ActionSheet from "./ActionSheet";
import Button from "./Button";

interface props {
  icon?: string;
  title: string;
  children: ReactNode;
}

const ActionButton = ({ title, icon, children }: props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="ActionButton">
      <Button icon={icon} onClick={() => setOpen(!open)}>
        {title}
      </Button>
      <ActionSheet title={title} open={open} onClose={() => setOpen(false)}>
        {children}
      </ActionSheet>
    </div>
  );
};

export default ActionButton;
