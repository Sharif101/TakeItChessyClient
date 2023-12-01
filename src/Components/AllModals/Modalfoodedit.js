import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Modalfoodedit = ({ setFoodeditmodal, _id }) => {
  const [data, setData] = useState([]);

  const [foodname, setFoodname] = useState();
  const [foodprice, setFoodprice] = useState();
  const [fooddescriptions, setFooddescriptions] = useState();
  const [foodstatus, setFoodstatus] = useState();

  const handleChangeradio = (e) => {
    setFoodstatus(e.target.value);
    console.log(e.target.value);
  };

  // -----------------------------

  useEffect(() => {
    fetch(`https://takeitchessy.vercel.app/getallfood/${_id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // ----------------------------------------------------

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const { data } = await axios.patch(
        `https://takeitchessy.vercel.app/getallfood/${_id}`,
        {
          foodname,
          foodprice,
          fooddescriptions,
          foodstatus,
        },
        config
      );
      toast.success("Updated successfull");

      console.log(data);
    } catch (error) {
      // console.log(error);
      toast.error("Something Went Worng");
    }
  };

  // ---------------------------------------------
  return (
    <div className="viewModaledit">
      <div className="flex justify-between items-center ">
        <h1 className="modal-title">Edit Your Food</h1>
        <label
          className="close"
          htmlFor=""
          onClick={() => {
            setFoodeditmodal(false);
          }}
        >
          X
        </label>
      </div>

      <div>
        <form action="">
          <div className="mt-5">
            <div>
              {/* --------------- */}
              <div className="food_info-edit mt-5">
                <div className="food_info-edit-img mr-7">
                  <img src={data.foodpic} alt="" />
                </div>
                <div className="editfrom">
                  <div className="inpt-field">
                    <span>Food Name</span>
                    <input
                      type="text"
                      defaultValue={data.foodname}
                      onChange={(e) => setFoodname(e.target.value)}
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="inpt-field">
                    <span>Food Price</span>
                    <input
                      type="number"
                      defaultValue={data.foodprice}
                      placeholder="Type here"
                      onChange={(e) => setFoodprice(e.target.value)}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  {/* --------------- */}
                  <div className="inpt-field">
                    <span>Food Descriptions</span>
                    <textarea
                      defaultValue={data.fooddescriptions}
                      className="textarea w-full"
                      placeholder="Bio"
                      onChange={(e) => setFooddescriptions(e.target.value)}
                    ></textarea>
                  </div>
                  {/* -------------------------------------- */}

                  <div
                    className="w-80 flex justify-between mt-5"
                    onChange={handleChangeradio}
                  >
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text mr-3">In stock</span>
                        <input
                          type="radio"
                          name="radio-10"
                          value="In Stoke"
                          className=" radio checked:bg-blue-500"
                        />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text mr-3">Out of stock</span>
                        <input
                          type="radio"
                          name="radio-10"
                          value="Out of Stoke"
                          className="radio checked:bg-red-500"
                        />
                      </label>
                    </div>
                  </div>

                  {/* -------------------------------------- */}
                  <button
                    className="custom-button w-full"
                    onClick={submitHandler}
                  >
                    Submit
                  </button>
                </div>
              </div>
              {/* -------------------------- */}

              {/* ---------------------------- */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modalfoodedit;
