import React from "react";
import Order from "./Order";

const Orders = ({ order }) => {
  return (
    <div className="card rounded-lg w-full shadow-xl bg-gray-200">
      <div className="m-4 p-1 border-dashed border-2 border-gray-500 border-opacity-40">
        <div className="flex items-ceneter justify-between">
          <p>Subtotal: </p> <p>{order.subtotal} tk</p>
        </div>
        <div className="flex items-ceneter justify-between">
          <p className="text-sm opacity-60">Shipping: </p>
          <p className="text-sm opacity-60">{order.shipping} tk</p>
        </div>
        <div className="flex items-ceneter justify-between">
          <p className="font-bold text-lg">Total:</p>
          <p>{order.shipping + order.subtotal} tk</p>
        </div>
      </div>
      {order?.cart?.map((product, i) => {
        return <Order key={i} product={product}></Order>;
      })}
    </div>
  );
};

export default Orders;
