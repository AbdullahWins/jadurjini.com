import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BottomNav from "../../components/HomeComponents/BottomNav";
import Footer from "../../components/HomeComponents/Footer";
import { AuthContext } from "../../contexts/AuthContext";

const Shops = () => {
  const shops = useLoaderData();
  const [newShops, setNewShops] = useState();
  const { cart } = useContext(AuthContext);

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

  const handleSelected = (e) => {
    const location = e.target.value;
    const url = `${process.env.REACT_APP_baseURL}/locateShops/${location}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNewShops(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative px-4 h-screen">
      <section className="flex items-center justify-between py-4">
        <div className="flex items-center justify-center gap-4">
          <Link to="/">
            <i className="fa-solid fa-angle-left"></i>
          </Link>
        </div>
        <Link to="/cart">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <i className="fa-solid text-xl fa-bag-shopping"></i>
              <span className="badge badge-xs badge-primary indicator-item">
                {cart?.length}
              </span>
            </div>
          </button>
        </Link>
      </section>
      <div className="flex align-center justify-center mb-4">
        <select
          onChange={handleSelected}
          className="select w-full bg-cyan-400 border-none truncate "
        >
          <option value="Bangladesh">All Bangladesh</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Rajshahi">Rajshahi</option>
          <option value="Bogra">Bogra</option>
        </select>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {newShops?.map((shop, i) => (
            <div
              key={i}
              className="relative h-32 md:h-72 md:w-full rounded-xl bordered overflow-hidden"
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
      <p className="h-24"></p>
      <div
        className="fixed
             inset-x-0
             bottom-0
             p-4"
      >
        <BottomNav></BottomNav>
      </div>
      <div className="hidden md:block">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Shops;
