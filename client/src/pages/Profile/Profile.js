import React, { useContext } from "react";
import { Link } from "react-router-dom";
import defaultUserImage from "../../assets/user/user.jpg";
import BottomNav from "../../components/HomeComponents/BottomNav";
import { AuthContext } from "../../contexts/AuthContext";

const Profile = () => {
  const { user, dbUser } = useContext(AuthContext);

  return (
    <div className="relative px-4 h-screen">
      <section className="flex items-center justify-between py-4">
        <div className="flex items-center justify-center gap-4">
          <Link to="/">
            <i className="fa-solid fa-angle-left"></i>
          </Link>
          <span className="text-lg font-bold">Profile</span>
        </div>
        <p>
          <i className="fa-solid fa-pen-to-square text-cyan-500"></i>
        </p>
      </section>
      <section className="flex flex-col items-center justify-center p-4">
        <div className="avatar">
          <div className="w-40 rounded-full">
            <img src={defaultUserImage} alt="" />
          </div>
        </div>
        <div className="text-center py-4 text-sm">
          <p className="text-xl font-bold">{user?.displayName}</p>
          <p>{user?.email}</p>
          <p>{dbUser?.phoneNumber}</p>
        </div>
      </section>
      <section className="font-bold pt-4 flex flex-col gap-4">
        <p>
          <i className="fa-solid fa-envelope"></i> Message
        </p>
        <p>
          <i className="fa-solid fa-gear"></i> Settings
        </p>
        <p>
          <i className="fa-solid fa-circle-info"></i> About Us
        </p>
        <p>
          <i className="fa-solid fa-star"></i> Rate
        </p>
      </section>
      <div
        className="fixed
             inset-x-0
             bottom-0
             p-4"
      >
        <BottomNav></BottomNav>
      </div>
    </div>
  );
};

export default Profile;
