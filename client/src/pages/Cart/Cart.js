import React from "react";
import { Link } from "react-router-dom";
import food1 from "../../assets/food/cake.jpg";
import food2 from "../../assets/food/fuchka.jpg";
import food3 from "../../assets/food/sandwitch.jpg";
import food4 from "../../assets/food/water.jpg";

const Cart = () => {
  const cartProducts = [
    {
      productName: "Men's Sweatshirt",
      price: 1550,
      image: food1,
      size: "XL",
    },
    {
      productName: "Jeans",
      price: 1250,
      image: food2,
      size: "XL",
    },
    {
      productName: "Shirt",
      price: 250,
      image: food3,
      size: "XL",
    },
    {
      productName: "Pant",
      price: 2500,
      image: food4,
      size: "XL",
    },
    {
      productName: "Coat",
      price: 2000,
      image: food1,
      size: "XL",
    },
    {
      productName: "Burger",
      price: 2050,
      image: food3,
      size: "XL",
    },
  ];
  return (
    <div className="relative px-4 h-screen">
      <section className="flex items-center justify-between py-4">
        <Link to="/product">
          <i className="fa-solid fa-angle-left"></i>
        </Link>
        <div className="flex gap-4">
          <p>
            <i className="fa-solid fa-share-nodes"></i>
          </p>
          <p>
            <i className="fa-solid fa-bag-shopping"></i>
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cartProducts.map((product, i) => (
          <div
            key={i}
            className="card card-side grid grid-cols-2 bg-red-100 shadow-xl h-36 justify-center"
          >
            <figure>
              <img className="h-36" src={product.image} alt="Movie" />
            </figure>
            <div className="card-body p-2 flex justify-center text-sm gap-0">
              <span className="text-lg font-bold">{product.productName}</span>
              <span className="font-bold opacity-50">BDT {product.price}</span>
              <span>Size: {product.size}</span>
              <span className="font-bold">Price: {product.price}</span>
              <div className="flex items-center justify-end col-span-2">
                <button>
                  <i class="fa-solid fa-minus"></i>
                </button>
                <span className="px-2">1</span>
                <button>
                  <i class="fa-solid fa-plus"></i>
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
          <p>
            <i className="fa-regular fa-bookmark"></i>
          </p>
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