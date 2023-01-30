import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BottomNav from "../../components/HomeComponents/BottomNav";
import Footer from "../../components/HomeComponents/Footer";
import { AuthContext } from "../../contexts/AuthContext";
import Product from "../ProductDetails/Product";

const Category = () => {
  const category = useLoaderData();
  const { cart } = useContext(AuthContext);
  return (
    <div className="relative px-4 h-screen">
      <section className="flex items-center justify-between py-4">
        <div className="flex items-center justify-center gap-4">
          <Link to="/">
            <i className="fa-solid fa-angle-left"></i>
          </Link>
        </div>
        <Link to="/cart">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <i className="fa-solid text-xl fa-bag-shopping"></i>
              <span className="badge badge-xs badge-primary indicator-item">
                {cart?.length}
              </span>
            </div>
          </button>
        </Link>
      </section>
      <hr />
      <p className="text-3xl font-bold text-center py-4">
        <span>Viewing Sub Category: </span>'
        <span className="text-green-400">
          {category[0]?.productSubCategory}
        </span>
        '
      </p>
      <hr />
      <div
        className=" grid grid-cols-2 md:grid-cols-4 
         gap-4 pt-4"
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
      <Footer></Footer>
    </div>
  );
};

export default Category;
