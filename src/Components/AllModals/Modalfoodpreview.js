import React, { useEffect, useState } from "react";
import "../../style.css";
// import pic from "../../images/download (1).jpg";

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
    <div className="viewModaledit">
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
              <div className="food_info-edit mt-5">
                <div className="food_info-edit-img mr-7">
                  <img src={singlefood.foodpic} alt="" />
                </div>
                <div className="editfrom">
                  <div className="w-full">
                    <p>
                      <span>Food Name: </span>
                      {singlefood.foodname}
                    </p>
                  </div>
                  <div className="w-full">
                    <p>
                      <span>Category: </span>
                      None
                    </p>
                  </div>
                  <div className="w-full">
                    <p>
                      <span>Food Price: </span>
                      {singlefood.foodprice}
                    </p>
                  </div>

                  <div className="w-full">
                    <p>
                      <span>Food Status: </span>
                      {singlefood.foodstatus}
                    </p>
                  </div>
                  <div className="w-full">
                    <p>
                      <span>Food Descriptions: </span>
                      <br />
                      {singlefood.fooddescriptions}
                    </p>
                  </div>
                </div>
              </div>
              {/* -------------------------- */}
              {/* --------------- */}

              {/* ---------------------------- */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modalfoodpreview;
