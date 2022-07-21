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
import ProductCard from "./ProductCard";
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
        <Button text="See more"/>
      </div>
      <div className="Showcase__layout">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} layout={layout} />
        ))}
      </div>
    </div>
  );
};

export default Showcase;
