import Gallery from "../../components/Gallery";
import Rating from "../../components/Rating";
import TextBlock from "../../components/TextBlock";
import IntervalInput from "../../components/IntervalInput";
import Button from "../../components/Button";
import OptionSelect from "../../components/OptionSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faCartPlus,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { productsData } from "../../data/example";
import { useState } from "react";
import FeatureItem from "../../components/FeatureItem";

function ProductPage() {
  let [quantity, setQuantity] = useState(1);
  return (
    <div className="ProductPage">
      <Gallery
        images={productsData.map((product) => {
          return product.thumbnail;
        })}
      />

      <div className="ProductPage__header">
        <div className="flex flex-col gap-1">
          <TextBlock className="ProductPage__tag text-md">
            <FontAwesomeIcon icon={faAward} />
            <span>Editor's Choice</span>
          </TextBlock>

          <TextBlock className="ProductPage__title">
            2021 Apple iPad Pro
          </TextBlock>

          <Rating value={4.7} />
        </div>

        <OptionSelect
          label="Capacity:"
          values={["128GB", "256GB", "512GB", "1TB"]}
        />

        <OptionSelect
          label="Conectivity:"
          values={["Wi-Fi", "Wi-Fi + Cellular"]}
        />

        <div className="ProductPage__price">
          <span>Price:</span>
          <span className="ProductPage__price__value">$1999.00</span>
        </div>

        <div className="ProductPage__controls">
          <div className="ProductPage__quantity">
            <span>Quantity:</span>
            <IntervalInput
              onNext={() => {
                setQuantity(quantity + 1);
              }}
              onBack={() => {
                setQuantity(quantity > 1 ? quantity - 1 : quantity);
              }}
            >
              {quantity}
            </IntervalInput>
          </div>

          <Button className="ProductPage__addCart">
            <FontAwesomeIcon icon={faCartPlus} />
            Add to Cart
          </Button>

          <Button className="ProductPage__addFavorite">
            <FontAwesomeIcon icon={faHeartCirclePlus} />
            Add to Favorites
          </Button>
        </div>
        <TextBlock className="ProductPage__description">
          {`Apple M1 chip for next-level performance\n
          Stunning 11-inch Liquid Retina display with ProMotion, True Tone, and P3 wide color\n
          TrueDepth camera system featuring Ultra Wide front camera with Center Stage\n
          12MP Wide camera, 10MP Ultra Wide camera, and LiDAR Scanner for immersive AR\n
          Stay connected with ultrafast Wi-Fi\n
          Go further with all-day battery life\n
          Thunderbolt port for connecting to fast external storage, displays, and docks\n
          Face ID for secure authentication and Apple Pay\n
          Four speaker audio and five studio-quality microphones\n
          Support for Apple Pencil (2nd generation), Magic Keyboard, and Smart Keyboard Folio\n`}
        </TextBlock>
      </div>
      <div className="flex justify-between" style={{ gridColumn: "1/4" }}>
        <TextBlock size="24px" weight="600">
          Features
        </TextBlock>
        <Button>Full specs</Button>
      </div>
      <div className="ProductPage__features">
        <FeatureItem label="Storage" value="128GB" />
        <FeatureItem label="Processor" value="M1" />
        <FeatureItem label="Display" value={`6.1\"`} />
        <FeatureItem label="Conectivity" value="Wi-Fi" />
        <FeatureItem label="Refresh Rate" value="120Hz" />
      </div>
    </div>
  );
}

export default ProductPage;
