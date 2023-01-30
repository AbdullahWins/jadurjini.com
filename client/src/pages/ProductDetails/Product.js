import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link to={`/products/${product._id}`}>
      <div className="card md:w-48 shadow-xl bg-gray-100 rounded-lg border-solid border-2 border-gray-200">
        <figure>
          <img
            className="h-32 w-48 md:h-44 md:w-full"
            src={product.productImage}
            alt="foods again"
          />
        </figure>
        <div className="card-body p-3 pb-0">
          <div className="flex items-center justify-around">
            <p className="font-bold">{product?.productName}</p>
            <span className="font-bold bg-green-400 px-2 rounded-full">
              {product?.productRating}
              <i className="fa-solid fa-star text-sm"></i>
            </span>
          </div>
          <p className="text-xs text-gray-400">{product?.productCategory}</p>
          <p className="font-bold">BDT: {product?.productPrice} tk</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg text-gray-400 pl-3 pb-2">{product?.shopName}</p>
          <span className="font-bold bg-blue-400 px-1 mr-2 text-gray-100 rounded-full">
            <i className="fa-regular fa-circle-check"></i>
            Verified
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
