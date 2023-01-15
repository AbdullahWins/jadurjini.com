import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../ProductDetails/Product";

const Category = () => {
  const category = useLoaderData();
  return (
    <div>
      <div
        className=" grid grid-cols-2 md:grid-cols-
         gap-4 p-2"
      >
        {category?.map((product, i) => (
          <Product key={i} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Category;
