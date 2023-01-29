import React from "react";
import { Link } from "react-router-dom";

const Order = ({ product }) => {
  return (
    <Link to={`/products/${product?._id}`}>
      <div className="card card-side rounded-lg h-20 bg-gray-100 shadow-xl m-1">
        <figure>
          <img
            className="h-20 w-20 rounded-xl p-2"
            src={product?.productImage}
            alt="Movie"
          />
        </figure>
        <div className="card-body flex justify-center gap-0 text-sm">
          <span className="font-bold">{product?.productName}</span>
          <span>BDT {product.productPrice}</span>
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
