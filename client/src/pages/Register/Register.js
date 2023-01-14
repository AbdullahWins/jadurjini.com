import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/img/login.png";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const { createNewUserEmail, updateUser } = useContext(AuthContext);

  document.title = "JadurJini | Register";

  const [error, setError] = useState("");

  // const errorToast = () => toast(`${error}`);
  // const successToast = () => toast(`'Account Created!'`);

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log("name:" + name, "email:" + email, "pass:" + password);
    // createNewUserEmail(email, password)
    //   .then((result) => {
    //     const user = result.user;
    //     console.log(user);
    //     setError("");
    //     form.reset();
    //     // successToast();
    //     handleUpdate(name);
    //     navigate("/");
    // })
    // .catch((error) => {
    //   console.log(error.message);
    //   // setError(error.message);
    //   // errorToast();
    // });
  };
  const handleUpdate = (name) => {
    const profile = {
      displayName: name,
    };
    updateUser(profile)
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div className="md:flex h-screen md:justify-center md:items-center mx-2">
      <div className="card lg:w-96 bg-base-100">
        <h2 className="text-center text-2xl font-bold pt-4">Welcome</h2>
        <figure className="px-5">
          <img src={login} alt="login img" className="rounded-xl" />
        </figure>
        <form onSubmit={handleSubmit}>
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
          <button className="submit btn w-full bg-gradient-to-r from-blue-500 to-cyan-400 border-none">
            Sign Up
          </button>
        </form>
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
