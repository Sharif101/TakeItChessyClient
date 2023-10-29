import React, { useState } from "react";
import img from "../../images/6310507.jpg";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setAuthentication } from "../../Utilities/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };

    axios
      .post("http://localhost:5000/login", payload)
      .then((res) => {
        console.log(res.data);

        setAuthentication(res.data.token);
        navigate("/");
        //Refresh
        window.location.reload();
        toast.success("Login Successful");
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
  };
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered input-md w-full max-w-xs"
            />
            <div>
              <input type="checkbox" /> <span>Keep me logged in</span>
            </div>
            <p>
              Doesn't have an account yet?{" "}
              <span>
                <Link to="/signup">Sign Up</Link>
              </span>
            </p>
            {/* -------------------------------------- */}
            <button
              className="custom-button w-10/12"
              type="submit"
              // isLoading={loading}
              onClick={submitHandler}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
