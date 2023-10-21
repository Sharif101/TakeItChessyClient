import React, { useEffect, useState } from "react";
import Singleuser from "./Singleuser";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allusers")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);

  // delete single users
  const handleDelete = async (_id) => {
    const proceed = window.confirm("Are you sure to delete this");
    try {
      if (proceed) {
        const config = {
          headers: {
            "content-type": "application/json",
          },
        };
        const { data } = await axios.delete(
          `http://localhost:5000/allusers/${_id}`,
          config
        );
        toast.success("Successfully Deleted!");
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg);
      toast.error("Something Went Worng");
    }
  };

  return (
    <div className="food-list">
      <Toaster position="top-center" reverseOrder={false} />
      {/* ----------------------------------- */}
      <div className="menu-list">
        <div className="menu-list-titles mt-8 mb-8 flex justify-between items-center">
          <h1 className="w-96">Name</h1>
          <h1 className="w-96  text-center">Email</h1>
          <h1 className="w-96  text-center">PhoneNo</h1>
          <h1 className="w-96 text-center">Aciton</h1>
        </div>
      </div>
      {/* ------------- */}
      {data.map((d) => (
        <Singleuser d={d} key={d._id} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Users;
