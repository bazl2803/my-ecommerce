import Image from "next/image";
import { useEffect, useState } from "react";
import Backdrop from "./Backdrop";
import Button from "./Button";
import IntervalInput from "./IntervalInput";

interface props {
  items: string[]; // Images sources
  currertIndex?: number; // Current slide index
  open?: boolean;
  onClose: () => void;
}

export default function Slideshow({
  items,
  currertIndex = 0,
  open = false,
  onClose,
}: props) {
  /* useState */
  const [current, setCurrent] = useState(0);

  /* Use Effect */
  useEffect(
    function () {
      setCurrent(currertIndex);
    },
    [currertIndex]
  );

  /* Component */
  return open ? (
    <div className="Slideshow">
      <Backdrop open={open} onClick={onClose} />
      <div className="Slideshow__layout">
        <div className="Slideshow__image">
          <Image
            src={items[current]}
            alt={items[current]}
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="Slideshow__controls">
        <IntervalInput
          onNext={() => {
            if (current < items.length -1) setCurrent(current + 1)
            console.log(current);
          }}
          onBack={() => {
            if (current > 0) setCurrent(current - 1);
          }}
        >
          {`${current + 1} of ${items.length}`}
        </IntervalInput>
      </div>
    </div>
  ) : null;
}
