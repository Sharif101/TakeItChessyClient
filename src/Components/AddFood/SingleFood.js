import React, { useState } from "react";
import { FaEye, FaTrash, FaPen } from "react-icons/fa";
import "../../style.css";
import Modalfoodpreview from "../AllModals/Modalfoodpreview";

const SingleFood = ({ d }) => {
  const { _id } = d;
  let [foodpreviewmodal, setFoodpreviewmodal] = useState(false);
  return (
    <div>
      <div className="p-2 mt-3 flex justify-between items-center items-center foodicons">
        <h1 className="w-96">{d.foodname}</h1>
        <h1 className="w-96">{d.foodprice}</h1>
        <h1 className="w-96">{d.foodprice}</h1>
        <h1 className="w-96 flex items-center  justify-between text-center">
          <div>
            <button>
              <FaPen />
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setFoodpreviewmodal(true);
              }}
            >
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

      {foodpreviewmodal && (
        <Modalfoodpreview setFoodpreviewmodal={setFoodpreviewmodal} _id={_id} />
      )}
    </div>
  );
};

export default SingleFood;
