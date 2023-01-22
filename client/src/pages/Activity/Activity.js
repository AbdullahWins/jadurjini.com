import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BottomNav from "../../components/HomeComponents/BottomNav";
import { AuthContext } from "../../contexts/AuthContext";
import Orders from "../Orders/Orders";

const Activity = () => {
  const { dbUser } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const newProdcuts = [];
  //   orders.map((order) => {
  //     order.cart.map((cart) => {
  //       console.log(cart);
  //     });
  //   });
  // }, []);

  useEffect(() => {
    if (!dbUser) {
      return;
    }
    // const url = `${process.env.REACT_APP_baseURL}/orders/${dbUser?.email}`;
    const url = `${process.env.REACT_APP_baseURL}/order`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, [dbUser]);
  console.log(orders);

  useEffect(() => {
    if (!dbUser) {
      return;
    }
    // const url = `${process.env.REACT_APP_baseURL}/orders/${dbUser?.email}`;
    const url = `${process.env.REACT_APP_baseURL}/orders/${dbUser?._id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [dbUser]);

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
          <Link to="/cart">
            <i className="fa-solid text-xl fa-bag-shopping"></i>
          </Link>
        </p>
      </section>
      <section>
        <p className="my-3 font-bold text-lg">Recent</p>
        <div className="flex flex-col gap-4 items-center justify-center">
          {orders.map((order, i) => {
            return <Orders key={i} order={order}></Orders>;
          })}
        </div>
      </section>
      {/* <section>
        {products.map((product, i) => (
          <Link key={i} to={`/products/${product?.cart[0]?._id}`}>
            <div className="card card-side h-28 w-full bg-red-100 shadow-xl my-4">
              <figure>
                <img
                  className="h-32 w-24 rounded-xl"
                  src={product?.cart[0]?.productImage}
                  alt="Movie"
                />
              </figure>
              <div className="card-body flex justify-center gap-0 p-2 text-sm">
                <span className="font-bold text-lg">
                  {product?.cart[0]?.productName}
                </span>
                <span className="pb-2">
                  BDT {product?.cart[0]?.productPrice}
                </span>
                <span>{product?.cart[0]?.shopName}</span>
                <span>{product?.cart[0]?.shopLocation}</span>
              </div>
              <div className="card-actions flex items-center justify-end pr-4">
                <button>
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </section> */}
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
