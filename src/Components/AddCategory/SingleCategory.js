import React from "react";
import { FaTrash } from "react-icons/fa";

const SingleCategory = ({ category, handleDeleteid }) => {
  const { _id } = category;
  return (
    <div>
      <div className="px-3 mt-8 mb-8 flex justify-between items-center dashboardText">
        <h1 className="w-96 font-medium">{category.categoryname}</h1>
        {/* <h1>{category.categorypic}</h1> */}
        <div>
          <img className="w-7" src={category.categorypic} alt="" />
        </div>
        <h1>
          {" "}
          <div>
            <button onClick={() => handleDeleteid(_id)}>
              <FaTrash />
            </button>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default SingleCategory;
