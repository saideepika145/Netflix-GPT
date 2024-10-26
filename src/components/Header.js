import React, { useEffect, useRef } from "react";
import logo from "../netflix-logo.png";
import { LANG_OPTIONS, USER_AVATAR } from "../utils/constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPTSearch } from "../utils/gptSlice";
import { setSelectedLang } from "../utils/langSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch=useSelector((store)=>store?.gpt.showGPTSearch);
  
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
  const handleGPTSearch = () => {
    dispatch(toggleGPTSearch());
  };
  const setLangPreference = (e) => {
    dispatch(setSelectedLang(e.target.value));
  };
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
    <div className="w-full absolute bg-gradient-to-b from-black z-10 flex md:flex-row flex-col md:justify-between text-sm md:text-base">
      <div>
        <img src={logo} alt="logo-not-found" className="w-28 md:w-36 m-auto md:m-2 " />
      </div>
      {user && (
        <div className="flex items-center p-2 md:p-4 md:m-2 justify-between ">
          {showGPTSearch && <select onChange={(e)=>setLangPreference(e)} className="px-2 py-2 m-2 rounded-lg bg-gray-300">{LANG_OPTIONS.map((lang)=><option key={lang.key} label={lang.value} value={lang.key} />)}</select>}
          <button className="px-2  text-black rounded-lg py-2 m-2 bg-gray-300" onClick={handleGPTSearch}>{showGPTSearch?"Home Page":"GPT Search"}</button>
          <div className="flex flex-1">
          <img src={USER_AVATAR} alt="user-logo" className="w-8 m-2" />
          <button className="text-white font-bold" onClick={handleSignOut}>
            SignOut
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
