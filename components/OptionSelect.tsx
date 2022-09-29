import React, { useState } from "react";
import OptionItem from "./OptionItem";

interface props {
  label: string;
  values: string[] | number[];
}

const OptionSelect = ({ label, values }: props) => {
  /* State */
  const [currentValue, setCurrentValue] = useState<string | number>();

  return (
    <div className="OptionInput">
      <label className="OptionInput__label">{label}</label>
      <div className="OptionInput__items">
        {values.map((value, index) => {
          return (
            <OptionItem
              key={index}
              selected={value === currentValue}
              onClick={() => {
                setCurrentValue(value);
              }}
            >
              {value}
            </OptionItem>
          );
        })}
      </div>
    </div>
  );
};

export default OptionSelect;
