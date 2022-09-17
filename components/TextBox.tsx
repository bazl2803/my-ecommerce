import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type } from "os";
import { useEffect, useState } from "react";
import TextBlock from "./TextBlock";

interface props {
  name: string;
  value?: string;
  className?: string;
  label?: string;
  placeholder?: string;
  pattern?: string;
  hint?: string;
  error?: string;
  prefixIcon?: string;
  sufixIcon?: string;
  type?: string;
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
  let [verifyRegex, setVerifyRegex] = useState(false);

  useEffect(() => {
    RegExp(pattern ?? "").test(value ?? "")
      ? setVerifyRegex(true)
      : setVerifyRegex(false);
  }, [value]);

  return (
    <div className={`TextBox ${className ?? ""}`}>
      {label ? (
        <TextBlock className="TextBox__label text-neutral-600 px-2">
          {label}
        </TextBlock>
      ) : null}

      <div className="TextBox__layout rounded-lg bg-neutral-100">
        {prefixIcon ? <FontAwesomeIcon icon={prefixIcon as IconName} /> : null}

        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          pattern={pattern}
        />

        {sufixIcon ? <FontAwesomeIcon icon={sufixIcon as IconName} /> : null}
      </div>

      {hint && verifyRegex ? (
        <TextBlock className="TextBox__hint" variant="caption">{hint}</TextBlock>
      ) : null}

      {error && !verifyRegex ? (
        <TextBlock className="TextBox__error">{error}</TextBlock>
      ) : null}
    </div>
  );
};

export default TextBox;
