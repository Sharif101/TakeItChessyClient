import React, { useEffect, useState } from "react";
import AddFoodModal from "../AllModals/AddFoodModal";
import "../../style.css";
import SingleFood from "./SingleFood";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddFood = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let [search, setSearch] = useState("");

  // ------------------This is mongobd old process----------------
  // const handleDelete = (_id) => {
  //   const proceed = window.confirm("Are you sure to delete this?");
  //   if (proceed) {
  //     fetch(`http://localhost:5000/getallfood/${_id}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.deletedCount > 0) {
  //           alert("Deleted Successfully");
  //         }
  //       });
  //   }
  // };

  const handleDelete = async (_id) => {
    const proceed = window.confirm("Are you sure to delete this?");
    try {
      if (proceed) {
        const config = {
          headers: {
            "content-type": "application/json",
          },
        };
        const { data } = await axios.delete(
          `http://localhost:5000/getallfood/${_id}`,
          config
        );
        // console.log(data);
        toast.success("Successfully Deleted!");
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg);
      toast.error("Something Went Worng");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/getallfood")
      .then((res) => res.json())
      .then((data) => setData(data));
    setIsLoading(false);
  }, [data]);

  // console.log(isLoading);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-between items-center">
        <h4 className="form-title">Add Food Here!</h4>
        {/* ------------------------------- */}
        <div className="flex items-center">
          <div className="form-control search-food mr-7">
            <input
              type="text"
              placeholder="Search Food Name"
              className="input input-bordered"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {/* ------------modal--------- */}
          <AddFoodModal></AddFoodModal>
        </div>
        {/* -------------------------- */}
      </div>
      <hr />

      <div className="food-list">
        {/* ----------------------------------- */}
        <div className="menu-list">
          <div className="menu-list-titles mt-8 mb-8 flex justify-between items-center">
            <h1 className="w-96">Food Name</h1>
            <h1 className="w-96  text-center">Food Price</h1>
            <h1 className="w-96  text-center">Food Status</h1>
            <h1 className="w-96 text-center">Aciton</h1>
          </div>
        </div>

        {/* ----------------------------------- */}

        {/* ------------------------------------------------------------------------------ */}
        {/* {data.map((d) => (
          <SingleFood
            d={d}
            key={d._id}
            handleDelete={handleDelete}
          ></SingleFood>
        ))} */}

        {data
          .filter((d) => {
            return search.toLocaleLowerCase() === ""
              ? d
              : d.foodname.toLocaleLowerCase().includes(search);
          })
          .map((d) => (
            <SingleFood
              d={d}
              key={d._id}
              handleDelete={handleDelete}
            ></SingleFood>
          ))}
      </div>

      {/* ----------------------------------- */}
    </div>
  );
};

export default AddFood;
