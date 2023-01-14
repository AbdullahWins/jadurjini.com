import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import food1 from "../../assets/food/cake.jpg";
import BottomNav from "../../components/HomeComponents/BottomNav";

const Activity = () => {
  const [products, setProducts] = useState([]);

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
        <div className="flex items-center justify-center gap-4">
          <Link to="/">
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
        {products.map((product, i) => (
          <Link key={i} to={`/products/${product._id}`}>
            <div className="card card-side h-28 w-full bg-red-100 shadow-xl my-4">
              <figure>
                <img
                  className="h-32 w-24 rounded-xl"
                  src={product.productImage}
                  alt="Movie"
                />
              </figure>
              <div className="card-body flex justify-center gap-0 p-2 text-sm">
                <span className="font-bold text-lg">{product.productName}</span>
                <span className="pb-2">BDT {product.productPrice}</span>
                <span>{product.shopName}</span>
                <span>{product.shopLocation}</span>
              </div>
              <div className="card-actions flex items-center justify-end pr-4">
                <button>
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </div>
          </Link>
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
