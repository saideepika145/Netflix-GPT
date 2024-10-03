import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);


const Body = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      
      if (user) {
        // User is signed in, see docs for a list of available properties
        const {uid,email,displayName} = user;
        // const dispatch=useDispatch();
        dispatch(addUser({uid,email,displayName}));
        // ...
      } else {
        // const dispatch=useDispatch();
        dispatch(removeUser());
        // ...
      }
    });
  },[])
  return <RouterProvider router={appRouter} />;
};

export default Body;
