import React from "react";
import AddEmployeeModal from "../AllModals/AddEmployeeModal";

const AddEmployee = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h4 className="form-title">Add Employee Here!</h4>
        {/* ------------------------------- */}
        <div className="flex items-center">
          <div className="form-control search-food mr-7">
            <input
              type="text"
              placeholder="Search Employee Name"
              className="input input-bordered"
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
      </div>
    </div>
  );
};

export default AddEmployee;
