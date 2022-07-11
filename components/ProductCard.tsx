/**
 *
 * ProductCard Component
 *
 * @version 1.0.0
 * @author [Bryan Lemus](https://github.com/bryanlemus)
 */

/**
 * Dependencies
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Card from "./Card";
import { Product } from "../types";
import Link from "next/link";

/**
 * Types
 */
interface Props {
  product: Product;
  layout?: string;
}

/**
 * Definition
 */
const ProductCard = ({ product, layout }: Props) => {
  return (
    <Link href="/product/[id]" as={`/product/${product.id}`}>
      <a>
        <Card
          className={`ProductCard ${layout ? `ProductCard--${layout}` : ""}`}
        >
          <div className="ProductCard__image">
            <Image
              src={product.thumbnail}
              alt={product.name}
              layout="responsive"
              objectFit="scale-down"
              width={100}
              height={100}
            />
          </div>
          <div className="ProductCard__tag">{product.tag}</div>
          <div className="ProductCard__title">{product.name}</div>
          <div className="ProductCard__price">
            {"$" + product.price.toLocaleString()}
          </div>
          <div className="ProductCard__rating">
            <FontAwesomeIcon icon="star" className="h-4 w-4 text-yellow-400" />{" "}
            {product.rating}
          </div>
        </Card>
      </a>
    </Link>
  );
};

export default ProductCard;
