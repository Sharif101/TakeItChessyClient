import React from "react";
import img from "../../images/6310507.jpg";

export default function Login() {
  return (
    <div>
      <div className="container mx-auto grid lg:grid-cols-2 gap-2 items-center">
        <div className="loginImage">
          <img src={img} alt="" />
        </div>
        <div className="flex flex-col items-center">
          <form action="">
            <h2>Welcome Back</h2>
            <input
              type="email"
              placeholder="Type here your email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="password"
              placeholder="Type here your password"
              className="input input-bordered w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
