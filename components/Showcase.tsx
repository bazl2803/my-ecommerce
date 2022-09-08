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
import React, { useState, useEffect } from "react";
import { Product } from "../types";
import Button from "./Button";
import ProductCard from "../features/products/ProductCard";
import TextBlock from "./TextBlock";

/**
 * Types
 */
interface Props {
  title: string;
  products: Product[];
}

/**
 * Definition
 */
const Showcase = ({ title, products }: Props) => {
  // State
  const [layout, setLayout] = useState("");

  useEffect(() => {
    // Determine layout
    products.length % 2 !== 0 ? setLayout("landscape") : setLayout("minimal");
  }, [products.length]);

  return (
    <div className="Showcase">
      <div className="Showcase__header">
        <TextBlock variant="title">{title}</TextBlock>
        <Button text="See more" />
      </div>
      <div className="Showcase__layout">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            layout={layout}
            id={product.id}
            thumbnail={product.thumbnail}
            name={product.name}
            price={product.price}
            rating={product.rating}
            tag={product.tag}
          />
        ))}
      </div>
    </div>
  );
};

export default Showcase;
