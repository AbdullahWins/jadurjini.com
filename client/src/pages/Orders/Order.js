import React from "react";
import { Link } from "react-router-dom";

const Order = ({product}) => {
  return (
    <Link to={`/products/${product?._id}`}>
      <div className="card card-side h-32 w-full bg-red-100 shadow-xl my-4">
        <figure>
          <img
            className="h-32 w-24 rounded-xl"
            src={product?.productImage}
            alt="Movie"
          />
        </figure>
        <div className="card-body flex justify-center gap-0 p-2 text-sm">
          <span className="font-bold text-lg">{product?.productName}</span>
          <span className="pb-2">BDT {product.productPrice}</span>
          <span>{product?.shopName}</span>
          <span>{product?.shopLocation}</span>
        </div>
        <div className="card-actions flex items-center justify-end pr-4">
          <button>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Order;
