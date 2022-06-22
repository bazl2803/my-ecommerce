import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/Card";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import Showcase from "../components/Showcase";
import { Product } from "../types";

const Home: NextPage = () => {
  const productsData: Product[] = [
    {
      id: "1",
      tag: "Best Seller",
      name: "2021 Macbook Pro M1 Max, 1TB Unified Memory, 16GB RAM, Space Gray",
      description: "lorem ipsum sit amet",
      brand: "Apple",
      price: 1599.99,
      rating: 4.2,
      thumbnail:
        "data:image/jpeg;base64,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",
    },
    {
      id: "2",
      name: "Product2",
      description: "lorem ipsum sit amet",
      brand: "BuenaMarca",
      price: 9.21,
      rating: 4.2,
      thumbnail: "imageurl",
    },
    {
      id: "3",
      name: "Product3",
      description: "lorem ipsum sit amet",
      brand: "BuenaMarca",
      price: 9.21,
      rating: 4.2,
      thumbnail: "imageurl",
    },
    {
      id: "4",
      name: "Product4",
      description: "lorem ipsum sit amet",
      brand: "BuenaMarca",
      price: 9.21,
      rating: 4.2,
      thumbnail: "imageurl",
    },
  ];
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <ProductCard product={productsData[0]} />
        <Card>
          <Showcase
            title="Best Seller"
            subtitle="Best seller products in the market"
            products={productsData}
          />
        </Card>
      </div>
    </Layout>
  );
};

export default Home;
