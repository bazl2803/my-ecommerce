import React, { ReactNode, useState } from "react";
import ActionSheet from "./ActionSheet";
import Button from "./Button";

interface props {
  icon?: string;
  text: string;
  title: string;
  children: ReactNode;
}

const ActionButton = ({ title, text, icon, children }: props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="ActionButton">
      <Button icon={icon} onClick={() => setOpen(!open)}>
        {text}
      </Button>
      <ActionSheet title={title} open={open} onClose={() => setOpen(false)}>
        {children}
      </ActionSheet>
    </div>
  );
};

export default ActionButton;
