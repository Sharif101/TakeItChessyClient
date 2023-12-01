import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../style.css";
import toast, { Toaster } from "react-hot-toast";

const AddFoodModal = () => {
  const [foodname, setFoodname] = useState();
  const [foodprice, setFoodprice] = useState();
  const [fooddescriptions, setFooddescriptions] = useState();
  const [foodpic, setFoodpic] = useState();
  const [data, setData] = useState([]);
  const [categoryid, setCategoryid] = useState();
  const [categoryname, setCategory] = useState();
  const [foodstatus, setFoodstatus] = useState();

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCategoryid(e.target.value);
  };

  const handleChangeradio = (e) => {
    setFoodstatus(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!foodname || !foodprice) {
      toast.error("pleaase fill all field");
    }
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/allfood",
        {
          categoryid,
          foodname,
          foodprice,
          fooddescriptions,
          foodstatus,
          categoryname,
          foodpic,
        },
        config
      );
      toast.success("created successfull");

      setFoodname("");
      setFoodprice("");
      setFooddescriptions("");
      setFoodpic("");
      setFoodstatus("");
      setCategoryid("");
      // console.log(data);
    } catch (error) {
      // console.log(error);
      toast.error("Something Went Worng");
    }
  };

  // ---------------------------------------------

  useEffect(() => {
    fetch("http://localhost:5000/getallcategory")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);

  // ---------------------------------------------

  const postPicture = (pics) => {
    setLoading(true);

    if (pics === undefined) {
      alert("please seleted image");
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "Food-site");
      data.append("cloud_name", "dnvh5aa0j");
      fetch("https://api.cloudinary.com/v1_1/dnvh5aa0j/image/upload", {
        method: "Post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setFoodpic(data.url);
          console.log(data.url);
          setLoading(false);
        });
    } else {
      alert("Please seleted image");
    }
  };

  return (
    <div>
      {/* You can open the modal using ID.showModal() method */}
      <button className="btn" onClick={() => window.my_modal_3.showModal()}>
        + Add Food
      </button>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="modal-title  mb-4">
            Never eat more than you can life!
          </h3>
          <div>
            <form className="flex flex-col items-center inpt-form">
              {/* ---------------------------------- */}

              <select
                onChange={handleChange}
                className="select select-bordered w-full max-w-xs seleted-value"
              >
                <option disabled selected>
                  Choose Food Cetagories
                </option>
                {data.map((d) => (
                  <option key={d._id} value={d._id}>
                    {d.categoryname}
                  </option>
                ))}
              </select>

              {/* -------------------------- */}
              <input
                type="text"
                placeholder="Food Name"
                value={foodname}
                onChange={(e) => setFoodname(e.target.value)}
                className="input input-bordered input-md w-full max-w-xs"
              />
              <input
                type="number"
                placeholder="Food Price"
                value={foodprice}
                onChange={(e) => setFoodprice(e.target.value)}
                className="input input-bordered input-md w-full max-w-xs"
              />

              <textarea
                className="textarea textarea-bordered w-full max-w-xs"
                placeholder="Food Descripsion"
                value={fooddescriptions}
                onChange={(e) => setFooddescriptions(e.target.value)}
                type="text"
              ></textarea>

              <input
                type="file"
                placeholder="Add pictures"
                className="input input-bordered input-md w-full max-w-xs"
                multiple
                accept="image/png, image/png, image/jpeg"
                onChange={(e) => postPicture(e.target.files[0])}
                // onBlur={handleinptBlur}
              />

              {/* -------------------------------------- */}

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
                className="custom-button w-9/12"
                type="submit"
                onClick={submitHandler}
                // isLoading={loading}
              >
                Submit
              </button>
            </form>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default AddFoodModal;
