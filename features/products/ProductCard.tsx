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
import Image from "next/image";
import Link from "next/link";
import Card from "../../components/Card";
import Rating from "../../components/Rating";

/**
 * Types
 */
interface Props {
  id: string;
  thumbnail: string;
  name: string;
  tag?: string;
  price: number;
  rating: number;
  layout?: string;
}

/**
 * Definition
 */
const ProductCard = ({
  id,
  thumbnail,
  name,
  tag,
  price,
  rating,
  layout,
}: Props) => {
  return (
    <Link href="/products/[id]" as={`/products/${id}`}>
      <a>
        <Card
          className={`ProductCard ${layout ? `ProductCard--${layout}` : ""}`}
        >
          <div className="ProductCard__image">
            <Image
              src={thumbnail}
              alt={name}
              layout="responsive"
              objectFit="scale-down"
              width={100}
              height={100}
            />
          </div>

          <div className="ProductCard__name">{name}</div>

          <div className="ProductCard__price">
            {"$" + price.toLocaleString()}
          </div>

          {layout != "minimal" ?? (
            <>
              <div className="ProductCard__tag">{tag ?? tag}</div>
              <Rating className="ProductCard__rating" value={rating} />
            </>
          )}
        </Card>
      </a>
    </Link>
  );
};

export default ProductCard;
