/**
 * ProductCard Component
 * v 1.0.0
 * by Bryan Lemus (brian.lemus@outlook.com)
 */

/* Imports */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Card from "./Card";

/* Props */
interface props {
  image: string;
  tag?: string;
  title: string;
  brand: string;
  price: number;
  rating: number;
}

/* Component */
export default function ProductCard(props: props) {
  return (
    <Card className="ProductCard">
      <div className="ProductCard__image">
        <Image
          src={props.image}
          alt={props.title}
          layout="responsive"
          objectFit="scale-down"
          width={100}
          height={100}
        />
      </div>
      <div className="ProductCard__tag">{props.tag}</div>
      <div className="ProductCard__title">{props.title}</div>
      <div className="ProductCard__brand">{props.brand}</div>
      <div className="ProductCard__price">
        {"$" + props.price.toLocaleString()}
      </div>
      <div className="ProductCard__rating">
        <FontAwesomeIcon icon="star" className="h-4 w-4 text-yellow-400" />{" "}
        {props.rating}
      </div>
    </Card>
  );
}
