import React from "react";
import logo from "../netflix-logo.png";
import { USER_AVATAR } from "../utils/constant";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log("error", error);
      });
  };
  return (
    <div className="w-full absolute bg-gradient-to-b from-black z-10 flex justify-between">
      <div>
        <img src={logo} alt="logo-not-found" className="w-40 m-2 " />
      </div>
      {user && (
        <div className="p-4 m-2 flex">
          <img src={USER_AVATAR} alt="user-logo" className="w-8 m-2 " />
          <button className="text-white font-bold" onClick={handleSignOut}>
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
