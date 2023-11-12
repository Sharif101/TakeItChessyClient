import React, { useState } from "react";
import img from "../../images/6310507.jpg";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setAuthentication } from "../../Utilities/auth";
import eyeoff from "../../images/login/eyeoff.png";
import eyeon from "../../images/login/eyeon.png";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };

    axios
      .post("http://localhost:5000/login", payload)
      .then((res) => {
        // console.log(res.data);

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

  const handleClick = () => setShow(!show);

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
            <div className="passInput">
              <input
                placeholder="Your Password"
                value={password}
                type={show ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered input-md w-full max-w-xs "
              />
              {show ? (
                <img
                  src={eyeon}
                  alt=""
                  className="iconlogin1"
                  onClick={handleClick}
                />
              ) : (
                <img
                  src={eyeoff}
                  alt=""
                  className="iconlogin"
                  onClick={handleClick}
                />
              )}
            </div>
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
          {/* ------guest user----- */}
          <button
            onClick={() => {
              setEmail("guest@gmail.com");
              setPassword("123456");
            }}
            className="custom-button w-10/12"
          >
            Guest User Credentials
          </button>

          {/* ------Admin user----- */}
          <button
            onClick={() => {
              setEmail("admin@gmail.com");
              setPassword("admin123");
            }}
            className="custom-button w-10/12"
          >
            Admin User Credentials
          </button>
        </div>
      </div>
    </div>
  );
}
