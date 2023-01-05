import React from "react";
import { Link } from "react-router-dom";
import food1 from "../../assets/food/cake.jpg";
import food2 from "../../assets/food/fuchka.jpg";
import food3 from "../../assets/food/sandwitch.jpg";
import food4 from "../../assets/food/water.jpg";
import BottomNav from "../../components/HomeComponents/BottomNav";

const Activity = () => {
  const Activity = [
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
        <div className="flex items-center justify-center gap-4">
          <Link to="/product">
            <i className="fa-solid fa-angle-left"></i>
          </Link>
          <span className="text-lg font-bold">Activity</span>
        </div>
        <p>
          <i class="fa-solid fa-bars"></i>
        </p>
      </section>
      <section>
        <p className="my-3 font-bold text-lg">Recent</p>
        <div className="flex items-center justify-center">
          <div className="card shadow-xl bg-red-100">
            <figure>
              <img
                className="rounded-xl"
                src="https://placeimg.com/400/225/arch"
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-sm gap-0 p-2">
              <div className="flex items-center justify-between font-bold">
                <span className="text-lg">Burger</span>
                <span>
                  <i class="fa-solid fa-star text-amber-500"></i>4.5
                </span>
              </div>
              <span className="pb-3 text-xs">BDT 150</span>
              <span>Hideout Cafe</span>
              <span>Rajshahi, Bangladesh</span>
            </div>
          </div>
        </div>
      </section>
      <div
        className="fixed
             inset-x-0
             bottom-0
             p-4"
      >
        <BottomNav></BottomNav>
      </div>
    </div>
  );
};

export default Activity;
