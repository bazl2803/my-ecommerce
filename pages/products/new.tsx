import { NextPage } from "next";
import React from "react";
import TextBlock from "../../components/TextBlock";
import TextBox from "../../components/TextBox";

const NewProductPage: NextPage = () => {
  return (
    <div className="NewProductPage">
      <TextBlock variant="h6">New Product</TextBlock>

      <TextBox name="product_name" label="Name:" />
      <TextBox name="product_description" label="Description:" />
    </div>
  );
};

export default NewProductPage;
