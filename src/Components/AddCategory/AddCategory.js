import React from "react";
import AddCategoryModal from "../AllModals/AddCategoryModal";

const AddCategory = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h4 className="form-title">Add Category Here!</h4>
        <div className="flex">
          <AddCategoryModal></AddCategoryModal>
        </div>
      </div>
      <hr />
      {/* ----------------------------------- */}
    </div>
  );
};

export default AddCategory;
