import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SubCategory = () => {
  const subCategory = useLoaderData();
  return (
    <div className="relative px-4 h-screen">
      <section className="flex items-center justify-between py-4">
        <div className="flex items-center justify-center gap-4">
          <Link to="/">
            <i className="fa-solid fa-angle-left"></i>
          </Link>
        </div>
        <p>
          <Link to="/cart">
            <i className="fa-solid text-xl fa-bag-shopping"></i>
          </Link>
        </p>
      </section>
      <div
        className=" grid grid-cols-2 md:grid-cols-
         gap-4 p-2"
      >
        {subCategory.map((product, i) => (
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

export default SubCategory;
