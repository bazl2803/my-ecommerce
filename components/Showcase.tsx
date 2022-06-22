/**
 *
 * Showcase Component
 *
 * @version 1.0.0
 * @author [Bryan Lemus](https://github.com/bryanlemus)
 */

/**
 * Imports
 */
import React from "react";
import ProductCard from "./ProductCard";
import Subheader from "./Subheader";

/**
 * Types
 */
interface Product {
  id: string;
  thumbnail: string;
  name: string;
  brand: string;
  tag?: string;
  price: number;
  oldPrice?: string;
  rating: number;
}

interface Props {
  title: string;
  subtitle: string;
  products: Product[];
}

/**
 * Definition
 */
const Showcase = ({ title, subtitle, products }: Props) => {
  return (
    <div className="Showcase">
      <>
        <Subheader title={title} subtitle={subtitle} />
        {products.forEach((product, index) => (
          <ProductCard
            key={index}
            image={product.thumbnail}
            name={product.name}
            brand={product.brand}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </>
    </div>
  );
};

export default Showcase;
