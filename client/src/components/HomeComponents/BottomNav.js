import React from "react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="flex items-center justify-around text-center shadow-lg shadow-zinc-500 h-20 bg-slate-200 rounded-xl">
      <div>
        <Link to="/">
          <p>
            <i className="fa-solid fa-house"></i>
          </p>
          <p>Home</p>
        </Link>
      </div>
      <div>
        <Link to="/cart">
          <p>
            <i className="fa-solid fa-chart-line"></i>
          </p>
          <p>Activity</p>
        </Link>
      </div>
      <div>
        <Link to="/profile">
          <p>
            <i className="fa-solid fa-user"></i>
          </p>
          <p>Profile</p>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
