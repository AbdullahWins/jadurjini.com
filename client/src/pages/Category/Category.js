import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const category = useLoaderData();
  console.log(category);
  return (
    <div>
      <div
        className=" grid grid-cols-2 md:grid-cols-
         gap-4 p-2"
      >
        {category.map((product, i) => (
          <div key={i} className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-32 w-48 md:h-96 md:w-full"
                src={product.productImage}
                alt="foods again"
              />
            </figure>
            <div className="card-body p-2">
              <p className="font-bold">{product.productName}</p>
              <p>BDT {product.productPrice}</p>
              <p>{product.productRating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
