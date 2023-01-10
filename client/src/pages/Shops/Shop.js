import React from "react";
import { useLoaderData } from "react-router-dom";

const Shop = () => {
  const shops = useLoaderData();
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-
    gap-4 p-2"
    >
      {shops.map((shop, i) => {
        return (
          <div key={i} className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-32 w-48 md:h-96 md:w-full"
                src={shop.productImage}
                alt="foods again"
              />
            </figure>
            <div className="card-body p-2">
              <p className="font-bold">{shop.productName}</p>
              <p>BDT {shop.productPrice}</p>
              <p>Shop: {shop.shopName}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
