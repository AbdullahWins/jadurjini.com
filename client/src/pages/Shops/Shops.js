import React from "react";
import BottomNav from "../../components/HomeComponents/BottomNav";
import food1 from "../../assets/food/cake.jpg";
import food2 from "../../assets/food/fuchka.jpg";
import food3 from "../../assets/food/sandwitch.jpg";
import food4 from "../../assets/food/water.jpg";

const Shops = () => {
  const shopsDetails = [
    { shopImage: food1, shopName: "Aarong", shopRating: "3.5" },
    { shopImage: food2, shopName: "Sailor", shopRating: "3.0" },
    { shopImage: food3, shopName: "Zara", shopRating: "4.5" },
    { shopImage: food4, shopName: "Richman", shopRating: "5.0" },
    { shopImage: food1, shopName: "Dorjibari", shopRating: "4.5" },
    { shopImage: food2, shopName: "Khacha", shopRating: "3.0" },
    { shopImage: food1, shopName: "Aarong", shopRating: "3.5" },
    { shopImage: food2, shopName: "Sailor", shopRating: "3.0" },
    { shopImage: food3, shopName: "Zara", shopRating: "4.5" },
    { shopImage: food4, shopName: "Richman", shopRating: "5.0" },
    { shopImage: food1, shopName: "Dorjibari", shopRating: "4.5" },
    { shopImage: food2, shopName: "Khacha", shopRating: "3.0" },
  ];
  return (
    <div>
      <div className="flex justify-center mt-4">
        <select className="select w-11/12 bg-cyan-400 border-none">
          <option disabled selected>
            Choose your location
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </div>
      <p className="ml-4 my-2 font-bold md:text-center font-xl">
        Dhanmondi, Dhaka
      </p>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {shopsDetails.map((shop, i) => (
            <div
              key={i}
              class="relative w-40 h-32 md:h-80 md:w-96 rounded-xl bordered overflow-hidden"
            >
              <img
                src={shop.shopImage}
                alt="Avatar"
                class="object-cover w-full h-full"
              />
              <div class="absolute w-full md:py-6 bottom-0 inset-x-0 bg-white opacity-90 text-xs pl-1 md:pl-3">
                <p className="font-bold text-lg md:text-2xl">{shop.shopName}</p>
                <p className="font-bold text-lg md:text-2xl">
                  {shop.shopRating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
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

export default Shops;
