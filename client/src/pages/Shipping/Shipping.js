import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shipping = () => {
  const { dbUser, cart, subtotal, shipping } = useContext(AuthContext);
  const notify = () =>
    toast.success("🦄 Order Placed!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const streetAddress = form.streetAddress.value;
    const city = form.city.value;
    const state = form.state.value;
    const zip = form.zip.value;
    const address = { streetAddress, city, state, zip };
    const userId = dbUser?._id;
    const date = new Date();
    const order = { address, cart, dbUser, userId, date, subtotal, shipping };
    addOrderToDB(order);
    form.reset();
  };

  const addOrderToDB = (order) => {
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          notify();
        }
      });
  };

  return (
    <div className="relative px-4 h-screen">
      <section className="flex items-center justify-between py-4">
        <p>
          <Link to="/cart">
            <i className="fa-solid fa-angle-left"></i>
          </Link>
        </p>
        <div className="flex gap-4">
          <p>
            <Link to="/home">
              <i className="fa-solid fa-house"></i>
            </Link>
          </p>
        </div>
      </section>
      <section className="mt-6">
        <div>
          <h2 className="text-center font-bold">Shipping</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="streetAddress"
              placeholder="Street Address"
              className="input input-bordered w-full mt-2"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="Town/City"
              className="input input-bordered w-full  my-2"
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              className="input input-bordered w-full my-2"
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="Zip/Postcode"
              className="input input-bordered w-full"
              required
            />
            <div className="form-control my-2">
              <label className="label cursor-pointer">
                <span className="label-text font-bold">Cash on Delivery</span>
                <input
                  type="radio"
                  name="cod"
                  className="radio checked:bg-green-500"
                />
              </label>
            </div>
            <button className="submit btn w-full bg-gradient-to-r from-blue-500 to-cyan-400 border-none">
              Continue
            </button>
          </form>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Shipping;
