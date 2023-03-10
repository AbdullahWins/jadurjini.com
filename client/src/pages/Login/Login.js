import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import login from "../../assets/img/login.png";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const { loginUserEmail } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUserEmail(email, password)
      .then((result) => {
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="md:flex h-screen md:justify-center md:items-center mx-2">
      <div className="card lg:w-96 bg-base-100">
        <h2 className="text-center text-2xl font-bold pt-4">Welcome</h2>
        <figure className="px-5">
          <img src={login} alt="login img" className="rounded-xl" />
        </figure>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full font-bold"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full my-4 font-bold"
          />
          <button className="btn w-full bg-gradient-to-r from-blue-500 to-cyan-400 border-none">
            Login
          </button>
        </form>
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
