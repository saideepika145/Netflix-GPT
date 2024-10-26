import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";

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
  // useEffect(()=>{
  //   onAuthStateChanged(auth, (user) => {
      
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       const {uid,email,displayName} = user;
  //       // const dispatch=useDispatch();
  //       dispatch(addUser({uid,email,displayName}));
  //       // ...
  //     } else {
  //       // const dispatch=useDispatch();
  //       dispatch(removeUser());
  //       // ...
  //     }
  //   });
  // },[])
  return <RouterProvider router={appRouter} />;
};

export default Body;
