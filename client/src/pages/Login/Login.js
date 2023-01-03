import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import login from "../../assets/img/login.png";

const Login = () => {
  return (
    <div className="md:flex h-screen md:justify-center md:items-center mx-2">
      <div className="card lg:w-96 bg-base-100">
        <h2 className="text-center text-2xl font-bold pt-4">Welcome</h2>
        <figure className="px-5">
          <img src={login} alt="login img" className="rounded-xl" />
        </figure>
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full font-bold"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full my-4 font-bold"
        />
        <button className="btn w-full bg-gradient-to-r from-blue-500 to-cyan-400 border-none">
          Login
        </button>
        <p className="text-xl text-center pt-4">
          Don't have an account?
          <span className="text-bold text-lime-600">
            <Link to="/register"> Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
