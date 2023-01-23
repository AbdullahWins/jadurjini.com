import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div>
      <Link to={`/products/${product._id}`}>
        <div className="card w-full bg-base-100 shadow-xl">
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
            <p>{product.productCategory}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
