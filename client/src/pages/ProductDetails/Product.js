import React from "react";

const Product = ({ product }) => {
  return (
    <div>
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
    </div>
  );
};

export default Product;
