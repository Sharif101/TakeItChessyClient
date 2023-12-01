import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SingleOrder from "./SingleOrder";
import axios from "axios";

const AllOrders = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://takeitchessy.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);

  //delete single employee
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
          `https://takeitchessy.vercel.app/orders/${_id}`,
          config
        );
        // console.log(data);
        toast.success("Successfully Deleted!");
      }
    } catch (error) {
      alert(error.response.data.msg);
      toast.error("Something Went Worng");
    }
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-between items-center">
        <h4 className="form-title">All Orders!</h4>

        {/* -------------------------- */}
      </div>
      <hr />

      {/* ----------------------------------- */}
      <div className="food-list">
        <div className="menu-list">
          <div className="menu-list-titles mt-8 mb-8 flex justify-between items-center">
            <h1 className="w-96">Order By</h1>
            <h1 className="w-96 ">Table No</h1>
            <h1 className="w-96 ">Subtotal</h1>
            <h1 className="w-96">Status</h1>
            <h1 className="w-96 text-center">Aciton</h1>
          </div>
        </div>
        {data.map((d) => (
          <SingleOrder key={d._id} d={d} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default AllOrders;
