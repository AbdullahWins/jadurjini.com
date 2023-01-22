import React from "react";
import Order from "./Order";

const Orders = ({ order }) => {
  return (
    <div className="card shadow-xl bg-red-100">
      <p>{order._id}</p>
      {order?.cart?.map((product, i) => {
        return <Order key={i} product={product}></Order>;
      })}
    </div>
  );
};

export default Orders;
