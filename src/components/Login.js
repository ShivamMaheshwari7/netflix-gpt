import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-85">
        <h1 className="m-2 font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="m-2 p-3 rounded-md w-[-webkit-fill-available] bg-[#333]"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="m-2 p-3 rounded-md w-[-webkit-fill-available] bg-[#333]"
        />
        <input
          type="password"
          placeholder="Password"
          className="m-2 p-3 rounded-md w-[-webkit-fill-available] bg-[#333]"
        />
        <button className="px-4 py-3 mx-2 my-8 bg-red-700 rounded-md w-[-webkit-fill-available]">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="m-2">
          {isSignInForm ? "New to Netflix? " : "Already registered? "}
          <span
            className="cursor-pointer text-red-600"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
