import React, { useEffect, useState } from "react";
import AddEmployeeModal from "../AllModals/AddEmployeeModal";
import AddSingleEmployee from "./AddSingleEmployee";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const AddEmployee = () => {
  const [data, setData] = useState([]);
  let [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/allemployee")
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
          `http://localhost:5000/allemployee/${_id}`,
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
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-between items-center">
        <h4 className="form-title">Add Employee Here!</h4>
        {/* ------------------------------- */}
        <div className="flex items-center">
          <div className="form-control search-food mr-7">
            <input
              type="text"
              placeholder="Search Employee Name"
              className="input input-bordered"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {/* ------------modal--------- */}
          <AddEmployeeModal />
        </div>
        {/* -------------------------- */}
      </div>
      <hr />

      {/* ----------------------------------- */}
      <div className="food-list">
        <div className="menu-list">
          <div className="menu-list-titles mt-8 mb-8 flex justify-between items-center">
            <h1 className="w-96">Name</h1>
            <h1 className="w-96 ">Category</h1>
            <h1 className="w-96 ">Phone No</h1>
            <h1 className="w-96">Email</h1>
            <h1 className="w-96 text-center">Aciton</h1>
          </div>
        </div>

        {/* ----------- */}
        {data
          .filter((d) => {
            return search.toLocaleLowerCase() === ""
              ? d
              : d.employeeName.toLocaleLowerCase().includes(search);
          })
          .map((d) => (
            <AddSingleEmployee d={d} key={d._id} handleDelete={handleDelete} />
          ))}
      </div>
    </div>
  );
};

export default AddEmployee;
