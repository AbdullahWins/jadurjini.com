import React, { useState } from "react";

const CartProduct = ({ product, dbUser, updateCart }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const increaseQuantity = () => {
    updateCart(product._id, quantity, true);
    // console.log(quantity, product._id);
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    updateCart(product._id, quantity, false);
    // console.log(quantity, dbUser._id);
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  };
  return (
    <div className="card card-side grid grid-cols-2 bg-red-100 shadow-xl h-36 justify-center">
      <figure>
        <img className="h-36" src={product?.productImage} alt="Movie" />
      </figure>
      <div className="card-body p-2 flex justify-center text-sm gap-0">
        <span className="text-lg font-bold">{product?.productName}</span>
        <span className="font-bold opacity-50">
          BDT {product?.productPrice}
        </span>
        <span>Size: {product?.size}</span>
        <span className="font-bold">Price: {product?.productPrice}</span>
        <div className="flex items-center justify-end col-span-2">
          <button onClick={decreaseQuantity}>
            <i className="fa-solid fa-minus"></i>
          </button>
          <span className="px-2">{quantity}</span>
          <button onClick={increaseQuantity}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
