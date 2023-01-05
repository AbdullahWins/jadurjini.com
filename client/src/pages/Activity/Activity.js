import React from "react";
import { Link } from "react-router-dom";
import food1 from "../../assets/food/cake.jpg";
import food2 from "../../assets/food/fuchka.jpg";
import food3 from "../../assets/food/sandwitch.jpg";
import food4 from "../../assets/food/water.jpg";
import BottomNav from "../../components/HomeComponents/BottomNav";

const Activity = () => {
  const activityArray = [
    {
      productName: "Men's Sweatshirt",
      price: 1550,
      image: food1,
      shopName: "Zara Fashion",
      shopLocation: "Dhanmondi, Bangladesh",
    },
    {
      productName: "Men's Sweatshirt",
      price: 1550,
      image: food2,
      shopName: "Zara Fashion",
      shopLocation: "Dhanmondi, Bangladesh",
    },
    {
      productName: "Men's Sweatshirt",
      price: 1550,
      image: food3,
      shopName: "Zara Fashion",
      shopLocation: "Dhanmondi, Bangladesh",
    },
    {
      productName: "Men's Sweatshirt",
      price: 1550,
      image: food4,
      shopName: "Zara Fashion",
      shopLocation: "Dhanmondi, Bangladesh",
    },
    {
      productName: "Men's Sweatshirt",
      price: 1550,
      image: food1,
      shopName: "Zara Fashion",
      shopLocation: "Dhanmondi, Bangladesh",
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
          <i className="fa-solid fa-bars"></i>
        </p>
      </section>
      <section>
        <p className="my-3 font-bold text-lg">Recent</p>
        <div className="flex items-center justify-center">
          <div className="card shadow-xl bg-red-100">
            <figure>
              <img className="rounded-xl h-72 w-96" src={food1} alt="food" />
            </figure>
            <div className="card-body text-sm gap-0 p-2">
              <div className="flex items-center justify-between font-bold">
                <span className="text-lg">Burger</span>
                <span>
                  <i className="fa-solid fa-star text-amber-500"></i>4.5
                </span>
              </div>
              <span className="pb-3 text-xs">BDT 150</span>
              <span>Hideout Cafe</span>
              <span>Rajshahi, Bangladesh</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        {activityArray.map((activity, i) => (
          <div
            key={i}
            className="card card-side h-28 w-full bg-red-100 shadow-xl my-4"
          >
            <figure>
              <img
                className="h-32 w-24 rounded-xl"
                src={activity.image}
                alt="Movie"
              />
            </figure>
            <div className="card-body flex justify-center gap-0 p-2 text-sm">
              <span className="font-bold text-lg">{activity.productName}</span>
              <span className="pb-2">BDT {activity.price}</span>
              <span>{activity.shopName}</span>
              <span>{activity.shopLocation}</span>
            </div>
            <div className="card-actions flex items-center justify-end pr-4">
              <button>
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        ))}
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
