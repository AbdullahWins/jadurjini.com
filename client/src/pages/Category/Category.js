import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import BottomNav from "../../components/HomeComponents/BottomNav";
import Product from "../ProductDetails/Product";

const Category = () => {
  const category = useLoaderData();
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
        {category?.map((product, i) => (
          <Product key={i} product={product}></Product>
        ))}
      </div>
      <p className="h-24"></p>
      <div
        className="fixed
             inset-x-0
             bottom-0
             p-4"
      >
        <BottomNav></BottomNav>
      </div>
    </div>
  );
};

export default Category;
