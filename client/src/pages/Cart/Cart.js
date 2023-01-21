import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { user, dbUser, cart, updateCart, subtotal, total, shipping } =
    useContext(AuthContext);
  return (
    <div className="relative px-4 h-screen">
      <section className="flex items-center justify-between py-4">
        <Link to="/">
          <i className="fa-solid fa-angle-left"></i>
        </Link>
        <div className="flex gap-4">
          <p className="font-bold">{user?.displayName}</p>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cart?.map((product, i) => (
          <CartProduct
            product={product}
            updateCart={updateCart}
            dbUser={dbUser}
            key={i}
          ></CartProduct>
        ))}
      </section>
      <section
        className="fixed
             inset-x-0
             bottom-0 p-4 bg-white"
      >
        <div className="text-sm font-bold mb-4">
          <div className="flex items-center justify-between">
            <span>SubTotal:</span>
            <span>BDT {subtotal}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Shipping:</span>
            <span>BDT {shipping}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Total:</span>
            <span>BDT {total}</span>
          </div>
        </div>
        <div className="flex items-center justify-around">
          <div className="row-span-2 flex justify-around gap-4">
            <Link to="/shipping">
              <button className="btn btn-wide btn-sm rounded-3xl bg-gradient-to-r from-purple-600 to-red-600 border-none">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
