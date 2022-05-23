import fs from "fs";
import Layout from "../../components/Layout";

export default function Category() {
  return <Layout></Layout>;
}

export function getAllCategoryIDs() {
  const filenames = fs.readdirSync("../categories");

  console.log(filenames);

  return filenames.map((filename) => {
    return filename.replace(/\.md$/, "");
  });
}
