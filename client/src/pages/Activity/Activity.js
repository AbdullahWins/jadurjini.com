import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BottomNav from "../../components/HomeComponents/BottomNav";
import Footer from "../../components/HomeComponents/Footer";
import { AuthContext } from "../../contexts/AuthContext";
import Orders from "../Orders/Orders";

const Activity = () => {
  const { dbUser } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!dbUser) {
      return;
    }
    const url = `${process.env.REACT_APP_baseURL}/orders/${dbUser?._id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, [dbUser]);
  console.log(orders);

  return (
    <div className="relative px-4 h-screen">
      <div>
        <section className="flex items-center justify-between py-4">
          <div className="flex items-center justify-center gap-4">
            <Link to="/">
              <i className="fa-solid fa-angle-left"></i>
            </Link>
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

export default Activity;
