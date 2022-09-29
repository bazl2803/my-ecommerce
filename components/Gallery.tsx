import Image from "next/image";
import { useState } from "react";
import Slideshow from "./Slideshow";

interface props {
  images: string[];
}

const Gallery = ({ images }: props) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [openSlideshow, setOpenSlideshow] = useState(false);

  return (
    <div className="Gallery">
      <div className="Gallery__layout">
        {images.map((image, index) => {
          return index < 4 ? (
            <div
              className="Gallery__item"
              key={index}
              onClick={function () {
                setSelectedImage(index);
                setOpenSlideshow(true);
              }}
            >
              <Image
                src={image}
                alt={image}
                layout="responsive"
                objectFit="scale-down"
                width={100}
                height={100}
              />
            </div>
          ) : null;
        })}
      </div>

      <Slideshow
        items={images}
        currertIndex={selectedImage}
        open={openSlideshow}
        onClose={() => setOpenSlideshow(false)}
      />
    </div>
  );
};

export default Gallery;
