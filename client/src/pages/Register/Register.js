import React from "react";
import { Link } from "react-router-dom";
import login from "../../assets/img/login.png";

const Register = () => {
  return (
    <div className="md:flex h-screen md:justify-center md:items-center mx-2">
      <div className="card lg:w-96 bg-base-100">
        <h2 className="text-center text-2xl font-bold pt-4">Welcome</h2>
        <figure className="px-5">
          <img src={login} alt="login img" className="rounded-xl" />
        </figure>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input input-bordered w-full font-bold"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full my-4 font-bold"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full mb-4 font-bold"
        />
        <button className="btn w-full bg-gradient-to-r from-cyan-300 to-blue-600">
          Sign Up
        </button>
        <p className="text-xl text-center pt-4">
          Already have an account?
          <span className="text-bold text-lime-600">
            <Link to="/login"> Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
