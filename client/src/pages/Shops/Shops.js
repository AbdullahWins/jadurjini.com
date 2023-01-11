import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BottomNav from "../../components/HomeComponents/BottomNav";

const Shops = () => {
  const shops = useLoaderData();
  const [newShops, setNewShops] = useState();

  useEffect(() => {
    let newShopNames = [];
    let newShopList = [];
    shops.map((shop) => {
      if (!newShopNames.includes(shop.shopName)) {
        newShopNames.push(shop.shopName);
        newShopList.push(shop);
      }
      return setNewShops(newShopList);
    });
  }, [shops]);

  // useEffect(() => {
  //   const url = `http://localhost:5000/testShops`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setShops(data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div>
      <div className="flex align-center justify-center mt-4">
        <select className="select w-11/12 bg-cyan-400 border-none truncate ">
          <option>Choose your location</option>
          <option>Home</option>
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
          {newShops?.map((shop, i) => (
            <div
              key={i}
              className="relative w-40 h-32 md:h-80 md:w-96 rounded-xl bordered overflow-hidden"
            >
              <Link to={`/shops/${shop.shopName}`}>
                <img
                  src={shop.shopImage}
                  alt="Avatar"
                  className="object-cover w-full h-full"
                />
                <div className="absolute w-full md:py-6 bottom-0 inset-x-0 bg-white opacity-90 text-xs pl-1 md:pl-3">
                  <p className="font-bold text-lg md:text-2xl">
                    {shop.shopName}
                  </p>
                  <p className="font-bold text-lg md:text-2xl">
                    <i className="fa-solid fa-star text-amber-500"></i>
                    {shop.shopRating}
                  </p>
                </div>
              </Link>
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
