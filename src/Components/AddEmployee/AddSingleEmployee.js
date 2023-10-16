import React from "react";
import { FaEye, FaTrash, FaPen } from "react-icons/fa";

const AddSingleEmployee = ({ d }) => {
  return (
    <div>
      <div className="p-2 mt-3 flex justify-between items-center items-center foodicons">
        <h1 className="w-96">{d.employeeName}</h1>
        <h1 className="w-96">{d.employeeCategory}</h1>
        <h1 className="w-96">{d.employeePhoneNo}</h1>
        <h1 className="w-96">{d.employeeEmail}</h1>
        <h1 className="w-96 flex items-center  justify-between text-center">
          <div>
            <button>
              <FaPen />
            </button>
          </div>
          <div>
            <button>
              <FaEye />
            </button>
          </div>
          <div>
            <button>
              <FaTrash />
            </button>
          </div>
        </h1>
      </div>
      {/* ----------------------------------- */}
    </div>
  );
};

export default AddSingleEmployee;
