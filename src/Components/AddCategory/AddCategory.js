import React, { useEffect, useState } from "react";
import AddCategoryModal from "../AllModals/AddCategoryModal";
import SingleCategory from "./SingleCategory";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddCategory = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getallcategory")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);
  // console.log(data);

  const handleDeleteid = async (_id) => {
    const proceed = window.confirm("Are you sure to delete this?");
    try {
      if (proceed) {
        const config = {
          headers: {
            "content-type": "application/json",
          },
        };
        const { data } = await axios.delete(
          `http://localhost:5000/getallcategory/${_id}`,
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

  // -----------------------------------------

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-between items-center">
        <h4 className="form-title">Add Category Here!</h4>
        <div className="flex">
          <AddCategoryModal></AddCategoryModal>
        </div>
      </div>
      <hr />
      {/* ----------------------------------- */}

      <div className="food-list">
        <div className="menu-list">
          <div className="menu-list-titles mt-8 mb-8 flex justify-between items-center">
            <h1 className="w-96">Category Name</h1>
            <h1>Category Picture</h1>
            <h1>Action</h1>
          </div>
          {/* _____________________________________________ */}
          {data.map((category) => (
            <SingleCategory
              category={category}
              key={category._id}
              handleDeleteid={handleDeleteid}
            ></SingleCategory>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
