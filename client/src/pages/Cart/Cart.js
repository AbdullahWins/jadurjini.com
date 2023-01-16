import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const url = `${process.env.REACT_APP_baseURL}/testProducts`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

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
          <div
            key={i}
            className="card card-side grid grid-cols-2 bg-red-100 shadow-xl h-36 justify-center"
          >
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
                <button>
                  <i className="fa-solid fa-minus"></i>
                </button>
                <span className="px-2">1</span>
                <button>
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
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
            <span>BDT 4500</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Shipping:</span>
            <span>BDT 100</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Total:</span>
            <span>4600</span>
          </div>
        </div>
        <div className="flex items-center justify-around">
          <div className="row-span-2 flex justify-around gap-4">
            <button className="btn btn-wide btn-sm rounded-3xl bg-gradient-to-r from-purple-600 to-red-600 border-none">
              Buy Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
