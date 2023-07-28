import React, { useEffect, useState } from "react";
import AddFoodModal from "../AllModals/AddFoodModal";
import "../../style.css";
import SingleFood from "./SingleFood";

const AddFood = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getallfood")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);

  // console.log(data);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h4 className="form-title">Add Food Here!</h4>
        <div className="flex">
          <AddFoodModal></AddFoodModal>
        </div>
      </div>
      <hr />

      <div className="food-list">
        {/* ----------------------------------- */}
        <div className="menu-list">
          <div className="menu-list-titles mt-8 mb-8 flex justify-between items-center">
            <h1 className="w-96">Food Name</h1>
            <h1 className="w-96">Food Catagoreis</h1>
            <h1 className="w-96">Food Price</h1>
            <h1 className="w-96 text-center">Aciton</h1>
          </div>
        </div>

        {/* ----------------------------------- */}
        {data.map((d) => (
          <SingleFood d={d} key={d._id}></SingleFood>
        ))}
      </div>

      {/* ----------------------------------- */}
    </div>
  );
};

export default AddFood;
