import React, { useRef, useState } from "react";
import Header from "./Header";
import { bg_img } from "../utils/constant";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const handleSubmit = () => {
    const message = checkValidData(email.current.value, password.current.value);
    console.log("message", message);
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      // Signed up form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user", user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              console.log("profile updated!!")
              // Profile updated!
              // ...
            })
            .catch((error) => {
              setErrorMessage(error);
              navigate("/");
            });

          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          navigate("/");
        });
    } else {
      // Signed in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user loggedIn", user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
          navigate("/");
        });
    }
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="absolute w-full">
        <img src={bg_img} alt="background image not found" className="w-full h-screen object-cover" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-full md:w-3/12 my-32 mx-auto right-0 left-0 bg-black bg-opacity-80 py-4 px-8 text-white rounded-lg"
      >
        <h1 className="font-bold text-xl text-white py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="p-2 my-2 bg-gray-600 w-full"
            type="text"
            placeholder="Fullname"
            ref={name}
          />
        )}
        <input
          className="p-2 my-2 bg-gray-600 w-full"
          type="text"
          name="UserName"
          ref={email}
          placeholder="Email Adress"
        />
        <input
          className="p-2 my-2 bg-gray-600 w-full"
          type="text"
          name="Email"
          ref={password}
          placeholder="Password"
        />
        {errorMessage && (
          <p className="py-4 px-2 text-red-700 text-lg">{errorMessage}</p>
        )}
        <button
          className="w-full bg-red-700 p-2 my-6 rounded-lg"
          onClick={handleSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
          New to Netflix? Signup Now
        </p>
      </form>
    </div>
  );
};

export default Login;
