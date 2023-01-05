import React from "react";

const Cart = () => {
  return (
    <div className="relative px-4 h-screen">
      <section className="flex items-center justify-between py-4">
        <p>
          <i className="fa-solid fa-angle-left"></i>
        </p>
        <div className="flex gap-4">
          <p>
            <i className="fa-solid fa-share-nodes"></i>
          </p>
          <p>
            <i className="fa-solid fa-bag-shopping"></i>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cart;
