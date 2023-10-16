import React, { useState } from "react";
import { FaEye, FaTrash, FaPen } from "react-icons/fa";
import "../../style.css";
import Modalfoodpreview from "../AllModals/Modalfoodpreview";
import Modalfoodedit from "../AllModals/Modalfoodedit";

const SingleFood = ({ d, handleDelete }) => {
  const { _id } = d;
  let [foodpreviewmodal, setFoodpreviewmodal] = useState(false);
  let [foodeditmodal, setFoodeditmodal] = useState(false);

  return (
    <div>
      <div className="p-2 mt-3 flex justify-between items-center items-center foodicons dashboardText">
        <h1 className="w-96 font-medium">{d.foodname}</h1>
        <h1 className="w-96  text-center">{d.foodprice}</h1>
        <h1 className="w-96  text-center">{d.foodstatus}</h1>
        <h1 className="w-96 flex items-center  justify-between text-center">
          <div>
            <button
              onClick={() => {
                setFoodeditmodal(true);
              }}
            >
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
            <button onClick={() => handleDelete(_id)}>
              <FaTrash />
            </button>
          </div>
        </h1>
      </div>
      {/* ----------------------------------- */}

      {foodpreviewmodal && (
        <Modalfoodpreview setFoodpreviewmodal={setFoodpreviewmodal} _id={_id} />
      )}

      {foodeditmodal && (
        <Modalfoodedit
          setFoodeditmodal={setFoodeditmodal}
          _id={_id}
        ></Modalfoodedit>
      )}
    </div>
  );
};

export default SingleFood;
