import React from "react";
import img from "../../images/signup-removebg-preview.png";

const Signup = () => {
  return (
    <div>
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
              className="input input-bordered input-md w-full max-w-xs"
            />

            <input
              type="text"
              placeholder="Username"
              className="input input-bordered input-md w-full max-w-xs"
            />

            <input
              type="text"
              placeholder="Phone No"
              className="input input-bordered input-md w-full max-w-xs"
            />

            <input
              type="text"
              placeholder="Your Email"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="password"
              placeholder="Confirm Password"
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
                    value="----"
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
