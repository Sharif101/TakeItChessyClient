import React from "react";
import { FaEye, FaTrash, FaPen } from "react-icons/fa";

const Singleuser = ({ d }) => {
  return (
    <div className="p-2 mt-3 flex justify-between items-center items-center foodicons dashboardText">
      <h1 className="w-96 font-medium">{d.name}</h1>
      <h1 className="w-96  text-center">{d.email}</h1>
      <h1 className="w-96  text-center">{d.phoneNo}</h1>
      <h1 className="w-96 flex items-center justify-around text-center">
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
  );
};

export default Singleuser;
