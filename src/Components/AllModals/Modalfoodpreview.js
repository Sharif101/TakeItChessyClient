import React, { useEffect, useState } from "react";
import "../../style.css";
import pic from "../../images/download (1).jpg";

const Modalfoodpreview = ({ setFoodpreviewmodal, _id }) => {
  // console.log(_id);

  const [singlefood, setSinglefood] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/getallfood/${_id}`)
      .then((res) => res.json())
      .then((data) => setSinglefood(data));
  }, []);

  // console.log(singlefood);

  return (
    <div className="viewModal">
      <div className="flex justify-between items-center ">
        <h1 className="modal-title">Food Details</h1>
        <label
          className="close"
          htmlFor=""
          onClick={() => {
            setFoodpreviewmodal(false);
          }}
        >
          X
        </label>
      </div>

      <div>
        <form action="">
          <div className="mt-5">
            <div>
              {/* --------------- */}
              <div className="food_info mt-5">
                <div className="w-full mr-7">
                  <img src={pic} alt="" />
                </div>
                <div className="w-full">
                  <p>Food Name:</p>
                  <small>{singlefood.foodname}</small>
                </div>
                <div className="w-full">
                  <p>Category:</p>
                  <small>none</small>
                </div>
                <div className="w-full">
                  <p>Price:</p>
                  <small>{singlefood.foodprice}</small>
                </div>
              </div>
              {/* -------------------------- */}
              {/* --------------- */}
              <div className="food_info mt-5">
                <div className="w-full">
                  <p>Food Descriptions:</p>
                  <small>{singlefood.fooddescriptions}</small>
                </div>
              </div>

              {/* ---------------------------- */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modalfoodpreview;
