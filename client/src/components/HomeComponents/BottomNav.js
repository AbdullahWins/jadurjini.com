import React from "react";

const BottomNav = () => {
  return (
    <div className="flex items-center justify-around text-center shadow-lg shadow-zinc-500 h-20 bg-slate-200 rounded-xl">
      <div>
        <p>
          <i class="fa-solid fa-house"></i>
        </p>
        <p>Home</p>
      </div>
      <div>
        <p>
          <i class="fa-solid fa-chart-line"></i>
        </p>
        <p>Activity</p>
      </div>
      <div>
        <p>
          <i class="fa-solid fa-user"></i>
        </p>
        <p>Profile</p>
      </div>
    </div>
  );
};

export default BottomNav;
