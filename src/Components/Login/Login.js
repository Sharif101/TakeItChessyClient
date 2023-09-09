import React from "react";
import img from "../../images/6310507.jpg";

export default function Login() {
  return (
    <div>
      <div className=" container mx-auto grid lg:grid-cols-2 gap-2 items-center">
        <div className="loginImage">
          <img src={img} alt="" />
        </div>
        <div className="ml-16 loginPage w-6/12">
          <form
            action=""
            className="w-full flex justify-center flex-col  gap-4"
          >
            <h2>Welcome Back</h2>
            <small>
              Log in with your data that you entered during your registration
            </small>
            <input
              type="text"
              placeholder="Your Email"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="password"
              placeholder="Your Password"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <div>
              <input type="checkbox" /> <span>Keep me logged in</span>
            </div>
            <p>
              Doesn't have an account yet? <span>Sign Up</span>
            </p>
            {/* -------------------------------------- */}
            <button
              className="custom-button w-10/12"
              type="submit"
              // isLoading={loading}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
