import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/img/login.png";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const { createNewUserEmail, updateUser, addUserToDB } =
    useContext(AuthContext);

  document.title = "JadurJini | Register";

  // const [error, setError] = useState("");

  // const errorToast = () => toast(`${error}`);
  // const successToast = () => toast(`'Account Created!'`);

  const navigate = useNavigate();

  const handleUpdate = (name, phoneNumber) => {
    const newPhoneNumber = parseInt(phoneNumber);
    const profile = {
      displayName: name,
      photoUrl: newPhoneNumber,
    };
    updateUser(profile)
      .then((e) => {
        console.log("profile updated!");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phoneNumber = form.number.value;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = {
      name,
      email,
      phoneNumber,
      password,
    };
    createNewUserEmail(email, password)
      .then(() => {
        // setError("");
        form.reset();
        // successToast();
        addUserToDB(newUser);
        handleUpdate(name, phoneNumber);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        // setError(error.message);
        // errorToast();
      });
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
            type="text"
            name="number"
            placeholder="Number"
            className="input input-bordered w-full mt-2 font-bold"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full my-2 font-bold"
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
