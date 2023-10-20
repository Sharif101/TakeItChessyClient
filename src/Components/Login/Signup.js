import React, { useState } from "react";
import img from "../../images/signup-removebg-preview.png";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate;

  const [errors, setErrors] = useState(null);
  const [name, setName] = useState();
  const [userName, setUserName] = useState();
  const [phoneNo, setPhoneNO] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [role, setRole] = useState("employee");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !userName) {
      toast.error("pleaase fill all field");
    }
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/allusers",
        {
          name,
          userName,
          phoneNo,
          email,
          password,
          confirmPassword,
          role,
        },
        config
      );
      toast.success("Account created");

      setName("");
      setUserName("");
      setPhoneNO("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRole("");

      // console.log(data);
    } catch (error) {
      toast.error("Somthing went wrong");
    }
  };
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className=" container mx-auto grid lg:grid-cols-2 gap-2 items-center">
        <div className="loginImage">
          <img src={img} alt="" />
        </div>
        <div className="mt-20 loginPage w-6/12">
          <form action="" className="w-full flex  flex-col  gap-4">
            <h2>Register Here!</h2>
            <small>
              A registration form is a list of fields that a user will input
              data into and submit to a company or individual.
            </small>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered input-md w-full max-w-xs"
            />

            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="input input-bordered input-md w-full max-w-xs"
            />

            <input
              type="number"
              placeholder="Phone No"
              value={phoneNo}
              onChange={(e) => setPhoneNO(e.target.value)}
              className="input input-bordered input-md w-full max-w-xs"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input input-bordered input-md w-full max-w-xs"
            />
            {/* ------------------------------------------------ */}

            <div className="w-full flex justify-between">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    required
                    type="radio"
                    name="radio-10"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className=" radio checked:bg-blue-500"
                  />
                  <span className="label-text ml-3">Employee</span>
                </label>
              </div>
            </div>

            {/* ------------------------------------------------ */}
            <div>
              <input type="checkbox" /> <span>Keep me logged in</span>
            </div>
            {/* -------------------------------------- */}
            <button
              className="custom-button w-10/12"
              type="submit"
              onClick={submitHandler}
              // isLoading={loading}
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
