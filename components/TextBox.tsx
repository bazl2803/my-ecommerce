import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import TextBlock from "./TextBlock";

interface props {
  name: string;
  value?: string | number;
  className?: string;
  label?: string;
  placeholder?: string;
  pattern?: string;
  hint?: string;
  error?: string;
  prefixIcon?: string;
  sufixIcon?: string;
  type?: "text" | "email" | "password" | "phone" | "number";
}

const TextBox = ({
  name,
  value,
  className,
  label,
  placeholder,
  pattern,
  hint,
  error,
  prefixIcon,
  sufixIcon,
  type = "text",
}: props) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <div className={"TextBox" + `${className ? ` ${className}` : ""}`}>
      {label ? <TextBlock className="TextBox__label">{label}</TextBlock> : null}

      <div className="TextBox__layout rounded-lg bg-neutral-100">
        {prefixIcon ? <FontAwesomeIcon icon={prefixIcon as IconName} /> : null}

        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={inputValue}
          pattern={pattern}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />

        {sufixIcon ? <FontAwesomeIcon icon={sufixIcon as IconName} /> : null}
      </div>

      {hint ? (
        <TextBlock className="TextBox__hint" variant="caption">
          {hint}
        </TextBlock>
      ) : null}

      {error ? <TextBlock className="TextBox__error">{error}</TextBlock> : null}
    </div>
  );
};

export default TextBox;
