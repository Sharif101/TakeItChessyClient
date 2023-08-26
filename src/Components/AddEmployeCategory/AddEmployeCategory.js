import React from "react";
import { Toaster } from "react-hot-toast";
import AddEmployeCategoryModal from "../AllModals/AddEmployeCategoryModal";

const AddEmployeCategory = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-between items-center">
        <h4 className="form-title">Add Employee Category Here!</h4>
        <div className="flex">
          <AddEmployeCategoryModal></AddEmployeCategoryModal>
        </div>
      </div>
      <hr />
      {/* ----------------------------------- */}

      <div className="food-list">
        <div className="menu-list">
          <div className="menu-list-titles mt-8 mb-8 flex justify-between items-center">
            <h1 className="w-96">Category Name</h1>
            <h1>Action</h1>
          </div>
          {/* _____________________________________________ */}
        </div>
      </div>
    </div>
  );
};

export default AddEmployeCategory;
