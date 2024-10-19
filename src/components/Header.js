import React, { useEffect } from "react";
import logo from "../netflix-logo.png";
import { USER_AVATAR } from "../utils/constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
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
  const dispatch=useDispatch();
  // const navigate=useNavigate();
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      
      if (user) {
        // User is signed in, see docs for a list of available properties
        const {uid,email,displayName} = user;
        // const dispatch=useDispatch();
        dispatch(addUser({uid,email,displayName}));
        navigate("/browse");
        // ...
      } else {
        // const dispatch=useDispatch();
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });
    //called when header unmounts
    return ()=>unsubscribe();
  },[]);
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
