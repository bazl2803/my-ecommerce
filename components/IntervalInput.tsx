import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { ReactNode, KeyboardEvent } from "react";

interface props {
  children: ReactNode;
  onBack: () => void;
  onNext: () => void;
}

function IntervalInput({ children, onBack, onNext }: props) {
  const keyDownHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    alert("funciona");
    if (event.code === "ArrowRigth") {
      onNext;
    }
    if (event.code === "ArrowLeft") {
      onBack;
    }
  };

  return (
    <div className="IntervalInput" onKeyDown={keyDownHandler}>
      <div className="IntervalInput__back" onClick={onBack}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>

      <div className="IntervalInput__value">{children}</div>

      <div className="IntervalInput__next" onClick={onNext}>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  );
}

export default IntervalInput;
