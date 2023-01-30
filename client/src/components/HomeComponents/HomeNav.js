import React, { useContext } from "react";
import { Link } from "react-router-dom";
import background from "../../assets/img/bg.png";
import { AuthContext } from "../../contexts/AuthContext";

const HomeNav = () => {
  const { user, cart, logout } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100 px-2 py-2">
      <div className="navbar-start">
        <div className="dropdown dropdown-start">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar shadow-md"
          >
            <div className="w-10 rounded-full">
              <img src={background} alt="" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li className="hidden md:block">
              <Link to="/activity" className="justify-between">
                Activity
              </Link>
            </li>
            <li>
              <Link>Settings</Link>
            </li>
            {user ? (
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            ) : (
              <li>
                <Link to="/login">
                  <button>Login</button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <p className="text-center">
          <i className="fa-solid fa-location-dot"></i> New Market, Rajshahi
        </p>
      </div>
      <div className="navbar-end">
        <Link to="/cart">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <i className="fa-solid text-xl fa-bag-shopping"></i>
              <span className="badge badge-xs badge-primary indicator-item">{cart?.length}</span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeNav;
